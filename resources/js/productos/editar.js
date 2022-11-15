"use strict";

// rutas 
const rutaEditarProductos = "productos.editar";

// id y clases
const formEditarProducto = "#formEditarProducto";
const seccionEditarProducto = "#seccionEditarProducto";
const modalEditarProducto = "#modalEditarProducto";

$(function () {
    generalidades.validarFormulario(formEditarProducto, enviarDatos);
});

$(document).on("click", ".btnEditarProducto", function () {
    let id = $(this).attr("data-modificar");
    if (id) {
        cargarDatos(id);
    }
});

const cargarDatos = (id) => {
    const ruta = route(rutaEditarProductos, { "producto": id });
    generalidades.mostrarCargando('body');
    generalidades.ejecutar('GET', ruta, 'body', modalEditarProducto, seccionEditarProducto, function(){
        window.iniciarComponentesProductos(formEditarProducto);
    });
}

const enviarDatos = (form) => {
    let formData = new FormData(document.getElementById("formEditarProducto"));
    
    const config = {
        'method': 'PUT',
        'headers': {
            'Accept': generalidades.CONTENT_TYPE_JSON,
        },
        'body': formData
    }

    const success = (response) => {
        if (response.estado == 'success') {
            $(modalEditarProducto).modal('hide');
            generalidades.resetValidate(formEditarProducto);
            $("#tablaProductos").DataTable().ajax.reload(null, false);
        }
        generalidades.ocultarCargando(formEditarProducto);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }

    const error = (response) => {
        generalidades.ocultarCargando(formEditarProducto);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
        generalidades.mostrarValidaciones(formEditarProducto, response.validaciones);
    }
    const rutaActualizar = route("productos.actualizar", { "producto": formData.get("id") });
    generalidades.edit(rutaActualizar, config, success, error);
    generalidades.mostrarCargando(formEditarProducto);
}