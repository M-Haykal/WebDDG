<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
 
require 'vendor/autoload.php';
 
$email = htmlspecialchars($_POST['email']);
$judul = htmlspecialchars($_POST['judul']);
$pesan = htmlspecialchars($_POST['pesan']);
 
$mail = new PHPMailer(true);
 
try {                       
    $mail->SMTPDebug = 2;  
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    // email aktif yang sebelumnya di setting
    $mail->Username   = 'haykalmuhammad394@gmail.com';
    // password yang sebelumnya di simpan
    $mail->Password   = 'kgpfzhvvqusjdzvw';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;  
 
    $mail->setFrom('mail@gmail.com', 'HayProject');
     $mail->addAddress($email); 
        $mail->isHTML(true);
        $mail->Subject = $judul;    
        $mail->Body = $pesan;
        $mail->send();
        header("location:admin.php?alert=berhasil");
 
    }catch (Exception $e) {
    	header("location:admin.php?alert=gagal"); 	
    }
 
?>