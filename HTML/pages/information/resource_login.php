<?php
        $pass = $_POST['pass'];

        echo "test";

        if ($pass == "asdf") {
            include("resources.html");
        } else {
            if (isset($_POST)) { ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Dixie Tech | Login</title>

    <!-- SEARCH ENGINE OPTIMIZATION -->
    <meta name="description" content="Dixie Tech is about being Forward Thinking, Future Focused, and Career Ready, each day and in every interaction with our students and our business community.">

    <!-- VIEWPORT -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <!-- FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400" rel="stylesheet">

    <!-- FONT AWESOME CDN -->
    <script src="https://use.fontawesome.com/962ecd5082.js"></script>

    <!-- STYLESHEETS -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/normalize.css">
    <link rel="stylesheet" href="../../css/technology-icons.css">
    <link rel="stylesheet" href="../../css/animate.css">
    <link rel="stylesheet" href="../../css/grid.css">
    <link rel="stylesheet" href="../../css/styles.css">
    <link rel="stylesheet" type="text/css" media="all" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" media="all" href="../../css/stellarnav.min.css">
</head>

<body>

    <div id="main-nav" class="stellarnav">
    </div>

  	<div id="filler"></div>

	<section class="section-resources">
		<h1>FACULTY &amp; STAFF RESOURCES</h1>
		<hr>
        <p>This page is protected by a password.  Please log in.</p>
        <form method="POST" action="resource_login.php">
            <input type="password" name="pass">
            <input type="submit" name="submit" value="Go">
        </form>
	</section>

    <div class="contact-lightbox">
        <form class="contact-form clearfix" method="post">
            <p class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></p>
            <p id="form-header"><strong>Contact Us</strong></p>
            <div class="form-container clearfix">
              <div class="img-container">
                <img src="../../img/logo%20copy.png">
              </div>
              <div class="input-container">
                <input maxlength="30" type="text" name="name" placeholder="Name" required aria-required=”true”>
                <input maxlength="50" type="email" name="email" placeholder="Email" required aria-required=”true”>
                <input maxlength="11" type="tel" name="phoneNumber" placeholder="Phone Number">
                <input maxlength="50" type="text" name="subject" placeholder="Subject" required aria-required=”true”>
                <textarea type="text" name="message" placeholder="Message"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </div>
        </form>
    </div>

    <footer class="section-footer clearfix">
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../js/jquery.numscroller-1.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<!-- <script type="text/javascript" src="../../js/stellarnav.min.js"></script> -->
    <script src="../../js/jquery.waypoints.min.js"></script>
    <script src="../../js/scripts.js"></script>
    <script src="../../js/footer.js"></script>
    <script>
            $(document).ready(function() {
                //('info-menu.html');
                //'../../footer.html');
            });
    </script>
</body>
</html>
            <?}
        }
    ?>