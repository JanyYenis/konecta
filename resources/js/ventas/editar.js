"use strict";

// rutas 
const rutaEditarVentas = "ventas.editar";

// id y clases
const formEditarVenta = "#formEditarVenta";
const seccionEditarVenta = "#seccionEditarVenta";
const modalEditarVenta = "#modalEditarVenta";

$(function () {
    generalidades.validarFormulario(formEditarVenta, enviarDatos);
});

$(document).on("click", ".btnEditarVenta", function () {
    let id = $(this).attr("data-modificar");
    if (id) {
        cargarDatos(id);
    }
});

const cargarDatos = (id) => {
    const ruta = route(rutaEditarVentas, { "venta": id });
    generalidades.mostrarCargando('body');
    generalidades.ejecutar('GET', ruta, 'body', modalEditarVenta, seccionEditarVenta, function(){
        window.iniciarComponentesVentas(formEditarVenta, modalEditarVenta);
    });
}

const enviarDatos = (form) => {
    let formData = new FormData(document.getElementById("formEditarVenta"));
    
    const config = {
        'method': 'PUT',
        'headers': {
            'Accept': generalidades.CONTENT_TYPE_JSON,
        },
        'body': formData
    }

    const success = (response) => {
        if (response.estado == 'success') {
            $(modalEditarVenta).modal('hide');
            generalidades.resetValidate(formEditarVenta);
            $("#tablaVentas").DataTable().ajax.reload(null, false);
        }
        generalidades.ocultarCargando(formEditarVenta);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }

    const error = (response) => {
        generalidades.ocultarCargando(formEditarVenta);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }
    const rutaActualizar = route("ventas.actualizar", { "venta": formData.get("id") });
    generalidades.edit(rutaActualizar, config, success, error);
    generalidades.mostrarCargando(formEditarVenta);
}