<?php

namespace App\Models\Ventas;

use App\Models\Productos\Producto;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    // Estados
    const ACTIVO    = 1;
    const ELIMINADO = 0;

    protected $table = "ventas";

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'id_producto',
        'cantidad',
        'estado'
    ];

    protected $casts = [
        "created_at" => "date:d/m/Y"
    ];
    
    public function producto()
    {
        return $this->belongsTo(Producto::class, 'id_producto', 'id');
    }
}
