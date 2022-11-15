"use strict";
class Generalidades {

    constructor() {
        $.validator = "";
        // $.validator.messages.required = "";
        this.token = $('meta[name="csrf-token"]').attr("content");
    }

}

Generalidades.prototype.CONTENT_TYPE_JSON = "application/json";
Generalidades.prototype.CONTENT_TYPE_HTML = "text/html";
Generalidades.prototype.CONTENT_TYPE_FORMDATA = "multipart/form-data";

Generalidades.prototype.mostrarCargando = function (elemento) {
    if (elemento != undefined) {
        KTApp.block(elemento, {
            overlayColor: "#000000",
            type: "v2",
            state: "success",
            size: "lg"
        });
    } else {
        KTApp.startPageLoading({
            animate: true
        });
    }
}

Generalidades.prototype.ocultarCargando = function (elemento) {
    if (elemento != undefined) {
        KTApp.unblock(elemento);
    } else {
        KTApp.stopPageLoading();
    }
}

Generalidades.prototype.ejecutar = function (method = 'GET', ruta, elemento = 'body', modal = null, div = null, completado = false) {
    setTimeout(function() {
        $.ajax({
            type: method,
            url: ruta,
            success: function(response) {
                if (response.html != undefined) {
                    $(div).html(response.html);
                }
                if (modal) {
                    generalidades.modalActual(modal);
                }
                if (completado != false) {
                    completado(response);
                }
                generalidades.ocultarCargando(elemento);
            }
        });
    },3000);
}

Generalidades.prototype.Select2 = function (config = {}){
    let select = config?.id ?? '';
    let ruta   = config?.ruta ?? '';
    let minimo = config?.minimo ?? 3;
    let modal  = config?.modal ?? null;
    let params = config.params ?? {};
    let allowClear = config.allowClear ?? true;
    let initialData = config.initialData ?? [];
    let mantenerBusqueda = config.mantenerBusqueda ?? false;
    let processResults = config.processResults ?? false;

    if (!processResults) {
        processResults = function (data) {
            return {
                results: data
            };
        }
    }

        $(select).addClass('selectGenerico');

        let resultado = $(select).select2({
            dropdownParent: $(modal),
            allowClear: allowClear,
            data: initialData,
            tags: true,
            width: "100%",
            tokenSeparators: [','],
            ajax: {
                dataType: 'json',
                url: ruta,
                delay: 250,
                type: "GET",
                data: function(parametros) {
                    params.busqueda = parametros.term;
                    return params;
                },
                processResults: function (data, page) {
                  return {
                    results: data
                  };
                },
            },
            minimumInputLength: minimo,
            language: {
                errorLoading: function () {
                    return "No se pudieron cargar los resultados";
                },
                inputTooLong: function (args) {
                    var remainingChars =
                        args.input.length - args.maximum;

                    var message =
                        "Por favor, elimine " +
                        remainingChars +
                        " car";

                    if (remainingChars == 1) {
                        message += "ácter";
                    } else {
                        message += "acteres";
                    }

                    return message;
                },
                inputTooShort: function (args) {
                    var remainingChars =
                        args.minimum - args.input.length;

                    var message =
                        "Por favor, introduzca " +
                        remainingChars +
                        " car";

                    if (remainingChars == 1) {
                        message += "ácter";
                    } else {
                        message += "acteres";
                    }

                    return message;
                },
                loadingMore: function () {
                    return "Cargando más resultados…";
                },
                maximumSelected: function (args) {
                    var message =
                        "Sólo puede seleccionar " +
                        args.maximum +
                        " elemento";

                    if (args.maximum != 1) {
                        message += "s";
                    }

                    return message;
                },
                noResults: function () {
                    return "No se encontraron resultados";
                },
                searching: function () {
                    return "Buscando…";
                }
            },
        }).on("change", function () {
            let formContenedor = $(this).closest("form");
            if (formContenedor && formContenedor.data("validator")) {
                $(this).valid();
            }
        });

    if (mantenerBusqueda) {
        if (Generalidades.prototype.terminosBuscados == undefined) {
            Generalidades.prototype.terminosBuscados = {};
        }
        resultado.on('select2:open', function () {
            if (Generalidades.prototype.terminosBuscados != undefined && Generalidades.prototype.terminosBuscados[id]) {
                $('.select2-search input')
                    .focus()
                    .val(Generalidades.prototype.terminosBuscados[id])
                    .trigger('input');
            }
        });
        resultado.on('select2:closing', function () {
            Generalidades.prototype.terminosBuscados[id] = $('.select2-search input').prop('value');
        });
    }
    
    return resultado;
}

