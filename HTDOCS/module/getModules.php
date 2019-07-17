<?php 

$servername = "localhost";
$username = "";
$password = "";
$dbname = "lecRev-working";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$flag = false;


//If passes validation
if($flag == false){
	$sql;
	$sth = mysqli_query($conn, "SELECT * FROM modules;");
	$rows = array();
	while($r = mysqli_fetch_assoc($sth)) {
	    $rows[] = $r;
	}

	echo json_encode($rows);
}


$conn->close();
?>