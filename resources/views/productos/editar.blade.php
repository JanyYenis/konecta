@php
    $producto = $producto ?? null;
@endphp
<input type="hidden" name="id" value="{{$producto?->id}}">
<div class="form-group row">
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Nombres</label>
    <div class="col-lg-4">
        <div class="input-group flex-nowrap">
            <input type="text" name="nombre_producto" placeholder="Nombre Producto" class="form-control" required value="{{$producto?->nombre_producto}}">
        </div>
    </div>
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Referencia</label>
    <div class="col-lg-3">
        <div class="input-group flex-nowrap">
            <input type="text" name="referencia" placeholder="Referencia Producto" class="form-control" required value="{{$producto?->referencia}}">
        </div>
    </div>
</div>
<div class="form-group row">
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Precio</label>
    <div class="col-lg-4">
        <div class="input-group flex-nowrap">
            <input type="text" name="precio" class="form-control precio" placeholder="Precio precio" value="{{$producto?->precio.'00'}}">
        </div>
    </div>
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Peso</label>
    <div class="col-lg-3">
        <div class="input-group flex-nowrap">
            <input type="text" name="peso" class="form-control touchSpin" required value="{{$producto?->peso}}">
        </div>
    </div>
</div>
<div class="form-group row">
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Categoria</label>
    <div class="col-lg-4">
        <div class="input-group flex-nowrap">
            <input type="text" name="categoria" class="form-control" placeholder="Categoria Producto" value="{{$producto?->categoria}}">
        </div>
    </div>
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Cantidad</label>
    <div class="col-lg-3">
        <div class="input-group flex-nowrap">
            <input type="text" name="stock" class="form-control touchSpin" required value="{{$producto?->stock}}">
        </div>
    </div>
</div>