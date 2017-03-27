<?php 

$to = 'irack@area6.com.mx';
$subject = 'Barbizbar - Contacto';
$headers = "From: " . strip_tags($_POST['req-email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
$headers .= "FROM: no-responder@barnizbar.com.mx <no-responder@barnizbar.com.mx> \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= '<p><strong>Contacto desde barnizbar.com.mx</strong></p><br><br>';
$message .= "<p><strong>Nombre: $nombre</strong></p>";
$message .= "<p><strong>Correo: $correo</strong></p>";
$message .= "<p><strong>Fecha: $fecha</strong></p>";
$message .= "<p><strong>Hora: $hora</strong></p>";
$message .= "<p><strong>Mensaje: $mensaje</strong></p>";
mail($to, $subject, $message, $headers);
 ?>