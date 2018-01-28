<?php
 
//Establishing connection with server..
$connection = mysql_connect("localhost", "abstractarena", "");

//Selecting Database.
$db = mysql_select_db("my_abstractarena", $connection);

$username = $_POST['username1']; // Fetching Values from URL.
$password = $_POST['password1']; // Password Encryption, If you like you can also leave sha1.

//Remove unexpected symbol like <,>,?,#,!, etc.)
$username = filter_var($username, FILTER_SANITIZE_EMAIL);

//Matching user input username and password with stored username and password in database
$result = mysql_query("SELECT * FROM registration WHERE username='$username' AND password='$password'");

//Number of matching rows with the username/password input
$data = mysql_num_rows($result);

if($data == 1) {
	//The user exist, log him in...
	echo "successful_login";
	//Start the session
	//session_start();						
	//$_SESSION['username'] = $username;  >>WIP<<
	//$_SESSION['password'] = $password;
}
else {
	//The user doesn't exist!
	echo "wrong_email_or_password";
}

//Close connection to database
mysql_close ($connection);
?>