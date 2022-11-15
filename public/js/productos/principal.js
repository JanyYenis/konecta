/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/productos/crear.js":
/*!*****************************************!*\
  !*** ./resources/js/productos/crear.js ***!
  \*****************************************/
/***/ (() => {



var formCrearProducto = "#formCrearProducto";
var modalCrearProducto = "#modalCrearProducto";
var rutaGuardarProductos = route("productos.store");
$(function () {
  generalidades.validarFormulario(formCrearProducto, enviarDatos);
});
var enviarDatos = function enviarDatos(form) {
  var formData = new FormData(document.getElementById("formCrearProducto"));
  var config = {
    'method': 'POST',
    'headers': {
      'Accept': generalidades.CONTENT_TYPE_JSON
    },
    'body': formData
  };
  var success = function success(response) {
    if (response.estado == 'success') {
      $(modalCrearProducto).modal('hide');
      window.iniciarComponentesProductos(formCrearProducto);
      generalidades.resetValidate(formCrearProducto);
      $("#tablaProductos").DataTable().ajax.reload(null, false);
    }
    generalidades.ocultarCargando(formCrearProducto);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  var error = function error(response) {
    generalidades.ocultarCargando(formCrearProducto);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  generalidades.create(rutaGuardarProductos, config, success, error);
  generalidades.mostrarCargando(formCrearProducto);
};

/***/ }),

/***/ "./resources/js/productos/editar.js":
/*!******************************************!*\
  !*** ./resources/js/productos/editar.js ***!
  \******************************************/
/***/ (() => {



// rutas 
var rutaEditarProductos = "productos.editar";

// id y clases
var formEditarProducto = "#formEditarProducto";
var seccionEditarProducto = "#seccionEditarProducto";
var modalEditarProducto = "#modalEditarProducto";
$(function () {
  generalidades.validarFormulario(formEditarProducto, enviarDatos);
});
$(document).on("click", ".btnEditarProducto", function () {
  var id = $(this).attr("data-modificar");
  if (id) {
    cargarDatos(id);
  }
});
var cargarDatos = function cargarDatos(id) {
  var ruta = route(rutaEditarProductos, {
    "producto": id
  });
  generalidades.mostrarCargando('body');
  generalidades.ejecutar('GET', ruta, 'body', modalEditarProducto, seccionEditarProducto, function () {
    window.iniciarComponentesProductos(formEditarProducto);
  });
};
var enviarDatos = function enviarDatos(form) {
  var formData = new FormData(document.getElementById("formEditarProducto"));
  var config = {
    'method': 'PUT',
    'headers': {
      'Accept': generalidades.CONTENT_TYPE_JSON
    },
    'body': formData
  };
  var success = function success(response) {
    if (response.estado == 'success') {
      $(modalEditarProducto).modal('hide');
      generalidades.resetValidate(formEditarProducto);
      $("#tablaProductos").DataTable().ajax.reload(null, false);
    }
    generalidades.ocultarCargando(formEditarProducto);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
  };
  var error = function error(response) {
    generalidades.ocultarCargando(formEditarProducto);
    generalidades.toastrGenerico(response === null || response === void 0 ? void 0 : response.estado, response === null || response === void 0 ? void 0 : response.mensaje);
    generalidades.mostrarValidaciones(formEditarProducto, response.validaciones);
  };
  var rutaActualizar = route("productos.actualizar", {
    "producto": formData.get("id")
  });
  generalidades.edit(rutaActualizar, config, success, error);
  generalidades.mostrarCargando(formEditarProducto);
};

/***/ }),

/***/ "./resources/js/productos/listado.js":
/*!*******************************************!*\
  !*** ./resources/js/productos/listado.js ***!
  \*******************************************/
/***/ (() => {



var tablaProductos = "#tablaProductos";
var rutaCargarListadoProductos = route("productos.listado");
$(function () {
  listadoProductos();
});

/**
 * Función que permite cargar el listado.
 */
var listadoProductos = function listadoProductos() {
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
      data: function data(_data) {
        generalidades.mostrarCargando(tablaProductos);
        _data = Object.assign(_data);
      },
      dataSrc: function dataSrc(json) {
        generalidades.ocultarCargando(tablaProductos);
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
      data: 'nombre_producto',
      name: 'nombre_producto'
    }, {
      data: 'referencia',
      name: 'referencia'
    }, {
      data: 'precio',
      name: 'precio'
    }, {
      data: 'peso',
      name: 'peso'
    }, {
      data: 'categoria',
      name: 'categoria'
    }, {
      data: 'stock',
      name: 'stock'
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
/*!*********************************************!*\
  !*** ./resources/js/productos/principal.js ***!
  \*********************************************/


var rutaElimnarProducto = 'productos.delete';
$(function () {
  iniciarComponentesProductos();
});
window.iniciarComponentesProductos = function () {
  var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  generalidades.iniciarNumeros('.precio');
  generalidades.marcarRequeridos(form);
  generalidades.touchSpinGenerico('.touchSpin', '#', 0);
};
$(document).on('click', "#btnProductos", function () {
  $("#tablaProductos").DataTable().ajax.reload(null, false);
});
$(document).on('click', ".btnEliminarProducto", function () {
  var id = $(this).attr("data-eliminar");
  generalidades.mensajeGeneral('Confirmar acción', 'Desea eliminar realmente el registro?', 'info', 'Confirmar', 'Cancelar', function () {
    eliminar(id);
  });
});
var eliminar = function eliminar(id) {
  var ruta = route(rutaElimnarProducto, {
    'producto': id
  });
  var config = {
    "headers": {
      "Accept": generalidades.CONTENT_TYPE_JSON,
      "Content-Type": generalidades.CONTENT_TYPE_JSON
    },
    "method": "DELETE",
    "body": {
      'producto': id
    }
  };
  var success = function success(response) {
    if (response.estado == 'success') {
      generalidades.ocultarCargando('body');
      $("#tablaProductos").DataTable().ajax.reload(null, false);
    }
  };
  generalidades["delete"](ruta, config, success);
  generalidades.mostrarCargando('body');
};
__webpack_require__(/*! ./listado */ "./resources/js/productos/listado.js");
__webpack_require__(/*! ./crear */ "./resources/js/productos/crear.js");
__webpack_require__(/*! ./editar */ "./resources/js/productos/editar.js");
})();

/******/ })()
;