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

//Get variables
if(!empty($_GET['moduleID']) && !empty($_GET['title']) && !empty($_GET['week'])){
	$module = trim(htmlspecialchars($_GET['moduleID']));
	$week = (int) trim(htmlspecialchars($_GET['week']));
	$title = trim(htmlspecialchars($_GET['title']));
}else{
	echo "Error: must have moduleID and title";
	$flag = true;
}




//If passes validation
if($flag == false){
	$sql = "INSERT INTO lecture (moduleID, title, week)
	VALUES (' " . $module . "', ' " . $title . "', " . $week . " )";

	if ($conn->query($sql) === TRUE) {

	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$last_id = $conn->insert_id;

	$sql = "INSERT INTO lecture_info (lectureID, completed)
	VALUES (". $last_id . ", 1)";

	if ($conn->query($sql) === TRUE) {

	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}


$conn->close();
?>