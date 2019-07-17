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
$semester = (int) strip_tags( trim( $_GET[ 'semester' ] ) );
$flag = false;


if($semester != 1 and $semester != 2){//Validate
	echo "Error: semester must be 1 or 2";
	$flag = true;
}

//If validated
if($flag == false){
	$sql = "UPDATE appPersist SET currentSem = '" . $semester . "' WHERE id='1'";

	if (mysqli_query($conn, $sql)) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}
}


$conn->close();
?>