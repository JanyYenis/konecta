@php
    $venta = $venta ?? null;
@endphp
<input type="hidden" name="id" value="{{$venta?->id}}">
<div class="form-group row">
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Producto</label>
    <div class="col-lg-4">
        <div class="input-group flex-nowrap">
            <select name="id_producto" id="idProducto">
                <option value="{{$venta?->id_producto}}" selected>{{$venta?->producto?->nombre_producto}}</option>
            </select>
        </div>
    </div>
    <label class=" col-lg-2 col-form-label text-sm-right requerido">Cantidad</label>
    <div class="col-lg-3">
        <div class="input-group flex-nowrap">
            <input type="text" name="cantidad" value="{{$venta?->cantidad}}" class="form-control touchSpin" required>
        </div>
    </div>
</div>              