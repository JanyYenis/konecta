/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/ventas/crear.js":
/*!**************************************!*\
  !*** ./resources/js/ventas/crear.js ***!
  \**************************************/
/***/ (() => {



var formCrearVenta = "#formCrearVenta";
var modalCrearVenta = "#modalCrearVenta";
var rutaGuardarVentas = route("ventas.store");
$(function () {
  generalidades.validarFormulario(formCrearVenta, enviarDatos);
});
$(document).on("click", "#btnVentaCrear", function () {
  window.iniciarComponentesVentas(formCrearVenta, modalCrearVenta);
});
var enviarDatos = function enviarDatos(form) {
  var formData = new FormData(document.getElementById("formCrearVenta"));
  var config = {
    'method': 'POST',
    'headers': {
      'Accept': generalidades.CONTENT_TYPE_JSON
    },
    'body': formData
  };
  var success = function success(response) {
    if (response.estado == 'success') {
      $(modalCrearVenta).modal('hide');
      window.iniciarComponentesVentas(formCrearVenta);
      generalidades.resetValidate(formCrearVenta);
      $("#tablaVentas").DataTable().ajax.reload(null, false);
    }
    generalidades.ocultarCargando(formCrearVenta);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  var error = function error(response) {
    generalidades.ocultarCargando(formCrearVenta);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  generalidades.create(rutaGuardarVentas, config, success, error);
  generalidades.mostrarCargando(formCrearVenta);
};

/***/ }),

/***/ "./resources/js/ventas/editar.js":
/*!***************************************!*\
  !*** ./resources/js/ventas/editar.js ***!
  \***************************************/
/***/ (() => {



// rutas 
var rutaEditarVentas = "ventas.editar";

// id y clases
var formEditarVenta = "#formEditarVenta";
var seccionEditarVenta = "#seccionEditarVenta";
var modalEditarVenta = "#modalEditarVenta";
$(function () {
  generalidades.validarFormulario(formEditarVenta, enviarDatos);
});
$(document).on("click", ".btnEditarVenta", function () {
  var id = $(this).attr("data-modificar");
  if (id) {
    cargarDatos(id);
  }
});
var cargarDatos = function cargarDatos(id) {
  var ruta = route(rutaEditarVentas, {
    "venta": id
  });
  generalidades.mostrarCargando('body');
  generalidades.ejecutar('GET', ruta, 'body', modalEditarVenta, seccionEditarVenta, function () {
    window.iniciarComponentesVentas(formEditarVenta, modalEditarVenta);
  });
};
var enviarDatos = function enviarDatos(form) {
  var formData = new FormData(document.getElementById("formEditarVenta"));
  var config = {
    'method': 'PUT',
    'headers': {
      'Accept': generalidades.CONTENT_TYPE_JSON
    },
    'body': formData
  };
  var success = function success(response) {
    if (response.estado == 'success') {
      $(modalEditarVenta).modal('hide');
      generalidades.resetValidate(formEditarVenta);
      $("#tablaVentas").DataTable().ajax.reload(null, false);
    }
    generalidades.ocultarCargando(formEditarVenta);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  var error = function error(response) {
    generalidades.ocultarCargando(formEditarVenta);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  var rutaActualizar = route("ventas.actualizar", {
    "venta": formData.get("id")
  });
  generalidades.edit(rutaActualizar, config, success, error);
  generalidades.mostrarCargando(formEditarVenta);
};

/***/ }),

/***/ "./resources/js/ventas/listado.js":
/*!****************************************!*\
  !*** ./resources/js/ventas/listado.js ***!
  \****************************************/
/***/ (() => {



var tablaVentas = "#tablaVentas";
var rutaCargarListadoVentas = route("ventas.listado");
$(function () {
  listadoVentas();
});

/**
 * Función que permite cargar el listado.
 */
var listadoVentas = function listadoVentas() {
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
      data: function data(_data) {
        generalidades.mostrarCargando(tablaVentas);
        _data = Object.assign(_data);
      },
      dataSrc: function dataSrc(json) {
        generalidades.ocultarCargando(tablaVentas);
        return json.data;
      }
    },
    autowidth: false,
    columnDefs: [{
      targets: "all",
      className: "text-center"
    }, {
      targets: "none",
      className: "text-justify"
    }],
    columns: [{
      render: function render(data, type, full, meta) {
        return meta.row + 1;
      }
    }, {
      data: 'nombre',
      name: 'nombre'
    }, {
      data: 'cantidad',
      name: 'cantidad'
    }, {
      data: 'precio',
      name: 'precio'
    }, {
      data: 'created_at',
      name: 'created_at'
    }, {
      data: 'estado',
      name: 'estado'
    }, {
      data: 'action',
      name: 'action',
      orderable: false,
      searchable: false
    }],
    order: [[0, "asc"]],
    lengthMenu: [[15, 20, 50, 100, -1], [15, 20, 50, 100, "Todos"]],
    pageLength: 15
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./resources/js/ventas/principal.js ***!
  \******************************************/


var selectProductos = '#idProducto';
var rutaElimnarVenta = 'ventas.delete';
var rutaBuscarProductos = route('productos.buscar-productos');
$(function () {
  iniciarComponentesVentas();
});
window.iniciarComponentesVentas = function () {
  var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var modal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#modalCrearVenta';
  generalidades.marcarRequeridos(form);
  generalidades.touchSpinGenerico('.touchSpin', '#', 0);
  generalidades.Select2({
    "id": "".concat(form, " ").concat(selectProductos),
    "ruta": rutaBuscarProductos,
    "minimo": 3,
    "modal": modal
  });
};
$(document).on('click', "#btnVentas", function () {
  $("#tablaVentas").DataTable().ajax.reload(null, false);
});
$(document).on('click', ".btnEliminarVenta", function () {
  var id = $(this).attr("data-eliminar");
  generalidades.mensajeGeneral('Confirmar acción', 'Desea eliminar realmente el registro?', 'info', 'Confirmar', 'Cancelar', function () {
    eliminar(id);
  });
});
var eliminar = function eliminar(id) {
  var ruta = route(rutaElimnarVenta, {
    'venta': id
  });
  var config = {
    "headers": {
      "Accept": generalidades.CONTENT_TYPE_JSON,
      "Content-Type": generalidades.CONTENT_TYPE_JSON
    },
    "method": "DELETE",
    "body": {
      'Venta': id
    }
  };
  var success = function success(response) {
    if (response.estado == 'success') {
      generalidades.ocultarCargando('body');
      $("#tablaVentas").DataTable().ajax.reload(null, false);
    }
  };
  generalidades["delete"](ruta, config, success);
  generalidades.mostrarCargando('body');
};
__webpack_require__(/*! ./listado */ "./resources/js/ventas/listado.js");
__webpack_require__(/*! ./crear */ "./resources/js/ventas/crear.js");
__webpack_require__(/*! ./editar */ "./resources/js/ventas/editar.js");
})();

/******/ })()
;