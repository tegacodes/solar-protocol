<?php

echo "<h2>Hi from PHP!</h2>";

$host='@';
$domain='solarprotocol.net';
$dnskey='';

//in the future this should be either a database or a seperate json file
//white list
$serverHash = [
  "SPfA" => "",
  "Hells Gate" => "",
  "Tega" => "",
  "Chile" => "",
  "Caddie" => "",
  "Low Carbon Methods" => ""
];

//this is the black list. there could potentailly be multiple burned keys from the same server, so another data format might be necessary
$blackList = [
    "Dominica" => ""
];

// should I have multiple endpoints for DNS, white list and black list?

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  //check if key is correct
  verifyPW($_POST["api_key"],$_POST["ip"]);
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if(array_key_exists("list", $_GET)){
      echo $_GET["list"];
      if($_GET["list"] == "black"){
        echo "blacklist!";
        //echo json_encode($blackList);
      }
    }
}

function verifyPW($key, $ip){

# hash generated from password_hash() more info at https://www.php.net/manual/en/function.password-hash.php

  #loop through all hashes...
  foreach($serverHash as $name => $hash){
    if(password_verify($key, $hash)){
      updateIP($ip);
    }
  }
}

//makes the API call to the DNS registry to update it
function updateIP($ip){

  URL="wget --no-check-certificate -qO - https://dynamicdns.park-your-domain.com/update?host=" . $host . "&domain=" . $domain . "&password=" . $PASSWORD . "&ip=" .$ip;


  $response = file_get_contents('http://www.example.com/');
  echo $response;
}

?>


<!DOCTYPE html>
<html>

<head>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<title>Solar Server</title>

</head>

<body>

</body>
</html>