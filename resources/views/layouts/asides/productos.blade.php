<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
    <a href="javascript:;" class="menu-link menu-toggle">
        <span class="svg-icon menu-icon">
            <!--begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
            <i class="fas fa-clipboard-list"></i>
            <!--end::Svg Icon-->
        </span>
        <span class="menu-text">Productos</span>
        <i class="fas fa-angle-right"></i>
    </a>
    <div class="menu-submenu">
        <ul class="menu-subnav">
            <li class="menu-item menu-item-parent" aria-haspopup="true">
                <span class="menu-link">
                    <span class="menu-text">Productos</span>
                </span>
            </li>
            <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                <a href="{{ route('productos.index') }}" class="menu-link menu-toggle">
                    <i class="menu-bullet menu-bullet-line">
                        <span></span>
                    </i>
                    <span class="menu-text">Listado Productos</span>
                    <i class="fas fa-angle-right"></i>
                </a>
            </li>
        </ul>
    </div>
</li>