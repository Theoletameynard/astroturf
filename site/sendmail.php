<?php         
         
         echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Astroturf : Message envoyé !</title>
<link rel="stylesheet" src="./css/reset.css">
<link rel="stylesheet" src="./css/style.css">
</head>
<body>
  <div class="video-container">
        <video autoplay muted loop playsinline id="vbravo">
            <source src="medias/Videocontact.mp4" type="video/mp4">
            Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
    </div>
</body>
</html>
' ;

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
