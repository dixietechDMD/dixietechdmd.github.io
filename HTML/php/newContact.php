<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

// echo "<p>The name is: " . $_POST["name"] . "</p>";
// echo "<p>The email is: " . $_POST["email"] . "</p>";
// echo "<p>The phone number is: " . $_POST["phoneNumber"] . "</p>";
// echo "<p>The subject is: " . $_POST["subject"] . "</p>";
// echo "<p>The message is: " . $_POST["message"] . "</p>";

if(isset($_POST['submit'])){
    $to = "darthmars97@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $phone = $_POST["phoneNumber"];
    $name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'] . "\n\n" . "Contact info is: " . $phone;
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    } else {
    	echo "not set?";
    }
?>