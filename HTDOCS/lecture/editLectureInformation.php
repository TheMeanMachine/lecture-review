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
if(!empty($_GET['lectureID'])){
	$lectureID = trim(htmlspecialchars($_GET['lectureID']));

}else{
	echo "Error: must have ID";
	$flag = true;
}	

$complete = trim(htmlspecialchars($_GET['complete']));
$notes = trim(htmlspecialchars($_GET['notes']));
$bookmark = trim(htmlspecialchars($_GET['bookmark']));


//If passes validation
if($flag == false){
	/*$sql = "UPDATE lecture_info SET notes = '" . $notes . "', slideBookmark = '" . $bookmark  . "', completed = '" . $complete . "' 
	 WHERE id = ". $lectureID .";";

	if (mysqli_query($conn, $sql)) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . mysqli_error($conn);
	}*/
	
	if(!empty($complete)){
		
		$sql = "UPDATE lecture_info SET completed = '" . $complete . "' 
		 WHERE lectureID = ". $lectureID .";";

		if (mysqli_query($conn, $sql)) {
		    echo "Record updated successfully";
		} else {
		    echo "Error updating record: " . mysqli_error($conn);
		}
	}

	if(!empty($notes)){
		$sql = "UPDATE lecture_info SET notes = '" . $notes . "' 
		 WHERE lectureID = ". $lectureID .";";

		if (mysqli_query($conn, $sql)) {
		    echo "Record updated successfully";
		} else {
		    echo "Error updating record: " . mysqli_error($conn);
		}
	}

	if(!empty($bookmark)){
		$sql = "UPDATE lecture_info SET slideBookmark = '" . $bookmark . "' 
		 WHERE lectureID = ". $lectureID .";";

		if (mysqli_query($conn, $sql)) {
		    echo "Record updated successfully";
		} else {
		    echo "Error updating record: " . mysqli_error($conn);
		}
	}
}
$conn->close();

?>