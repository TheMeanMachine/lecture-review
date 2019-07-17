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
if(!empty($_GET['code']) && !empty($_GET['title'])&& !empty($_GET['year']) && !empty($_GET['sem'])){
	$code = trim(htmlspecialchars($_GET['code']));
	$title = trim(htmlspecialchars($_GET['title']));
	$curYear = trim(htmlspecialchars($_GET['year']));
	$curSem = trim(htmlspecialchars($_GET['sem']));
}else{
	echo "Error: must have code, title, year and semester";
	$flag = true;
}





//If passes validation
if($flag == false){
	$sql = "INSERT INTO modules (code, title, semester, year)
	VALUES (' " . $code . "', ' " . $title . "', '" . $curSem . "', '" . $curYear . "')";

	if ($conn->query($sql) === TRUE) {
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$last_id = $conn->insert_id;

	$sql = "INSERT INTO module_info (moduleID)
	VALUES (". $last_id .")";

	if ($conn->query($sql) === TRUE) {
	    
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}

$desc = trim(htmlspecialchars($_GET['desc']));
$leader = trim(htmlspecialchars($_GET['leader']));
$credits = trim(htmlspecialchars($_GET['credits']));
$examPer = trim(htmlspecialchars($_GET['examPer']));
$cwPer = trim(htmlspecialchars($_GET['cwPer']));

//If passes validation
if($flag == false){

	

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
	$last_id);

	$stmt->execute();
}

$conn->close();
?>