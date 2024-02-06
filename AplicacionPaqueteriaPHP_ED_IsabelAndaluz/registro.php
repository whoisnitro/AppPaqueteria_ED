<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paquetería App - Registro</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Registro en Paquetería App</h1>

        <form action="procesar_registro.php" method="post">
            <label for="usuario">Usuario:</label>
            <input type="text" name="usuario" required>
            <br>
            <br>

            <label for="correo">Correo Electrónico:</label>
            <input type="email" name="correo" required>
            <br>
            <br>

            <label for="contrasena">Contraseña:</label>
            <input type="password" name="contrasena" required>
            <br>
            <br>

            <label for="direccion">Dirección:</label>
            <input type="text" name="direccion" required>
            <br>
            <br>

            <label for="codigo_postal">Código Postal:</label>
            <input type="text" name="codigo_postal" required>
            <br>
            <br>

            <button type="submit">Registrarse</button>
        </form>

        <p>¿Ya tienes una cuenta? <a href="inicio_sesion.php">Inicia sesión aquí</a>.</p>
    </div>
</body>
</html>
