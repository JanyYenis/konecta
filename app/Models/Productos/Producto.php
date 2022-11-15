<?php

namespace App\Models\Productos;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    // Estados
    const ACTIVO    = 1;
    const ELIMINADO = 0;

    protected $table = "productos";

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'nombre_producto',
        'referencia',
        'precio',
        'peso',
        'categoria',
        'stock',
        'estado'
    ];

    protected $casts = [
        "created_at" => "date:d/m/Y"
    ];
}
