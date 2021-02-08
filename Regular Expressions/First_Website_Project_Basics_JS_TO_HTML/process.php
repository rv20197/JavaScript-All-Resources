<?php ob_start();

  if(isset($_POST['SUBMIT'])){
        $to="rv20197@gmail.com"
        $subject = $_POST['Subject'];
        $email = $_POST['Email'];
        $txt = $_POST['Message'];
        $headers = "From: " .$email . "\r\n" .
        mail($to, $subject, $txt, $headers);
        header("Location: contact.html");
  }


?>