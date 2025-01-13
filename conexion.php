<?php

$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "nombre_de_base_de_datos"; 

$conn = new mysqli($servidor, $usuario, $contrasena, $base_de_datos);


if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo "Conexión exitosa";
?>