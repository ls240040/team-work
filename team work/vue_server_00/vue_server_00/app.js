//vue_server_00/app.js node程序
//1:加载第三方模块
//web服务器
const express = require("express");
//跨域
const cors = require("cors");
//session  的配置
const session = require("express-session");
//bodyParser
const bodyParser = require("body-parser");

var app = express();

//部署新浪云，硬性要求必须监听5050端口 这句话创建的server暂时没什么用；5050可修改
var server = app.listen(5050);

//origin写的是脚手架的端口，允许8080跨域请求5050端口，ajax回来的数据，会被认为是8080同源
//这句话是用来解决跨域问题
app.use(cors({
    //允许跨域访问程序地址列表
    //脚手架默认监听的是8080
    origin: ["http://127.0.0.1:8080",
        "http://localhost:8080"
    ],
    credentials: true //请求验证
}))

//配置session模块
app.use(session({
    secret: "128位字符串", //安全字符串
    resave: true, //每次请求保存数据
    saveUninitialized: true //保存 初始数据
}));

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
//托管静态资源到public目录下
app.use(express.static('public'));



//路由器导入
//index
const carousel = require('./routes/community');
const recommend = require('./routes/community');
const recommend2 = require('./routes/community');
const dweek = require('./routes/community');
const dmonth = require('./routes/community');
const dyear = require('./routes/community');
const friends = require('./routes/community');
const friends2 = require('./routes/community');
const shoplist = require('./routes/index');
const reserve = require('./routes/index');
const reserve2 = require('./routes/index');
const rowNum2 = require('./routes/index');
const cancelOrder = require('./routes/index');
const user = require('./routes/user');
const getUser2 = require('./routes/user');
const vip = require('./routes/vip');
const menu = require('./routes/menu');
/*使用路由器来管理路由*/
// app.use("/index",index);
app.use("/community", carousel);
app.use("/community", recommend);
app.use("/community", recommend2);
app.use("/community", dweek);
app.use("/community", dmonth);
app.use("/community", dyear);
app.use("/community", friends);
app.use("/community", friends2);
app.use("/index", shoplist);
app.use("/index", reserve);
app.use("/index", reserve2);
app.use("/index", rowNum2);
app.use("/index", cancelOrder);
app.use("/user", user);
app.use("/user", getUser2);
app.use("/vip", vip);
app.use("/menu", menu);
