"use strict";

const tablaVentas        = "#tablaVentas";
const rutaCargarListadoVentas = route("ventas.listado");

$(function () {
    listadoVentas();
});

/**
 * Función que permite cargar el listado.
 */
const listadoVentas = () => {
    var table = $(tablaVentas).DataTable({
        paging: true,
        responsive: true,
        processing: true,
        serverSide: true,
        ajax: {
            "url": rutaCargarListadoVentas,
            "type": "GET",                  
            
            "headers": {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
            },
            data: function (data) {
                generalidades.mostrarCargando(tablaVentas);
                data = Object.assign(data);
            },
            dataSrc: function (json) {
                generalidades.ocultarCargando(tablaVentas);
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
                data: 'nombre',
                name: 'nombre'
            },
            {
                data: 'cantidad',
                name: 'cantidad'
            },
            {
                data: 'precio',
                name: 'precio'
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