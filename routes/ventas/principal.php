<?php

use App\Http\Controllers\Ventas\VentaController;
use Illuminate\Support\Facades\Route;

Route::get('/', [VentaController::class, 'index'])
    ->name('index');

Route::get('/listado', [VentaController::class, 'listado'])
    ->name('listado');

Route::get('{venta}/editar', [VentaController::class, 'editar'])
    ->name('editar');

Route::put('{venta}/actualizar', [VentaController::class, 'update'])
    ->name('actualizar');

Route::post('/crear', [VentaController::class, 'store'])
    ->name('store');

Route::delete('{venta}/eliminar', [VentaController::class, 'delete'])
    ->name('delete');