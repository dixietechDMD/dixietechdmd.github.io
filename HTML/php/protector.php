

<?php
$pwd = "password";

if (!isset($_POST)) {
	$pass = isset($_POST['pass']) ? $_POST['pass']: '';

	if ($pass != $pwd) {
		showForm("Wrong password");
		exit();
	}
} else {
	require("../pages/information/resources.html");
	exit();
}
?>