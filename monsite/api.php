<?php



// $link =  mysqli_connect("danibrigihdani.mysql.db","danibrigihdani","Dani221296","danibrigihdani");
$link =  mysqli_connect("db_mysql","user","test","mabase");
/*if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

echo "Success: A proper connection to MySQL was made! The leaderboard database is great." . PHP_EOL;
echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;*/

if(isset($_POST['name'])){
	extract($_POST);
	$check= 'SELECT a.nomJoueur, b.nomJoueur, c.nomJoueur FROM level1 a, level2 b, level3 c WHERE a.nomJoueur="'.$name.'" OR b.nomJoueur="'.$name.'" OR c.nomJoueur="'.$name.'"';
	$result=mysqli_query($link, $check);
	$rowcount = mysqli_num_rows($result);
	//echo "le pseudo $name existe $rowcount fois dans la base de données"."<br>";
	echo $rowcount; //UN SEUL ECHO POUR POUVOIR RECUPERER LA VALEUR DE ROW COUNT EN JAVASCRIPT

}


if(isset($_POST['name'],$_POST['name'],$_POST['score'])){
	extract($_POST);
echo "<pre>";
	print_r($_POST);
echo "</pre>";



if($lvl==="easy"){
	$check= 'SELECT nomJoueur FROM level1 WHERE nomJoueur="'.$name.'"';
	$result=mysqli_query($link, $check);
	$rowcount = mysqli_num_rows($result);
	echo "le pseudo existe $rowcount fois dans la base de données"."<br>";

	if($rowcount == 0){
		$sql= 'INSERT INTO level1 VALUES(null,"'.$name.'", "'.$score.'")';
		mysqli_query ($link,  $sql) or die ('Erreur SQL !'.$sql.'<br />'.mysqli_error($link));
		echo "requete d'insertion";
	}
	else{
		$update='UPDATE level1 SET score="'.$score.'" WHERE nomJoueur="'.$name.'"';
		mysqli_query ($link,  $update) or die ('Erreur SQL !'.$update.'<br />'.mysqli_error($link));
		echo "requete de maj";
	}
}

if($lvl==="medium"){
	$check= 'SELECT nomJoueur FROM level2 WHERE nomJoueur="'.$name.'"';
	$result=mysqli_query($link, $check);
	$rowcount = mysqli_num_rows($result);
	echo "le pseudo existe $rowcount fois dans la base de données"."<br>";

	if($rowcount == 0){
		$sql= 'INSERT INTO level2 VALUES(null,"'.$name.'", "'.$score.'")';
		mysqli_query ($link,  $sql) or die ('Erreur SQL !'.$sql.'<br />'.mysqli_error($link));
		echo "requete d'insertion";
	}
	else{
		$update='UPDATE level2 SET score="'.$score.'" WHERE nomJoueur="'.$name.'"';
		mysqli_query ($link,  $update) or die ('Erreur SQL !'.$update.'<br />'.mysqli_error($link));
		echo "requete de maj";
	}
}

if($lvl==="hard"){
	$check= 'SELECT nomJoueur FROM level3 WHERE nomJoueur="'.$name.'"';
	$result=mysqli_query($link, $check);
	$rowcount = mysqli_num_rows($result);
	echo "le pseudo existe $rowcount fois dans la base de données"."<br>";

	if($rowcount == 0){
		$sql= 'INSERT INTO level3 VALUES(null,"'.$name.'", "'.$score.'")';
		mysqli_query ($link,  $sql) or die ('Erreur SQL !'.$sql.'<br />'.mysqli_error($link));
		echo "requete d'insertion";
	}
	else{
		$update='UPDATE level3 SET score="'.$score.'" WHERE nomJoueur="'.$name.'"';
		mysqli_query ($link,  $update) or die ('Erreur SQL !'.$update.'<br />'.mysqli_error($link));
		echo "requete de maj";
	}
}




}

mysqli_close($link);