Generalidades.prototype.toastrGenerico = function (estado, mensaje, configuracion = null) {
    if (!configuracion) {
        configuracion = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: "toast-bottom-left",
            preventDuplicates: false,
            onclick: null,
            showDuration: "500",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        };
    }
    toastr.options = configuracion;
    if (estado && mensaje) {
        toastr[estado](mensaje);
    }
}

Generalidades.prototype.touchSpinGenerico = function (element, prefix = "#", minimo = 1, maximo = 100) {
    $(element).TouchSpin({
        buttondown_class: "btn btn-secondary",
        buttonup_class: "btn btn-secondary",
        min: minimo,
        max: maximo,
        stepinterval: 50,
        maxboostedstep: 10000000,
        prefix,
        firstclickvalueifempty: minimo,
    });
}

Generalidades.prototype.mensajeGeneral = function (titulo, mensaje, color, boton1, boton2, accionConfirmar = null, accionCancelar = null) {

    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: color,
        showCancelButton: true,
        confirmButtonText: boton1 ?? "Yes, delete it!",
        cancelButtonText: boton2 ?? "No, cancel!",
        reverseButtons: true
    }).then(function(resultado) {
        if (resultado.value) {
            if (accionConfirmar != null) {
                accionConfirmar();
                Swal.fire(
                    "Eliminado",
                    "Se elimino correctamente.",
                    "success"
                )
            }
        } else if (resultado.dismiss === "cancel") {
            if (accionCancelar) {
                accionCancelar();
            }
            Swal.fire(
                "Cancelado",
                "Cancelaste la accion de eliminar",
                "error"
            )
        }
    });
}

Generalidades.prototype.modalActual = function (modal, accion = null) {
    const modalActual = $(".modal:visible");
    if (modalActual.length) {
        $(modal).one("hidden.bs.modal", function () {
            modalActual.modal("show");
        });
        modalActual.one("hidden.bs.modal", () => {
            $(modal).modal("show");
        });
        modalActual.modal("hide");
    } else {
        $(modal).modal("show");
    }
    if (accion != null) {
        accion();
    }
}

Generalidades.prototype.marcarRequeridos = function (form) {
    $(`${form} .requerido .marcadoRequerido`).remove();
    $(`${form} .requerido`).each(function () {
        let label = $(this).text();
        $(this).html(`${label} <span class="text-danger marcadoRequerido">*</span>`);
    });
}

Generalidades.prototype.iniciarNumeros = function (elemento) {
    $(elemento).mask('000.000.000,00', {
        reverse: true,
        placeholder: "000.000.000,00"
    });
}

