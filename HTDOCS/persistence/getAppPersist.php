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

//If validation passes
if($flag == false){
	$sql = "SELECT * FROM appPersist";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = mysqli_fetch_assoc($result)){//Put data into array
    		$test[] = $row; 
	    }
		echo json_encode($test);//Encode it as json and print

	} else {
	    echo "Error: 0 results";
	}
}


$conn->close();
?>