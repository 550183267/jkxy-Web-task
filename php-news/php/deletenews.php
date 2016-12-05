<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>新闻管理</title>
</head>
<body>
	<?php
	include_once('connect.php');
	$id = $_GET['id'];
	$sql = "DELETE FROM news WHERE id= '" . $id . "'";
	mysql_query($sql, $con);
	$mark = mysql_affected_rows();
	$url = "maintainnews.php";
	if ($mark) {
		echo "<script>alert('删除成功！');location='../news.index.html'</script>";
	} else {
		echo "<script>alert('删除失败！');location='../news.index.html'</script>";

	}
	mysql_close($con);
	?>

</body>
</html>