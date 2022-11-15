const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

/** Productos */
mix.js("resources/js/productos/principal.js", "public/js/productos/principal.js");

/** Ventas */
mix.js("resources/js/ventas/principal.js", "public/js/ventas/principal.js");


// ---------------------------------------------------------------
mix.styles(
    "resources/assets/css/style.css",
    "public/css/style.css"
);
mix.styles(
    "resources/assets/css/themes/layout/aside/dark.css",
    "public/css/themes/layout/aside/dark.css"
);

mix.styles(
    "resources/assets/css/themes/layout/brand/dark.css",
    "public/css/themes/layout/brand/dark.css"
);

mix.styles(
    "resources/assets/css/themes/layout/header/base/light.css",
    "public/css/themes/layout/header/base/light.css"
);

mix.styles(
    "resources/assets/css/themes/layout/header/menu/light.css",
    "public/css/themes/layout/header/menu/light.css"
);

mix.styles(
    "resources/assets/plugins/global/plugins.css",
    "public/css/plugins/global/plugins.css"
);

mix.styles(
    "resources/assets/plugins/custom/prismjs/prismjs.css",
    "public/css/plugins/custom/prismjs/prismjs.css"
);

mix.styles(
    "resources/assets/plugins/custom/fullcalendar/fullcalendar.css",
    "public/css/plugins/custom/fullcalendar/fullcalendar.css"
);

mix.styles(
    "resources/css/dataTable/dataTables.bootstrap4.min.css",
    "public/css/dataTable/dataTables.bootstrap4.min.css");