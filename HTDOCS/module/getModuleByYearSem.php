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
if(!empty($_GET['year']) && !empty($_GET['sem'])){
	$year = trim(htmlspecialchars($_GET['year']));
	$sem = trim(htmlspecialchars($_GET['sem']));
}else{
	echo "Error: must have year and sem";
	$flag = true;
}


//If passes validation
if($flag == false){
	$sql;
	$sth = mysqli_query($conn, "SELECT * FROM module_info INNER JOIN modules on modules.id=module_info.moduleID WHERE modules.year = ".$year." AND modules.semester = ". $sem .";");
	$rows = array();
	while($r = mysqli_fetch_assoc($sth)) {
	    $rows[] = $r;
	}

	echo json_encode($rows);
}


$conn->close();
?>