"use strict";

const formCrearProducto     = "#formCrearProducto";
const modalCrearProducto    = "#modalCrearProducto";
const rutaGuardarProductos = route("productos.store");

$(function () {
    generalidades.validarFormulario(formCrearProducto, enviarDatos);
});

const enviarDatos = (form) => {
    let formData = new FormData(document.getElementById("formCrearProducto"));

    const config = {
        'method': 'POST',
        'headers': {
            'Accept': generalidades.CONTENT_TYPE_JSON,
        },
        'body': formData
    }
    const success = (response) => {
        if (response.estado == 'success') {
            $(modalCrearProducto).modal('hide');
            window.iniciarComponentesProductos(formCrearProducto);
            generalidades.resetValidate(formCrearProducto);
            $("#tablaProductos").DataTable().ajax.reload(null, false);
        }
        generalidades.ocultarCargando(formCrearProducto);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }
    const error = (response) => {
        generalidades.ocultarCargando(formCrearProducto);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }
    generalidades.create(rutaGuardarProductos, config, success, error);
    generalidades.mostrarCargando(formCrearProducto);
}