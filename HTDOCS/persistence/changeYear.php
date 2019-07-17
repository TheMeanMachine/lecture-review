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

//Get the semester
$year = (int) strip_tags( trim( $_GET[ 'year' ] ) );
$flag = false;


if($year < 1 || $year > 3){//Validate
	echo "Error: year must be 1, 2 or 3";
	$flag = true;
}

//If validated
if($flag == false){
	$sql = "UPDATE appPersist SET currentYear = '" . $year . "' WHERE id='1'";

	if (mysqli_query($conn, $sql)) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}
}


$conn->close();
?>