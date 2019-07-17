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
if(!empty($_GET['moduleID'])){
	$moduleID = trim(htmlspecialchars($_GET['moduleID']));

}else{
	echo "Error: must have ID";
	$flag = true;
}

$desc = trim(htmlspecialchars($_GET['desc']));
$leader = trim(htmlspecialchars($_GET['leader']));
$credits = trim(htmlspecialchars($_GET['credits']));
$examPer = trim(htmlspecialchars($_GET['examPer']));
$cwPer = trim(htmlspecialchars($_GET['cwPer']));


//If passes validation
if($flag == false){
	$sql = "UPDATE module_info SET description = '" . $desc . "', leader = '" . $leader . "', credits = '" . $credits . "', examPercent = '". $examPer ."', cwPercent = '" . $cwPer ."' 

	WHERE moduleID = '". $moduleID ."'";

	if (mysqli_query($conn, $sql)) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}

}
$conn->close();

?>