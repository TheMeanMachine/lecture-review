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

//Validate
if(!empty($_GET['week']) && !empty($_GET['title']) && !empty($_GET['id']) && !empty($_GET['moduleID'])){
	$week = trim(htmlspecialchars($_GET['week']));
	$title = trim(htmlspecialchars($_GET['title']));
	$id = trim(htmlspecialchars($_GET['id']));
	$module = trim(htmlspecialchars($_GET['moduleID']));
}else{
	echo "Error: must have id, week and title, module";
	$flag = true;
}


//If passes validation
if($flag == false){
	$sql = "UPDATE lecture SET week = '" . $week . "', title = '" . $title . "', moduleID = '".$module."' WHERE id = " . $id; 
	if (mysqli_query($conn, $sql)) {
	   
	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}

}
$conn->close();

?>