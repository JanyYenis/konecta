<div class="modal fade" id="modalCrearProducto" tabindex="-1" role="dialog" aria-labelledby="modalCrearProducto"
    aria-hidden="true" data-backdrop="static">
    <form id="formCrearProducto">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">Crear Producto</h5>
                    <button type="button" class="btn-close fas fa-times icon-2x" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Nombres</label>
                        <div class="col-lg-4">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="nombre_producto" placeholder="Nombre Producto" class="form-control" required>
                            </div>
                        </div>
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Referencia</label>
                        <div class="col-lg-3">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="referencia" placeholder="Referencia Producto" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Precio</label>
                        <div class="col-lg-4">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="precio" class="form-control precio" placeholder="Precio Producto">
                            </div>
                        </div>
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Peso</label>
                        <div class="col-lg-3">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="peso" value="0" class="form-control touchSpin" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Categoria</label>
                        <div class="col-lg-4">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="categoria" class="form-control" placeholder="Categoria Producto">
                            </div>
                        </div>
                        <label class=" col-lg-2 col-form-label text-sm-right requerido">Cantidad</label>
                        <div class="col-lg-3">
                            <div class="input-group flex-nowrap">
                                <input type="text" name="stock" value="0" class="form-control touchSpin" required>
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


<div class="modal fade" id="modalEditarProducto" tabindex="-1" role="dialog" aria-labelledby="modalEditarProducto"
    aria-hidden="true" data-backdrop="static">
    <form id="formEditarProducto">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">Editar Producto</h5>
                    <button type="button" class="btn-close fas fa-times icon-2x" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="seccionEditarProducto"></div>
                </div>
                <div class="modal-footer botonesModal">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>
            </div>
        </div>
    </form>
</div>