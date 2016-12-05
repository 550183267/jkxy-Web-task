// 加载依赖库，原来这个类库都封装在connect中，现在需地注单独加载
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

// 加载路由控制
var control = require("./routes/controller");
var news = require('./routes/news');
var routes = require('./routes/index');

// 创建项目实例
var app = express();

// 定义EJS模板引擎和模板文件位置，也可以使用jade或其他模型引擎
// view engine setup
app.engine('html',ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());
// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 匹配路径和路由
app.use('/', routes);
app.use('/news.html', news);

  app.get('/news', control.operNews);
  app.get('/addnews', control.addNews);
  app.get('/editnews', control.editNews);
  app.get('/delnews', control.delNews);
  app.get('/selnews', control.selNews);
  app.get('/shownews', control.showNews);

// 输出模型app
module.exports = app;

