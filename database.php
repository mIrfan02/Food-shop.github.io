<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reservation</title>
    <link rel="stylesheet" href="/css/php.css">
</head>
<body>
    
</body>
</html>


<?php




    $server_name="localhost";
    $username="root";
    $password="";
    $database_name="website";


$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$date=$_POST['date'];
$time=$_POST['time'];
$msg=$_POST['message'];

$conn = new mysqli($server_name,$username,$password,$database_name);
    if($conn->connect_error){
        die("Error Connective:".$conn->connect_error);
    }
    $query = "INSERT INTO web_data (name, email,phone,date, time,message) VALUES ('".$name."', '".$email."', '".$phone."', '".$date."','".$time."','".$msg."')";
    if($conn->query($query)){
        echo "<div class='text'><h1>Your seat is Reserved, </h1> <p>Welcome {$name}</p></div>";
    } else {
        echo "<h1>Seat reserving Failed</h1>";
    }
    $conn->close();
    //   echo '<script>alert("Welcome to Our shop. Your seat is reserved")</script>';
   
      echo "<a href='index.html  '>   Back to site</a>";


?>