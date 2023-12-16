<?php

// Allow requests from any origin
//header('Access-Control-Allow-Origin: *');

// Allow the content-type header
//header('Access-Control-Allow-Headers: Content-Type');

//header('Access-Control-Allow-Credentials: true');

//header('Access-Control-Allow-Origin: http://localdemoapi.com');

// $city=$passcode="";
// if(isset($_REQUEST["city"]) && isset($_REQUEST["passcode"])){
//    $city =  $_REQUEST["city"];
//    $passcode = $_REQUEST["passcode"];
// }

// $response = array("success" => true, "message" => "I am Bikash", "key" => "password" , "city" => $city, "passcode" => $passcode);
// $response = array("success" => true, "message" => "I am Bikash", "key" => "password", "jsondata" => json_decode(file_get_contents('php://input'), true), 'methodSent' => $_SERVER['REQUEST_METHOD'], 'submitformDataStatus' => ($submitFormData !== null));

// echo json_encode($response);

define("USERS", array("ahemedabad" => "p2erX0", "indore" => "l9eZc5", "surat" => "k4qUa3", "gurugram" =>"b7sHq1"));

$json_data = file_get_contents('php://input');
$submitFormData = json_decode($json_data, true);
//print($submitFormData["city"]);
$city = $submitFormData['city'];
$passcode = $submitFormData['passcode'];
if(USERS[$city] === $passcode) {
    $response = array('status' => 'success', 'message' => 'Data match found!');
} else {
    $response = array('status' => 'notfound', 'message' => 'Data match not found found!');
}

echo json_encode($response);

?>