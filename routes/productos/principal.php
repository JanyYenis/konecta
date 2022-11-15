<?php

use App\Http\Controllers\Productos\ProductosController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProductosController::class, 'index'])
    ->name('index');

Route::get('/listado', [ProductosController::class, 'listado'])
    ->name('listado');

Route::get('{producto}/editar', [ProductosController::class, 'editar'])
    ->name('editar');

Route::put('{producto}/actualizar', [ProductosController::class, 'update'])
    ->name('actualizar');

Route::post('/crear', [ProductosController::class, 'store'])
    ->name('store');

Route::delete('{producto}/eliminar', [ProductosController::class, 'delete'])
    ->name('delete');

Route::get('/buscar-productos', [ProductosController::class, 'buscarProductos'])
    ->name('buscar-productos');