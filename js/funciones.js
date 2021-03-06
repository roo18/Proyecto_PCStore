function getURLvar(var_name){
  var re = new RegExp(var_name + "(?:=([^&]*))?", "i");
  var pm = re.exec(decodeURIComponent(location.search));
  if(pm === null) return undefined;
  return pm[1] || "";
}

$(document).ready(function() {
    $.ajax({
        dataType: 'json',
        url: 'php/categorias.php',
        type: 'GET',
        success: function(data) {
            var datos = '<div class="menu"><h5>Categories</h5><ul>';
            $.each(data, function(index) {
                datos += '<a href="productos.php?categoria='+ data[index].nombre+'"><li>' + data[index].nombre + '</li></a>';
            });
            datos += '</ul></div>';
            $('#colIzquierda').html(datos);
        }
    });
});


$(document).ready(function() {
    var categoria = getURLvar("categoria");
    alert(categoria);
    $.ajax({
        dataType: 'json',
        url: 'php/productos.php?categoria='+ categoria,
        type: 'GET',
        success: function(data) {
            var datos = '<div id="productos">';
            var oferta = '';
            var normal = '';
            $.each(data, function(index) {
                if (data[index].oferta==1) {
                    oferta += '<div class="producto oferta"><img src="img/productos/' + data[index].imagen + '" /><div class="titulo"><span class="carteloferta"> ¡OFERTA! </span>' + data[index].nombre + '</div><span id="precio">' + data[index].precio + '€</span><a class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-shopping-cart"></span> Add</a></div>';
                }
                else {
                    normal += '<div class="producto"><img src="img/productos/' + data[index].imagen + '" /><div class="titulo">' + data[index].nombre + '</div><span id="precio">' + data[index].precio + '€</span><a class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-shopping-cart"></span> Add</a></div>';
                }
            });
            datos += oferta;
            datos += normal;
            datos += '</div>';
            $('#colDerecha').html(datos);
        }
    });
});