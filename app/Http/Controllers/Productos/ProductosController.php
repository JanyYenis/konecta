<?php

namespace App\Http\Controllers\Productos;

use App\Http\Controllers\Controller;
use App\Models\Productos\Producto;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class ProductosController extends Controller
{
    public function index(Request $request)
    {
        return view('productos.index');
    }

    public function listado(Request $request)
    {
        $productos = Producto::query();

        return DataTables::eloquent($productos)
            ->addColumn("estado", function ($model) {
                $info['estado'] = $model?->estado;
                return view("sistema.estado", $info);
            })
            ->addColumn("precio", function ($model) {
                return number_format($model?->precio) ?? 'N/A';
            })
            ->addColumn("action", "productos/columnas/acciones")
            ->rawColumns(["action"])
            ->make(true);
    }

    public function store(Request $request)
    {
        $datos = $request->all();
        $precio = str_replace(['.'], '', $request->input('precio'));
        $datos['precio'] = (int) substr($precio, 0, -3);

        $producto = Producto::create($datos);
        if (!$producto) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al registrar el producto.'];
        }

        return [
            'estado'  => 'success',
            'mensaje' => 'Se registro correctamente.'
        ];
    }

    public function editar($producto)
    {
        $producto = Producto::find($producto);
        $info["producto"] = $producto;

        $respuesta["estado"] = "success";
        $respuesta["mensaje"] = "Datos cargados correctamente";
        $respuesta['html'] = view("productos.editar", $info)->render();
    
        return response()->json($respuesta);
    }
    
    public function update(Request $request, $producto)
    {
        $datos = $request->all();
        $precio = str_replace(['.'], '', $request->input('precio'));
        $datos['precio'] = (int) substr($precio, 0, -3);

        $producto = Producto::find($producto);
        $actualizo = $producto->update($datos);
        if (!$actualizo) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al actualizar el registro.'];
        }

        return [
            "estado" => "success",
            "mensaje" => "Se ha actualizado la información correctamente."
        ];
    }

    public function delete(Request $request, $producto)
    {
        $producto = Producto::find($producto);
        $eliminar = $producto->update(['estado' => Producto::ELIMINADO]);
        if (!$eliminar) {
            return ['estado'  => 'error', 'mensaje' => 'Ha ocurrido un error al eliminar el registro.'];
        }

        return ['estado' => 'success'];
    }

    public function buscarProductos(Request $request)
    {
        $nombre = $request->get("busqueda");
        $filtro = "%$nombre%";
        $productos = Producto::select("id", "nombre_producto as text")
            ->where("estado", Producto::ACTIVO)
            ->whereRaw("LOWER(nombre_producto) LIKE LOWER(?)", $filtro)
            ->get();
        return response()->json($productos);
    }
}
