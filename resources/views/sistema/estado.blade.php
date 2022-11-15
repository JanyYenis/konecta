
@php
    $color = $estado ? 'success' : 'danger';
    $icono = $estado ? 'fa-check-circle' : 'far fa-times-circle';
    $nombreConcepto = $estado ? 'Activo' : 'Inactivo';
@endphp

<span class="btn btn-light-{{$color}} font-weight-bolder btn-sm">
<i class="kt-font-{{$color}} fa fas {{$icono}}" disabled></i>  {{$nombreConcepto}}
</span>