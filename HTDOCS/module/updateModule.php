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
if(!empty($_GET['code']) && !empty($_GET['title']) && !empty($_GET['id'])){
	$code = trim(htmlspecialchars($_GET['code']));
	$title = trim(htmlspecialchars($_GET['title']));
	$id = trim(htmlspecialchars($_GET['id']));
}else{
	echo "Error: must have id, code and title";
	$flag = true;
}


$desc = trim(htmlspecialchars($_GET['desc']));
$leader = trim(htmlspecialchars($_GET['leader']));
$credits = trim(htmlspecialchars($_GET['credits']));
$examPer = trim(htmlspecialchars($_GET['examPer']));
$cwPer = trim(htmlspecialchars($_GET['cwPer']));	

//If passes validation
if($flag == false){
	$sql = "UPDATE modules SET code = '" . $code . "', title = '" . $title . "' WHERE id = " . $id; 
	if (mysqli_query($conn, $sql)) {

	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}

	$stmt = $conn->prepare("UPDATE module_info SET
		description = ?,
		leader = ?,
		credits = ?,
		examPercent = ?,
		cwPercent = ? 
		WHERE moduleID = ?;");
	$stmt->bind_param('ssiiii',
	$desc,
	$leader,
	$credits,
	$examPer,
	$cwPer,
	$id);

	$stmt->execute();

}
$conn->close();

?>