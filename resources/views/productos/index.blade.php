
@extends("layouts.index")

@section('contenido')
<div class="card-header border-0 pt-5">
    <h1 class="mt-4"><i class="fas fa-clipboard-list"></i>  Listado Productos.</h1>
</div><br><br>
<div class="card-body pt-2 pb-0 mt-n3">
    <main>
        <div class="col-12 text-lg-right align-self-center">
            <button type="button" class="btn btn-success" id="btnProductoCrear" href="#" data-bs-toggle="modal" data-bs-target="#modalCrearProducto">
                Agregar Productos
            </button>
            <button type="button" class="btn btn-secondary" id="btnProductos">
                <i class="fa fa-sync-alt"></i>
                Refrescar
            </button>
        </div><br>
        <table id="tablaProductos" class="table table-striped table-bordered dt-responsive nowrap">
            <thead>
                <tr>
                    <th class="text-center all">#</th>
                    <th class="text-center all">Nombre</th>
                    <th class="text-center all">Referencia</th>
                    <th class="text-center all">Precio</th>
                    <th class="text-center none">Peso</th>
                    <th class="text-center none">Categoria</th>
                    <th class="text-center none">Cantidad</th>
                    <th class="text-center none">Fecha Creación</th>
                    <th class="text-center all">Estado</th>
                    <th class="text-center all">Acciones</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table> 
    </main>
</div><br><br>
@endsection

@section('scripts')
    <script src="{{ asset('js/productos/principal.js') }}"></script>
@endsection

@section('modal')
    @component('productos.modals')
    @endcomponent
@endsection
