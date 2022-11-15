<?php

namespace App\Http\Controllers\Ventas;

use App\Http\Controllers\Controller;
use App\Models\Productos\Producto;
use App\Models\Ventas\Venta;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class VentaController extends Controller
{
    public function index(Request $request)
    {
        return view('ventas.index');
    }

    public function listado(Request $request)
    {
        $ventas = Venta::with(
            'producto'
        );

        return DataTables::eloquent($ventas)
            ->addColumn("estado", function ($model) {
                $info['estado'] = $model?->estado;
                return view("sistema.estado", $info);
            })
            ->addColumn("nombre", function ($model) {
                return $model?->producto?->nombre_producto ?? 'N/A';
            })
            ->addColumn("precio", function ($model) {
                return number_format($model?->producto?->precio) ?? 'N/A';
            })
            ->addColumn("action", "ventas/columnas/acciones")
            ->rawColumns(["action"])
            ->make(true);
    }

    public function store(Request $request)
    {
        $datos = $request->all();
        $idProducto = $request->input('id_producto');
        $cantidad = $request->input('cantidad');

        $producto = Producto::find($idProducto);
        $resta = $producto?->stock - $cantidad;
        
        if ($producto?->stock <= 0) {
            return ['estado'  => 'error','mensaje' => 'Este producto no tiene mas ejemplares.'];
        }elseif ($resta < 0) {
            return ['estado'  => 'error','mensaje' => 'Este producto no tiene suficientes ejemplares.'];
        }
        
        $venta = Venta::create($datos);
        if (!$venta) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al registrar la venta.'];
        }

        $actualizo = $producto->update(['stock' => $resta]);
        if (!$actualizo) {
            return ['estado'  => 'error','mensaje' => 'Ha ocurrido un error al registrar la venta.'];
        }

        return [
            'estado'  => 'success',
            'mensaje' => 'Se registro correctamente.'
        ];
    }

    public function editar($venta)
    {
        $venta = Venta::with('producto')->find($venta);
        $info["venta"] = $venta;
        $info["producto"] = $venta?->producto;

        $respuesta["estado"] = "success";
        $respuesta["mensaje"] = "Datos cargados correctamente";
        $respuesta['html'] = view("ventas.editar", $info)->render();
    
        return response()->json($respuesta);
    }
    
    public function update(Request $request, $venta)
    {
        $datos = $request->all();
        $idProducto = $request->input('id_producto');
        $cantidad = $request->input('cantidad');

        $venta = Venta::find($venta);
        $producto = Producto::find($idProducto);
        $resta = $producto?->stock - $cantidad;
        if ($producto?->stock <= 0) {
            return ['estado'  => 'error','mensaje' => 'Este producto no tiene mas ejemplares.'];
        }elseif ($resta < 0) {
            return ['estado'  => 'error','mensaje' => 'Este producto no tiene suficientes ejemplares.'];
        }

        $actualizo = $venta->update($datos);
        if (!$actualizo) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al actualizar la venta.'];
        }

        $actualizo = $producto->update(['stock' => $resta]);
        if (!$actualizo) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al actualizar la venta.'];
        }
        
        return [
            "estado" => "success",
            "mensaje" => "Se ha actualizado la información correctamente."
        ];
    }

    public function delete(Request $request, $venta)
    {
        $venta = Venta::find($venta);
        $eliminar = $venta->update(['estado' => Venta::ELIMINADO]);
        if (!$eliminar) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al eliminar la venta.'];
        }

        $producto = Producto::find($venta?->id_producto);
        $suma = $producto?->stock + $venta?->cantidad;
        $actualizar = $producto->update(['stock' => $suma]);
        if (!$actualizar) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al eliminar la venta.'];
        }

        return ['estado' => 'success', 'mensaje' => 'Se elimino correctamente.'];
    }
}
