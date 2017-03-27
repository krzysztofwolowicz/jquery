<?php

$category = $_GET['category'];

$internet = array('Kurs JS','Kurs jQuery','Kurs Css zaawansowany','Kurs HTML5');
$video = array('Kurs Edius 6','Kurs Premiere Pro CS6','Kurs Pinnacle');
$audio = array('Kurs Fruity Loops','Kurs Cubase');


if ($category == "internet"){
	print json_encode($internet);
}
else if ($category == "video"){
	print json_encode($video);
} 
else if ($category == "audio"){
	print json_encode($audio);
}

?>