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

//Get menu set and change to appropriate value
$menuBool = $_GET['menu'] == 'true' ? true : false;
$flag = false;

//If passes validation
if($flag == false){
	$sql = "UPDATE appPersist SET currentlyMenu = '" . $menuBool . "' WHERE id='1'";

	if (mysqli_query($conn, $sql)) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}
}


$conn->close();
?>