// formularios
Generalidades.prototype.validarDatos = function (
    formElement,
    submitHandler,
    invalidHandler = false,
    highlight = false,
    unhighlight = false,
    errorPlacement = false,
    rules = false,
    messages = false
) {
    if (invalidHandler === false) {
        invalidHandler = evt => {
            this.toastrGenerico(
                "error",
                "Ha ocurrido un error de validación, por favor, verifica todos los campos."
            );
            evt.preventDefault();
            return false;
        };
    }
    if (highlight === false) {
        highlight = element => {
            if ($(element).hasClass("selectGenerico")) {
                $(element)
                    .parent()
                    .addClass("is-invalid");
                $(element)
                        .parent()
                        .find(".select2-selection")
                        .css("border-color", "#fd397a");
                return true;
            }

            if ($(element).hasClass("summernote")) {
                $(element).parent().find(".note-editor").addClass("line-error");
                return true;
            }

            if ($(element).closest(".kt-checkbox").length == 1) {
                let contenedorCheckbox = $(element).closest(".kt-checkbox");
                if (contenedorCheckbox.parent().find(".errorCheckbox").length == 0) {
                    $("<span class='errorCheckbox text-danger'><br/>Este campo es requerido.</span>").insertAfter(contenedorCheckbox);
                }
                return true;
            }

            $(element)
                .closest(".form-control")
                .addClass("is-invalid");
        };
    }
    if (unhighlight === false) {
        unhighlight = element => {
            if ($(element).hasClass("selectGenerico")) {
                $(element)
                    .parent()
                    .removeClass("is-invalid");
                $(element)
                    .parent()
                    .find(".select2-selection")
                    .css("border-color", "");
                return true;
            }
            if ($(element).hasClass("summernote")) {
                $(element).parent().find(".note-editor").removeClass("line-error");
                return true;
            }

            if ($(element).closest(".kt-checkbox").parent().find(".errorCheckbox").length >= 1) {
                $(element).closest(".kt-checkbox").parent().find(".errorCheckbox").remove();
                return true;
            }

            $(element)
                .closest(".form-control")
                .removeClass("is-invalid");
        };
    }
    $(formElement).validate({
        ignoreTitle: true,
        ignore: ':hidden:not(.summernote),.note-editable.card-block',
        errorElement: "span", //default input error message container
        errorClass: "help-block help-block-error", // default input error message class
        focusInvalid: true,
        onfocusout: false,
        lang: "es",
        highlight, 
        unhighlight,
        invalidHandler,
        submitHandler,
        errorPlacement,
        rules,
        messages
    });
}

Generalidades.prototype.validarFormulario = function (formularioId, accion) {
    const submitHandler = (form, e) => {
        e.preventDefault();

        let divValidacion = $(formularioId).find(".div-validacion");
        if (divValidacion.length == 1) {
            divValidacion.addClass("d-none");
        }

        let botonActivador = document.activeElement;
        if (!((botonActivador instanceof HTMLButtonElement) || (botonActivador instanceof HTMLInputElement)) && !botonActivador.getAttribute("type") == "submit") {
            botonActivador = null;
        }
        accion(form, botonActivador);
        return false;
    };
    this.validarDatos(formularioId, submitHandler);
}

Generalidades.prototype.peticionHttp = async function (url, config, success, error = null, tipo = this.CONTENT_TYPE_JSON) {
    const headers = new Headers(config.headers);
    if (!headers.has("X-CSRF-TOKEN")) {
        headers.append("X-CSRF-TOKEN", this.token);
    }

    if (headers.has("Content-Type")) {
        const content = headers.get("Content-Type");

        if (config.body && content == this.CONTENT_TYPE_JSON) {
            if (config.body instanceof FormData) {
                config.body = this.formDataAJson(config.body, true);
            } else {
                config.body = JSON.stringify(config.body);
            }
        }
    }
    let accept = headers.has("Accept") ? headers.get("Accept") : this.CONTENT_TYPE_JSON;

    config.headers = headers;
    
    const request = new Request(url, config);
    try {
        const response = await fetch(request);
        
        if (response.status == 401) {
            return this.mensajeSwal("Tu sesión ha expirado. Inicia sesión para continuar.", "info", "Sesión expirada", null, () => {window.location.reload()}, false, () => {window.location.reload()});
        }

        let respuesta;
        switch (accept) {
            case this.CONTENT_TYPE_HTML:
                respuesta = await response.text();
                break;
            case this.CONTENT_TYPE_JSON:
                respuesta = await response.json();
                if (respuesta.statusCode === 422 && error != null) {
                    return error(respuesta);
                }
                break;
            default:
                respuesta = await response.json();
                break;

        }
        success(respuesta);
    } catch (ex) {
        if (error == null)
            error = ex => {
                console.error(ex);
            };
        error(ex);
    }
}

