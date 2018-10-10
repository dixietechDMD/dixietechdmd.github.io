<?php

// phpinfo();

// die;

$error = "";
$name = $email = $phone = $subject = $message = "";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (empty($_POST['name'])) {
        $error = "<p>Your name is required!</p>";
    } else {
        $name = test_input($_POST['name']);
        $name = strtolower($name);
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $error = "Only letters and white space allowed";
        }
    }

    if (empty($_POST['email'])) {
        $error = "<p>Your email is required!</p>";
    } else {
        $email = test_input($_POST['email']);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = "<p>Invalid email format!</p>";
        }
    }

    if (empty($_POST['phoneNumber'])) {
        $phone = "";
    } else {
        $phone = test_input($_POST['phoneNumber']);
        if(!preg_match("/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i", $phone)) {
            $error = "<p>Invalid phone number</p>";
        }
    }

    if (empty($_POST['message'])) {
        $message = "";
    } else {
        $message = test_input($_POST['message']);
    }

    if ($error == '') {
        $message_body = '';
        unset($POST['submit']);
        foreach ($_POST as $key => $value) {
            $message_body .= "$key: $value\n";
        }

        $to = 'mschmutz@dixietech.edu';
        $subject = "Contact Form Submit";
        if (mail($to, $subject, $message)) {
            $success = "<p>Message sent successfully! We will contact you shortly!</p>";
            $name = $email = $phone = $subject = $message = "";
        }
    }
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>
