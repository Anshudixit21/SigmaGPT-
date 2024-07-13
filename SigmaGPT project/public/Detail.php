<?php
// Database connection parameters
$servername = "localhost"; // or your server IP
$username = "root"; // your MySQL username
$password = ""; // your MySQL password
$dbname = "users"; // your MySQL database name

// Create connection
$conn =  mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    // echo "Connection is established"."<br>";
  
}
$user = $_POST['username'];
$pass =  $_POST['Pass'];


// Attempt insert query execution
$sql = "INSERT INTO login_data (Username,password) VALUES ( '$user','$pass')";
if(mysqli_query($conn, $sql)){
    echo "Hello $user"."<br>";
   

} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}


// Close connection
mysqli_close($conn);
?>
