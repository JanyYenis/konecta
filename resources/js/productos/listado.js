"use strict";

const tablaProductos        = "#tablaProductos";
const rutaCargarListadoProductos = route("productos.listado");

$(function () {
    listadoProductos();
});

/**
 * Función que permite cargar el listado.
 */
const listadoProductos = () => {
    var table = $(tablaProductos).DataTable({
        paging: true,
        responsive: true,
        processing: true,
        serverSide: true,
        ajax: {
            "url": rutaCargarListadoProductos,
            "type": "GET",                  
            
            "headers": {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
            },
            data: function (data) {
                generalidades.mostrarCargando(tablaProductos);
                data = Object.assign(data);
            },
            dataSrc: function (json) {
                generalidades.ocultarCargando(tablaProductos);
                return json.data
            },
        },
        autowidth: false,
        columnDefs: [
            {
                targets: "all",
                className: "text-center"
            },
            {
                targets: "none",
                className: "text-justify"
            }
        ],
        columns: [
            {
                render: function (data, type, full, meta) {
                    return meta.row + 1;
                }
            },
            {
                data: 'nombre_producto',
                name: 'nombre_producto'
            },
            {
                data: 'referencia',
                name: 'referencia'
            },
            {
                data: 'precio',
                name: 'precio'
            },
            {
                data: 'peso',
                name: 'peso'
            },
            {
                data: 'categoria',
                name: 'categoria'
            },
            {
                data: 'stock',
                name: 'stock'
            },
            {
                data: 'created_at',
                name: 'created_at'
            },
            {
                data: 'estado',
                name: 'estado'
            },
            {
                data: 'action',
                name: 'action',
                orderable: false,
                searchable: false
            },
        ],
        order: [
            [0, "asc"]
        ], 
        lengthMenu: [
            [15, 20, 50, 100, -1],
            [15, 20, 50, 100, "Todos"]
        ],
        pageLength: 15,
    });
}