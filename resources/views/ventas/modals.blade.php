<div class="modal fade" id="modalCrearVenta" tabindex="-1" role="dialog" aria-labelledby="modalCrearVenta"
    aria-hidden="true" data-backdrop="static">
    <form id="formCrearVenta">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">Crear Venta</h5>
                    <button type="button" class="btn-close fas fa-times icon-2x" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Producto</label>
                        <div class="col-lg-4">
                            <div class="input-group flex-nowrap">
                                <select name="id_producto" id="idProducto">
                                </select>
                            </div>
                        </div>
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Cantidad</label>
                        <div class="col-lg-3">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="cantidad" value="0" class="form-control touchSpin" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer botonesModal">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>
            </div>
        </div>
    </form>
</div>


<div class="modal fade" id="modalEditarVenta" tabindex="-1" role="dialog" aria-labelledby="modalEditarVenta"
    aria-hidden="true" data-backdrop="static">
    <form id="formEditarVenta">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">Editar Venta</h5>
                    <button type="button" class="btn-close fas fa-times icon-2x" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="seccionEditarVenta"></div>
                </div>
                <div class="modal-footer botonesModal">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>
            </div>
        </div>
    </form>
</div>