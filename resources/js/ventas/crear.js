"use strict";

const formCrearVenta     = "#formCrearVenta";
const modalCrearVenta    = "#modalCrearVenta";
const rutaGuardarVentas = route("ventas.store");

$(function () {
    generalidades.validarFormulario(formCrearVenta, enviarDatos);
});

$(document).on("click", "#btnVentaCrear", function () {
    window.iniciarComponentesVentas(formCrearVenta, modalCrearVenta);
});

const enviarDatos = (form) => {
    let formData = new FormData(document.getElementById("formCrearVenta"));

    const config = {
        'method': 'POST',
        'headers': {
            'Accept': generalidades.CONTENT_TYPE_JSON,
        },
        'body': formData
    }
    const success = (response) => {
        if (response.estado == 'success') {
            $(modalCrearVenta).modal('hide');
            window.iniciarComponentesVentas(formCrearVenta);
            generalidades.resetValidate(formCrearVenta);
            $("#tablaVentas").DataTable().ajax.reload(null, false);
        }
        generalidades.ocultarCargando(formCrearVenta);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }
    const error = (response) => {
        generalidades.ocultarCargando(formCrearVenta);
        generalidades.toastrGenerico(response?.estado, response?.mensaje);
    }
    generalidades.create(rutaGuardarVentas, config, success, error);
    generalidades.mostrarCargando(formCrearVenta);
}