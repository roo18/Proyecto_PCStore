$(document).ready(function() {
    $.ajax({
        dataType: 'json',
        url: 'php/categorias.php',
        type: 'GET',
        success: function(data) {
            var datos = '<div class="menu"><h5>Categories</h5><ul>';
            $.each(data, function(index) {
                datos += '<li>' + data[index].nombre + '</li>';
            });
            datos += '</ul></div>';
            $('#colIzquierda').html(datos);
        }
    });
});