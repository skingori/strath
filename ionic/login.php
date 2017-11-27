<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if(isset($_GET["username"]) && isset($_GET["password"]) ){
	if( !empty($_GET["username"])  && !empty($_GET["password"])  ){

		include"config.php";

		$username=$_GET["username"];
		$password=$_GET["password"];

		$query="SELECT * FROM tb_admin
				where stud_code='".$_GET["username"]."' and password='".$_GET["password"]."'  ";
		$result = $conn->query($query);

    $outp = "";
		if( $rs=$result->fetch_array()) {
			if ($outp != "") {$outp .= ",";}
			$outp .= '{"stud_code":"'  . $rs["stud_code"] . '",';
			$outp .= '"stud_code":"'   . $rs["stud_code"]        . '",';
			$outp .= '"password":"'. $rs["password"]     . '"}';
		}
		$outp ='{"records":'.$outp.'}';
		$conn->close();

		echo($outp);
	}
}
?>
