<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio sesión | Enviently</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Iniciar sesión en Enviently</h1>

        <form action="procesar_inicio_sesion.php" method="post">
            <label for="usuario">Usuario:</label>
            <input type="text" name="usuario" required>
            <br>
            <br>

            <label for="contrasena">Contraseña:</label>
            <input type="password" name="contrasena" required>
            <br>
            <br>

            <button type="submit"><a href="home_paqueteria.php">Iniciar sesión</a></button>
        </form>
    </div>
</body>
</html>
