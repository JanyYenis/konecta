"use strict";
const rutaElimnarProducto = 'productos.delete';

$(function () {
    iniciarComponentesProductos();
});

window.iniciarComponentesProductos = (form = '') => {
    generalidades.iniciarNumeros('.precio');
    generalidades.marcarRequeridos(form);
    generalidades.touchSpinGenerico('.touchSpin', '#', 0);
}

$(document).on('click', `#btnProductos`, function () {
    $("#tablaProductos").DataTable().ajax.reload(null, false);
});

$(document).on('click', `.btnEliminarProducto`, function () {
    let id = $(this).attr("data-eliminar");
    generalidades.mensajeGeneral('Confirmar acción', 'Desea eliminar realmente el registro?', 'info', 'Confirmar', 'Cancelar', () => {
        eliminar(id);
    });
});

const eliminar = (id) => {
    let ruta = route(rutaElimnarProducto, { 'producto': id } );
    let config = {
        "headers": {
            "Accept": generalidades.CONTENT_TYPE_JSON,
            "Content-Type": generalidades.CONTENT_TYPE_JSON
        },
        "method": "DELETE",
        "body": {
            'producto': id
        }
    }
    
    const success = (response) => {
        if (response.estado == 'success') {
            generalidades.ocultarCargando('body');
            $("#tablaProductos").DataTable().ajax.reload(null, false);
        }
    }
    generalidades.delete(ruta, config, success);
    generalidades.mostrarCargando('body');
}

require('./listado');
require('./crear');
require('./editar');