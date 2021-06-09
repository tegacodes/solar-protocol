<?php

$deviceInfoFile = "/home/pi/solar-protocol/backend/api/v1/deviceList.json";
//Get device
$deviceInfo = json_decode(getFile($deviceInfoFile), true);

$listNetwork = true;


$default_socket_timeout = ini_get('default_socket_timeout');
//echo $default_socket_timeout;
ini_set('default_socket_timeout', 1);


if ($_SERVER["REQUEST_METHOD"] == "GET") {
	if(isset($_GET['steward'])){

		//remove leading or trailing slashes
		$_GET['steward'] = str_replace("/","", $_GET['steward']);
		//lower cases
		$_GET['steward'] = strtolower($_GET['steward']);

		$localURL ="";

		foreach ($deviceInfo as $key => $value) {
			if(formatURL($value['name'])==$_GET['steward']){
				$localURL = "http://" . $value['ip'] . "/local";
				$listNetwork = false;
			}
		}

		if($listNetwork == false){

			if(isset($_GET['path']) && $_GET['path'] != ""){

				//set mime type
				if(strpos($_GET['path'], "css") !== false){
					header("Content-type: text/css");
				} else if(strpos($_GET['path'], "mp4") !== false){
					header("Content-type: video/mp4");
				} else {
					//set mime type for images
					$imgTypes = ["jpg","jpeg","gif","png"];
					foreach ($imgTypes as $type) {
						if(strpos($_GET['path'], $type) !== false){
							header("Content-type: image/".$type);
							//readfile('thefile.png'); //might be faster than file_get_contents for large files
							break;
						}
					}
				}
			
				//routes non-root file paths
				$localURL .= "/" . $_GET['steward'] . "/" . $_GET['path'];

				//the include approach will likely load faster, but might be less secure...
				/*include($localURL);
				exit();*/
			}

			//get request - error reporting supressed with the @file_get_contents() - remove the @ to see the error messages
			$redirected = @file_get_contents($localURL);

			if($redirected){

			    //replace url
			    $redirected = str_replace(
			   '<head>', 
			   '<head><base href="http://solarprotocol.net/network/'.$_GET['steward'].'/">',
			    $redirected);

			    //add banner if its an html page
			    if(! isset($_GET['path']) || $_GET['path'] == "" || strpos($_GET['path'], "html")){
			    	$redirected = str_replace(
						   "<body>", 
						   "<body><div id='solarprotocol-banner'><span style='font-size: 100%; left:0px; width:100%; padding:3px; border: solid; border-color:blue;'><a href='/' style='color:grey;'>This site is hosted on the Solar Protocol Network</a></span></div>",
						    $redirected
						);
			    }

			    echo $redirected;

			} else {
				echo 'Message: Request failed'; //.$e->getMessage();
				$listNetwork = true;
			}
			
			/*str_replace(
			   "<body>", 
			   "<body><div style='padding: 10px;border: 2px solid black;margin-top: 10px;margin-bottom: 10px;'><h1><a href='/''>Solar Protocol</a> - Network Sites</h1></div>",
			    $redirected
			);		*/
		}
	}
}

//if the requested page doesn't exist, redirect to the main network page
if($listNetwork == true){
	header("Location: /network.html");
	die();
}

function formatURL($srcString){

	$srcString = strtolower($srcString);
	return preg_replace('/[^a-zA-Z0-9-_\.]/','', $srcString);
}
	
function getFile($fileName){
  //echo $fileName;
  try{
    return file_get_contents($fileName);
  }
  catch(Exception $e) {
    echo $fileName;
    return FALSE;
  }
}

?>