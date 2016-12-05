<?php
header("Content-Type: text/html; charset=utf-8");
error_reporting(E_ERROR);
session_start();
$token = md5(uniqid(rand(), TRUE));
$_SESSION['token'] = $token;
if (!isset($_SESSION['user'])) {
	echo "<p align=center>";
	echo "<font color=#ff0000 size=4><strong><big>";
	echo "您还没有登录,请<a href='../news.land.html'>登录</a>!";
	echo "</big></strong></font></p>";
	exit();
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>新闻</title>
		<link rel="stylesheet" href="../css/bootstrap.min.css" />
	</head>
	<body>
		<div class="modal-body">
			<?php
				include_once('connect.php');
				$sql = "select * from news where id='".$_GET['id']."'";
				$result = mysql_query($sql,$con);
				if($row = mysql_fetch_array($result)){
			?>
			<div class="list-group">
			<form action="update.php" method="post" class="form-horizontal">
				<input type="hidden" name="token" value="<?php echo $token; ?>" class="form-control" >
				<div class="form-group">
					<label for="id" class="col-sm-2 control-label">ID</label>
					<div class="col-sm-1">
						<input type="number" name="id" class="form-control"  value="<?php echo $row['id']?>"   required="required" readonly="readonly"/>
					</div>
				</div>
				<div class="form-group">
					<label for="category" class="col-sm-2 control-label">类别</label>
					<div class="col-sm-1">
						<select name="category" class="form-control"  value="<?php echo $row['category']?>" >
							<option>
												精选
											</option>
											<option>
												百家
											</option>
											<option>
												本地
											</option>
											<option>
												娱乐
											</option>
											<option>
												社会
											</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label for="title" class="col-sm-2 control-label">标题</label>
					<div class="col-sm-6">
						<input type="text" name="title" class="form-control"  value="<?php echo $row['title']?>"   required="required"/>
					</div>
				</div>
				<div class="form-group">
					<label for="pic" class="col-sm-2 control-label">图片</label>
					<div class="col-sm-6">
						<input type="text" name="pic" class="form-control" value="<?php echo $row['pic']?>" required="required" />
					</div>
				</div>
				<div class="form-group">
					<label for="time" class="col-sm-2 control-label">时间</label>
					<div class="col-sm-3">
						<input type="date" name="time" class="form-control" value="<?php echo $row['time']?>" required="required">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-default">
							提交
						</button>
						<button type="reset" class="btn btn-default">
							重置
						</button>
					</div>
				</div>
			</form>
		</div>
			<?php } ?>
		</div>
	</body>
</html>