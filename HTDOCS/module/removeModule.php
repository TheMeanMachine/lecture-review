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
$code;
$title;
$curYear;
$curSem;

//Get variables
if(!empty($_GET['id'])){
	$id = trim(htmlspecialchars($_GET['id']));
}else{
	echo "Error: must have id";
	$flag = true;
}


//If passes validation
if($flag == false){
	$sql = "DELETE FROM module_info WHERE moduleID = " . $id . "";

	if ($conn->query($sql) === TRUE) {
	    echo "Deleted";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$last_id = $conn->insert_id;

	$sql = "DELETE FROM modules WHERE id = " . $id . "";

	if ($conn->query($sql) === TRUE) {

	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}


$conn->close();
?>