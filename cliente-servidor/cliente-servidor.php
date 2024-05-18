<html>
    <head>
        <title>Drive pizza</title>
    </head>
    <body>
    <?php
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'POST') {

    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $tamaño = $_POST['tamaño'];
    $ingredientesSeleccionados = isset($_POST['ingredientes']) ? $_POST['ingredientes'] : [];

    $precioBase = 10000; 
    $precioPorIngrediente = 5000; 

    if ($tamaño === "MED") {
        $precioBase += 10000;
    } elseif ($tamaño === "GRA") {
        $precioBase += 20000;
    }

    $cantidadIngredientes = count($ingredientesSeleccionados);
    if ($cantidadIngredientes === 1) {
        $precioTotal = $precioBase;
    } elseif ($cantidadIngredientes >= 2 && $cantidadIngredientes <= 4) {
        $precioTotal = $precioBase + 5000;
    } else {
        $precioTotal = $precioBase + 7000;
    }

    echo "<h2>Resumen de la Reservación:</h2>";
    echo "<p><strong>Fecha:</strong> $fecha</p>";
    echo "<p><strong>Hora:</strong> $hora</p>";
    echo "<p><strong>Tamaño de la Pizza:</strong> $tamaño</p>";
    echo "<p><strong>Ingredientes:</strong> ";
    if (!empty($ingredientesSeleccionados)) {
        echo implode(", ", $ingredientesSeleccionados);
    } else {
        echo "Ninguno";
    }
    echo "</p>";
    echo "<p><strong>Precio Total:</strong> $precioTotal pesos</p>";
}
?>
    </body>
</html>
