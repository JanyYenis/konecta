@php
    $id = $model?->id;
    $estado = $model?->estado == 1;
@endphp
<div class="card-toolbar">
    <div class="dropdown dropdown-inline">
        <button class="btn btn-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-h"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-md dropdown-menu-right btnAccionesProductos" x-placement="top-end" style="position: absolute; transform: translate3d(-200px, -350px, 0px); top: 0px; left: 0px; will-change: transform;">
            <ul class="navi navi-hover">
                <li class="navi-header font-weight-bold py-4">
                    <span class="font-size-lg">Opciones</span>
                    <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="" data-original-title="Click to learn more..."></i>
                </li>
                <li class="navi-separator mb-3 opacity-70"></li>
                <li class="navi-item">
                    <a class="navi-link btnEditarProducto" title="Editar Producto." data-modificar="{{$id}}">
                        <i class="text-warning -icon fas fa-edit"></i>
                        <span class="navi-text">
                            <span class="text-dark">&nbsp;&nbsp;Editar</span>
                        </span>
                    </a>
                </li>
                @if ($estado)
                    <li class="navi-item">
                        <a class="navi-link btnEliminarProducto" title="Eliminar Producto." data-eliminar="{{$id}}">
                            <i class="text-danger fas fa-trash"></i>
                            <span class="navi-text">
                                <span class="text-dark">&nbsp;&nbsp;Eliminar</span>
                            </span>
                        </a>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</div>