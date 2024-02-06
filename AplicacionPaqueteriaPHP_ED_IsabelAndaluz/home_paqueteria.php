<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviently - Panel de control</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Enviently | Panel de control</h1>
        <p><b>¡Bienvenido!</b></p>

        <form action="procesar_formulario.php" method="post">
            <!-- Selector de tamaños de paquetes -->
            <label for="tamano">Tamaño del paquete:</label>
            <select name="tamano" id="tamano">
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select>
            <br>
            <br>


            <!-- Selector de precios -->
            <label for="precio">Precio:</label>
            <select name="precio" id="precio">
                <option value="10">10€</option>
                <option value="20">20€</option>
                <option value="30">30€</option>
            </select>
            <br>
            <br>

            <!-- Campo para insertar una ubicación -->
            <label for="ubicacion">Ubicación:</label>
            <input type="text" name="ubicacion" id="ubicacion" required>
            <br>
            <br>

            <!-- Botón de envío -->
            <button type="submit">Enviar</button>
        </form>
        <br>

        <form action="logout.php" method="post">
            <button type="submit"><a href="inicio_sesion.php">Cerrar sesión</a></button>
        </form>
    </div>
</body>
</html>
