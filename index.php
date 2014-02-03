<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>-- PC Store --</title>

        <!-- Imports -->
        <link href="css/estilo.css" type="text/css" rel="stylesheet" media="screen" />
        <!-- Bootstrap jQuery -->
        <link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" media="screen" />
        <script src="lib/jquery/js/jquery-2.0.3.min.js" type="text/javascript"></script>
        <script src="lib/bootstrap/js/bootstrap.js" type="text/javascript"></script>
        <script src="lib/jquery/js/jquery-2.0.3.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="contenedor">
            <div id="cabecera">
                <div id="logo"></div>
                <div id="central">
                    <div id="menuCentral">
                        <ul>
                            <li><span class="glyphicon glyphicon-home"></span>  Home</li>
                            <li><span class="glyphicon glyphicon-user"></span>  Register</li>
                            <li><span class="glyphicon glyphicon-log-in"></span>  Login</li>
                        </ul>
                    </div>
                    <div id="buscador">
                        <form class="input-group input-group-sm">
                            <input type="text" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
                                <button class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                            </span>
                        </form>
                    </div>
                </div>
                <div id="carrito">
                    <div id="containTable">

                    </div>
                    <div id="containTotalButton">
                        <div id="subtotal">
                            Subtotal:<span> 0 </span>€
                            <a>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="principal">
                <div id="colIzquierda">
                    <div class="menu">
                        <h5>Categories</h5>
                        <ul>
                            <li>Mouse</li>
                            <li>Mouse</li>
                            <li>Mouse</li>
                            <li>Mouse</li>
                        </ul>
                    </div>
                </div>
                <div id="colDerecha">

                    <div id="addSearch">
                        <div id="search" class="input-group input-group-sm">
                            <input type="text" class="form-control" placeholder="Search by name">
                            <span class="input-group-btn">
                                <button class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                            </span>
                        </div>
                        <div id="add">
                            <a class="btn btn-default btn-sm"><span class="glyphicon glyphicon-plus"></span> Add</a> 
                        </div>
                    </div>

                    <div id="adminTable">

                        <table class="table">
                            <thead>
                                <tr>
                                    <td>#</td><td>Name</td><td>Surname</td><td>User</td><td>Pass</td><td>DNI</td><td>Edit</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td><td>#</td><td>#</td><td>#</td><td>#</td><td>#</td>
                                    <td>
                                        <a class="btn btn-default btn-xs" href="#"><span class="glyphicon glyphicon-edit"></span></a>
                                        <a class="btn btn-default btn-xs" href="#"><span class="glyphicon glyphicon-trash"></span></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div id="pie">

            </div>
        </div>
    </body>
</html>
