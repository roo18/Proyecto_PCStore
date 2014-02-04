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


$(document).ready(function() {
    $.ajax({
        dataType: 'json',
        url: 'php/productos.php',
        type: 'GET',
        success: function(data) {
            var datos = '<div id="productos">';
            var oferta = '';
            var normal = '';
            $.each(data, function(index) {
                if (data[index].oferta==1) {
                    oferta += '<div class="producto oferta"><img src="img/productos/' + data[index].imagen + '" /><h5>' + data[index].nombre + '<span class="carteloferta"> ¡OFERTA! </span></h5><span id="precio">' + data[index].precio + '€</span><a class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-shopping-cart"></span> Add</a></div>';
                }
                else {
                    normal += '<div class="producto"><img src="img/productos/' + data[index].imagen + '" /><h5>' + data[index].nombre + '</h5><span id="precio">' + data[index].precio + '€</span><a class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-shopping-cart"></span> Add</a></div>';
                }
            });
            datos += oferta;
            datos += normal;
            datos += '</div>';
            $('#colDerecha').html(datos);
        }
    });
});