<?php
if (isset($_POST['email']) && !empty($_POST['email'])) {
$subject = "New contact request from $_POST['name']";
$message = $_POST['description'];
$headers = 'From: wisestar175@gmail.com' . "\r\n" .
           'Reply-To: ' . $_POST['email']. "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail('wisestar175@gmail.com', $subject, $message, $headers);

die('Thank you for your email');
}