Generalidades.prototype.create = function (url, config, success, error = null, tipo = this.CONTENT_TYPE_JSON) {
    if (config.body) {
        config.method = "POST";
        this.peticionHttp(url, config, success, error, tipo);
        return true;
    }
    console.error("Debes enviar datos.");
    return false;
}

Generalidades.prototype.refrescarSeccion = function (btnAccion, ruta, div, completado = false) {
    if (btnAccion) {
        btnAccion.prop("disabled", true);
    }

    this.mostrarCargando(div);
    const success = response => {
        if (btnAccion) {
            btnAccion.prop("disabled", false);
        }
        this.ocultarCargando(div);
        if (response.html != undefined) {
            $(div).html(response.html);
        }
        if (response.estado && response.mensaje) {
            this.toastrGenerico(response.estado, response.mensaje);
        }
        if (completado != false) {
            completado(response);
        }
    };
    const error = response => {
        if (btnAccion) {
            btnAccion.prop("disabled", false);
        }
        this.ocultarCargando(div);
    };
    
    const config = {
        "headers": {
            "Content-Type": generalidades.CONTENT_TYPE_JSON,
            "Accept": generalidades.CONTENT_TYPE_JSON
        }
    };
    
    this.get(ruta, config, success, error);
}

Generalidades.prototype.get = function (url, config, success, error = null, tipo = this.CONTENT_TYPE_JSON) {
    if (!config.body) {
        config.method = "GET";
        this.peticionHttp(url, config, success, error, tipo);
        return true;
    }
    console.error("Una peticion GET no debe tener body");
    return false;
}

Generalidades.prototype.post = function (url, config, success, error = null, tipo = this.CONTENT_TYPE_JSON) {
    config.method = "POST";
    this.peticionHttp(url, config, success, error, tipo);
    return true;
}

Generalidades.prototype.delete = function (url, config, success, error = null, tipo = this.CONTENT_TYPE_JSON) {
    if (config.method === "DELETE") {
        this.peticionHttp(url, config, success, error, tipo);
        return true;
    }
    console.error("Error al eliminar.");
    return false;
}

Generalidades.prototype.edit = function (url, config, success, error = null, tipo = this.CONTENT_TYPE_JSON) {
    
    const headers = new Headers(config.headers); // Crea un objeto de tipo Headers dado el parámetro.
    if (!headers.has("Content-Type")) {
        headers.append("Content-Type", this.CONTENT_TYPE_JSON);
    }
    config.headers = headers;

    
    if (config.body && (config.method === "PUT" || config.method === "PATCH")) {
        this.peticionHttp(url, config, success, error, tipo);
        return true;
    }
    return false;
}

Generalidades.prototype.formDataAJson = function (formData, stringify = false) {
    let json = {};
    formData.forEach((value, key) => {
        json[key] = value;
    });
    if (stringify) {
        return JSON.stringify(json);
    }
    return json;
}

Generalidades.prototype.resetValidate = function (idForm) {
    let validator = $(idForm).validate();
    $(idForm).find(".kt-select2")
        .empty()
        .trigger("change");
    $(idForm)
    $(idForm)
        .find(".form-control")
        .val("");

    $(idForm)
        .find(".kt-selectpicker")
        .val("")
        .selectpicker("refresh");
    $(idForm)
        .find(".touchspin")
        .trigger("touchspin.updatesettings", { "initval": 0 })
    
    $(idForm)
        .find(".div-validacion")
        .addClass("d-none");
    
    validator.resetForm();
}

window.generalidades = new Generalidades();
