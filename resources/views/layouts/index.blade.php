<html lang="es">
<head>
    <meta charset="utf-8">
    <title>KONECTA</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" href="{{ asset('img/logo.jpg') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('img/logo.jpg') }}">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/themes/layout/aside/dark.css') }}">
    <link rel="stylesheet" href="{{ asset('css/themes/layout/brand/dark.css') }}">
    <link rel="stylesheet" href="{{ asset('css/themes/layout/header/base/light.css') }}">
    <link rel="stylesheet" href="{{ asset('css/themes/layout/header/menu/light.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins/global/plugins.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins/custom/prismjs/prismjs.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins/custom/fullcalendar/fullcalendar.css') }}">
    
    <link href="{{ asset('css/dataTable/dataTables.bootstrap4.min.css') }}" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.5/css/bootstrap-select.min.css">
</head>
<body id="kt_body" class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
    @component('layouts.componentes.header-mobile')
    @endcomponent
    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-row flex-column-fluid page">
            @component('layouts.componentes.aside')
            @endcomponent
            <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                @component('layouts.componentes.header')
                @endcomponent
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                    @component('layouts.componentes.subheader')
                    @endcomponent
                    <div class="d-flex flex-column-fluid">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-8 order-1 order-xxl-1">
                                    <div class="card card-custom card-stretch gutter-b">
                                        @section('contenido')
                                        @show
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @component('layouts.componentes.footer')
                @endcomponent
            </div>
        </div>
    </div>

    <div id="kt_scrolltop" class="scrolltop">
        <span class="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <rect fill="#000000" opacity="0.3" x="11" y="10" width="2" height="10" rx="1"></rect>
                    <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero"></path>
                </g>
            </svg>
        </span>
    </div>

    @routes
    <!-- Start Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>var KTAppSettings = { "breakpoints": { "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1400 }, "colors": { "theme": { "base": { "white": "#ffffff", "primary": "#3699FF", "secondary": "#E5EAEE", "success": "#1BC5BD", "info": "#8950FC", "warning": "#FFA800", "danger": "#F64E60", "light": "#E4E6EF", "dark": "#181C32" }, "light": { "white": "#ffffff", "primary": "#E1F0FF", "secondary": "#EBEDF3", "success": "#C9F7F5", "info": "#EEE5FF", "warning": "#FFF4DE", "danger": "#FFE2E5", "light": "#F3F6F9", "dark": "#D6D6E0" }, "inverse": { "white": "#ffffff", "primary": "#ffffff", "secondary": "#3F4254", "success": "#ffffff", "info": "#ffffff", "warning": "#ffffff", "danger": "#ffffff", "light": "#464E5F", "dark": "#ffffff" } }, "gray": { "gray-100": "#F3F6F9", "gray-200": "#EBEDF3", "gray-300": "#E4E6EF", "gray-400": "#D1D3E0", "gray-500": "#B5B5C3", "gray-600": "#7E8299", "gray-700": "#5E6278", "gray-800": "#3F4254", "gray-900": "#181C32" } }, "font-family": "Poppins" };</script>
    <script src="{{ mix('/js/app.js') }}" ></script>
    <script src="{{ asset('js/plugins/global/plugins.js') }}"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <link href="https://cdn.datatables.net/responsive/2.2.1/css/responsive.bootstrap.min.css" rel="stylesheet"/>
    <script src="https://cdn.datatables.net/responsive/2.2.1/js/dataTables.responsive.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.5/js/bootstrap-select.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    
    @section('scripts')
    @show
    <!-- End Script -->

    <!-- Modal -->
    @section('modal')
    @show
    
</body>
</html>