<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Récupération de la réponse reCAPTCHA
$recaptchaResponse = $_POST['g-recaptcha-response'];
require '/home/leth1379/secrets/config.php';
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecretKey&response=$recaptchaResponse");
$responseKeys = json_decode($response, true);


if(intval($responseKeys["success"]) !== 1) {
  echo 'Échec de la vérification reCAPTCHA.';
} else {
  // Traiter le formulaire ici
  $nom = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'theoleta@astroturfprod.com';
  $subject = 'Nouveau message de votre site web';
  $body = "Nom: $nom\nEmail: $email\nMessage: $message";

  // Envoi de l'e-mail
  if(mail($to, $subject, $body)) {
      echo 'Le formulaire a été soumis avec succès.';
  } else {
      echo 'Erreur lors de l\'envoi de l\'e-mail.';
  }
}
