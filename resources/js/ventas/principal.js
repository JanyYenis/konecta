"use strict";
const selectProductos = '#idProducto';
const rutaElimnarVenta = 'ventas.delete';
const rutaBuscarProductos = route('productos.buscar-productos');

$(function () {
    iniciarComponentesVentas();
});

window.iniciarComponentesVentas = (form = '', modal = '#modalCrearVenta') => {
    generalidades.marcarRequeridos(form);
    generalidades.touchSpinGenerico('.touchSpin', '#', 0);

    generalidades.Select2({
        "id": `${form} ${selectProductos}`,
        "ruta": rutaBuscarProductos,
        "minimo": 3,
        "modal": modal
    });
}

$(document).on('click', `#btnVentas`, function () {
    $("#tablaVentas").DataTable().ajax.reload(null, false);
});

$(document).on('click', `.btnEliminarVenta`, function () {
    let id = $(this).attr("data-eliminar");
    generalidades.mensajeGeneral('Confirmar acción', 'Desea eliminar realmente el registro?', 'info', 'Confirmar', 'Cancelar', () => {
        eliminar(id);
    });
});

const eliminar = (id) => {
    let ruta = route(rutaElimnarVenta, { 'venta': id } );
    let config = {
        "headers": {
            "Accept": generalidades.CONTENT_TYPE_JSON,
            "Content-Type": generalidades.CONTENT_TYPE_JSON
        },
        "method": "DELETE",
        "body": {
            'Venta': id
        }
    }
    
    const success = (response) => {
        if (response.estado == 'success') {
            generalidades.ocultarCargando('body');
            $("#tablaVentas").DataTable().ajax.reload(null, false);
        }
    }
    generalidades.delete(ruta, config, success);
    generalidades.mostrarCargando('body');
}

require('./listado');
require('./crear');
require('./editar');