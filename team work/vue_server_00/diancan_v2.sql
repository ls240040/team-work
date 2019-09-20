SET NAMES UTF8;
DROP DATABASE IF EXISTS diancan;
CREATE DATABASE diancan CHARSET=UTF8;
USE diancan;

/****轮播图****/
CREATE TABLE  diancan_carousel(
  C_ID INT PRIMARY KEY AUTO_INCREMENT,
  C_Place VARCHAR(64),
  C_Href VARCHAR(128)
);

/**轮播图插入数据 **/
INSERT INTO diancan_carousel VALUES
(null,"indexTop","/index/lb1.png"),
(null,"indexTop","/index/lb2.png"),
(null,"indexTop","/index/lb3.png"),
(null,"indexTop","/index/lb4.png"),

(null,"indexBottom","/index/lbB1.png"),
(null,"indexBottom","/index/lbB2.png"),
(null,"indexBottom","/index/lbB3.png"),
(null,"indexBottom","/index/lbB4.png"),

(null,"community","/community/lb1.png"),
(null,"community","/community/lb2.png"),
(null,"community","/community/lb3.png"),
(null,"community","/community/lb4.png"),

(null,"vip","/vip/lb1.png"),
(null,"vip","/vip/lb2.png"),
(null,"vip","/vip/lb3.png"),
(null,"vip","/vip/lb4.png");

/****大图****/
CREATE TABLE  diancan_pic(
  C_ID INT PRIMARY KEY AUTO_INCREMENT,
  C_Place VARCHAR(64),
  C_Href VARCHAR(128)
);
/**轮播图插入数据 **/
INSERT INTO diancan_pic VALUES
(null,"vip","/vip/equity_2.png"),
(null,"vip","/vip/equity_3.png"),
(null,"vip","/vip/equity_4.png"),
(null,"vip","/vip/equity_1.png"),
(null,"vip","/vip/equity_5.png"),
(null,"vip","/vip/equity_6.png");


/****预定****/
CREATE TABLE  reserve(
  ID INT PRIMARY KEY AUTO_INCREMENT,
  R_Time VARCHAR(64),
  R_Num VARCHAR(8),
  R_Room Boolean,
  R_Hall VARCHAR(64),
  R_Name VARCHAR(64),
  R_Phone VARCHAR(64),
  R_Sex VARCHAR(8),
  R_Demand VARCHAR(255)
);



/****商品表****/
CREATE TABLE  diancan_shop(
  S_ID INT PRIMARY KEY AUTO_INCREMENT,
  S_Title VARCHAR(64),
  S_Href VARCHAR(128),
  S_price INT,
  S_Count INT
);
/**轮播图插入数据 **/
INSERT INTO diancan_shop VALUES
(null,"招牌虾滑","/index/sp2.png",580,58600),
(null,"海底捞小红锅电火锅","/index/sp3.png",7999,17),
(null,"海底捞限量中秋月饼礼盒","/index/sp1.png",2780,11),
(null,"100元代金券","/index/sp4.png",2000,21007);


/**用户表*/
CREATE TABLE diancan_User(
  U_ID INT PRIMARY KEY AUTO_INCREMENT,
  U_LoginID VARCHAR(20),          /**登陆账号 （电话号码）**/            
  U_NickName VARCHAR(20),         /**昵称**/
  U_PassWord VARCHAR(20), 
  U_SignaTure VARCHAR(150),       /**个性签名**/
  U_Sex Boolean,
  U_Birthday DATE,
  U_Name VARCHAR(30),             /**真实姓名**/
  U_Email VARCHAR(50),            /**邮箱**/
  U_Intro Varchar(300),           /**个人简介**/
  U_HeadPortrait Varchar(100),    /**头像**/
  U_Age int,                      /**年龄**/
  U_Rank tinyint,                 /**等级 1000-1级  2000-2级 3000-3级  5000-4级 7000-5级 10000-6级**/
  U_Score int,                    /**积分 消费一元等于一积分**/
  U_UsedScore int                /**已使用的积分**/
);

/**用户表插入数据 **/
INSERT INTO diancan_User VALUES
(null,15312345678,"西瓜",123456,null,1,1996-11-31,"王五","1234@163.com",null,null,18,6,66666,0),
(null,15812345678,"冬瓜",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15912345678,"南瓜",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13712345678,"芒果",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15812345677,"ding",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15912345676,"dang",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13712345675,"yi",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15812345674,"er",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15912345673,"san",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13712345672,"si",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15812345671,"wi",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15912345618,"wu",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13712345628,"liu",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15812345638,"qi",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15912345648,"ba",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13712345658,"jiu",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15812345668,"shi",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15912345688,"shiyi",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13712345698,"shier",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,13912345673,"shisana",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13412345672,"shiasi",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15912345671,"wia",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,13721345618,"wua",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13721345628,"liau",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15811345638,"qia",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15911345648,"baa",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13711345658,"jiau",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15811345668,"shia",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15911345688,"shiayi",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13711345698,"shiear",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,13712315698,"shzier",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,13912315673,"shzisana",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13412315672,"shizasi",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15912315671,"wiza",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,13721315618,"wzua",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13721315628,"lizau",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15811315638,"qiza",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15911315648,"baaz",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0),
(null,13711315658,"jizau",123456,null,0,1996-02-28,"燕小六","1233@163.com",null,null,18,6,540,0),
(null,15811315668,"shiza",123456,null,0,1996-11-21,"张三","1231@163.com",null,null,18,6,0,0),
(null,15911315688,"shizayi",123456,null,0,1996-01-21,"李四","1232@163.com",null,null,18,6,3210,0);




/**好友表**/
CREATE TABLE diancan_Friends(
  F_ID INT PRIMARY KEY AUTO_INCREMENT,
  F_FirendID INT,                /**好友ID**/
  F_UserID INT,                  /**用户ID**/
  F_Name Varchar(30)             /**备注名**/
);
/**好友表插入数据**/
INSERT INTO diancan_Friends VALUES
(null,4,1,"狗子"),
(null,2,1,"猪仔"),
(null,2,3,"阿猫"),
(null,1,3,"阿狗"),
(null,3,1,"大熊");

/**餐馆描述表**/
CREATE TABLE diancan_Mer(
  M_ID INT PRIMARY KEY AUTO_INCREMENT,
  M_Name Varchar(60),            /**餐馆名字**/
  M_Address Varchar(50),         /**餐馆地址**/
  M_Phone Varchar(11),           /**餐馆电话**/
  -- M_Rank int,                 /**排序等级**/
  M_Url Varchar(500),            /**图片地址**/
  M_AllRating Float,             /**总评 1-5**/
  M_SRating Float,               /**服务评价 1-5**/
  M_ERating Float,               /**环境 1-5**/
  M_CommentNum Int,               /**评论数**/
  M_Distance Float               /**距离**/
);
/**餐馆描述表插入数据**/
INSERT INTO diancan_Mer VALUES
(null,"铂澜大象城店","杭州市西湖区文一路294号铂澜大象城5楼",15888888888,null,4.5,4.5,4.5,1234,1.681),
(null,"水晶城店","杭州市西湖区文一路294号铂澜大象城5楼",15888888888,null,4.5,4.5,4.5,1234,3.504),
(null,"城西银泰店","杭州市西湖区文一路294号铂澜大象城5楼",15888888888,null,4.5,4.5,4.5,1234,3.644),
(null,"绍兴路店","杭州市西湖区文一路294号铂澜大象城5楼",15888888888,null,4.5,4.5,4.5,1234,3.969);

/****菜品分类****/
CREATE TABLE diancan_FoodType(
  FT_ID INT PRIMARY KEY AUTO_INCREMENT,
  FT_MID Int,                   /**所属商家ID**/
  FT_Name Varchar(20)           /**菜品分类名称**/
);



/**餐馆描述表插入数据**/
INSERT INTO diancan_FoodType VALUES
(null,1,"单锅"),
(null,1,"鸳鸯锅"),
(null,1,"四宫格"),
(null,1,"招牌十捞"),
(null,1,"荤菜"),
(null,1,"素菜"),
(null,1,"小吃"),
(null,1,"酒水"),
(null,1,"小料");

/****菜品表****/
CREATE TABLE diancan_Food(
  F_ID INT PRIMARY KEY AUTO_INCREMENT,
  F_FTID Int,                   /**菜品分类**/
  F_MID Int,                    /**所属商家ID**/
  F_Name Varchar(20),           /**菜品名**/
  F_Url Varchar(100),           /**菜图片**/
  F_Price Float,                /**价格**/
  F_IsChara Boolean,            /**是否特色菜**/
  F_Statue Boolean              /**菜品状态 是否售空**/
);

/**餐馆描述表插入数据**/
INSERT INTO diancan_Food VALUES
(null,1,1,"菌汤火锅","/danguo/danguo_1.jpg",79.00,1,1),
(null,1,1,"三鲜火锅","/danguo/danguo_2.jpg",72.00,1,1),
(null,1,1,"清油麻辣火锅","/danguo/danguo_3.jpg",72.00,1,1),
(null,1,1,"牛油麻辣火锅","/danguo/danguo_4.jpg",112.00,1,1),
(null,1,1,"番茄火锅","/danguo/danguo_5.jpg",72.00,1,1),
(null,1,1,"牛肉汤火锅","/danguo/danguo_6.jpg",72.00,1,1),

(null,2,1,"菌汤火锅","/yuanyangg/yuanyangg_1.jpg",39.00,1,1),
(null,2,1,"清油麻辣火锅","/yuanyangg/yuanyangg_2.jpg",39.00,1,1),
(null,2,1,"三鲜火锅","/yuanyangg/yuanyangg_3.jpg",39.00,1,1),
(null,2,1,"牛油麻辣火锅","/yuanyangg/yuanyangg_4.jpg",62.00,1,1),
(null,2,1,"番茄火锅","/yuanyangg/yuanyangg_5.jpg",39.00,1,1),
(null,2,1,"牛肉汤火锅","/yuanyangg/yuanyangg_6.jpg",39.00,1,1),
(null,2,1,"清水锅","/yuanyangg/yuanyangg_7.jpg",0.00,1,1),

(null,3,1,"菌汤火锅","/sgg/sgg_1.jpg",26.00,1,1),
(null,3,1,"三鲜火锅","/sgg/sgg_2.jpg",26.00,1,1),
(null,3,1,"牛油麻辣火锅","/sgg/sgg_3.jpg",32.00,1,1),
(null,3,1,"清油麻辣火锅","/sgg/sgg_4.jpg",26.00,1,1),
(null,3,1,"番茄火锅","/sgg/sgg_5.jpg",26.00,1,1),
(null,3,1,"牛肉汤火锅","/sgg/sgg_6.jpg",26.00,1,1),
(null,3,1,"清水锅","/sgg/sgg_7.jpg",0.00,1,1),

(null,4,1,"捞派秘制羊肉","/zpsl/zpsl_1.jpg",58.00,1,1),
(null,4,1,"捞派猪黄喉","/zpsl/zpsl_2.jpg",46.00,1,1),
(null,4,1,"捞派巴沙鱼片","/zpsl/zpsl_3.jpg",40.00,1,1),
(null,4,1,"捞派捞面","/zpsl/zpsl_4.jpg",7.00,1,1),
(null,4,1,"捞派豆花","/zpsl/zpsl_5.jpg",26.00,1,1),
(null,4,1,"捞派麻辣滑牛肉","/zpsl/zpsl_6.jpg",58.00,1,1),
(null,4,1,"捞派鱼饼","/zpsl/zpsl_7.jpg",28.00,1,1),
(null,4,1,"捞派毛肚","/zpsl/zpsl_8.jpg",66.00,1,1),
(null,4,1,"捞派鸭肠","/zpsl/zpsl_9.jpg",40.00,1,1),

(null,5,1,"鲜切羔羊肉","/huncai/huncai_1.jpg",60.00,1,1),
(null,5,1,"扇贝","/huncai/huncai_2.jpg",18.00,1,1),
(null,5,1,"草原羔羊肉","/huncai/huncai_3.jpg",58.00,1,1),
(null,5,1,"新西兰羊肉","/huncai/huncai_4.jpg",54.00,1,1),
(null,5,1,"捞派肥牛","/huncai/huncai_5.jpg",64.00,1,1),
(null,5,1,"肥肠","/huncai/huncai_6.jpg",58.00,1,1),
(null,5,1,"芙蓉鸡片","/huncai/huncai_7.jpg",26.00,1,1),
(null,5,1,"脱骨鸭掌","/huncai/huncai_8.jpg",38.00,1,1),
(null,5,1,"猪脑花","/huncai/huncai_9.jpg",44.00,1,1),
(null,5,1,"脆皮肠","/huncai/huncai_10.jpg",30.00,1,1),
(null,5,1,"午餐肉","/huncai/huncai_11.jpg",38.00,1,1),
(null,5,1,"鹌鹑蛋","/huncai/huncai_12.jpg",26.00,1,1),
(null,5,1,"蟹味棒","/huncai/huncai_13.jpg",30.00,1,1),
(null,5,1,"鲜嫩鱼圆","/huncai/huncai_14.jpg",28.00,1,1),
(null,5,1,"招牌虾滑","/huncai/huncai_15.jpg",58.00,1,1),
(null,5,1,"黑鱼片","/huncai/huncai_16.jpg",46.00,1,1),
(null,5,1,"火锅牛排","/huncai/huncai_17.jpg",50.00,1,1),
(null,5,1,"鱿鱼须","/huncai/huncai_18.jpg",48.00,1,1),
(null,5,1,"罗非鱼","/huncai/huncai_19.jpg",44.00,1,1),
(null,5,1,"生鸡蛋","/huncai/huncai_20.jpg",2.00,1,1),
(null,5,1,"精品肥牛","/huncai/huncai_21.jpg",60.00,1,1),
(null,5,1,"血旺","/huncai/huncai_22.jpg",32.00,1,1),
(null,5,1,"兆湛撒尿牛丸","/huncai/huncai_23.jpg",54.00,1,1),
(null,5,1,"香菇贡丸","/huncai/huncai_24.jpg",44.00,1,1),
(null,5,1,"鳕鱼虾滑","/huncai/huncai_25.jpg",42.00,1,1),
(null,5,1,"精品牛肉丸","/huncai/huncai_26.jpg",34.00,1,1),
(null,5,1,"明虾","/huncai/huncai_27.jpg",92.00,1,1),
(null,5,1,"椒香腰花","/huncai/huncai_28.jpg",38.00,1,1),
(null,5,1,"蛋饺","/huncai/huncai_29.jpg",28.00,1,1),
(null,5,1,"乌鸡卷","/huncai/huncai_30.jpg",36.00,1,1),
(null,5,1,"蟹粉蟹仔风味包","/huncai/huncai_31.jpg",36.00,1,1),
(null,5,1,"我的小郡肝","/huncai/huncai_32.jpg",28.00,1,1),
(null,5,1,"伊比利亚黑猪肉","/huncai/huncai_33.jpg",56.00,1,1),
(null,5,1,"儿童午餐肉套餐","/huncai/huncai_34.jpg",22.00,1,1),
(null,5,1,"雪花猪肉片","/huncai/huncai_35.jpg",34.00,1,1),
(null,5,1,"手切牛肉","/huncai/huncai_36.jpg",68.00,1,1),
(null,5,1,"蛋香肉卷","/huncai/huncai_37.jpg",32.00,1,1),

(null,6,1,"冬瓜","/sucai/sucai_1.jpg",30.00,1,1),
(null,6,1,"箭笋","/sucai/sucai_2.jpg",18.00,1,1),
(null,6,1,"山药","/sucai/sucai_3.jpg",24.00,1,1),
(null,6,1,"冻豆腐","/sucai/sucai_4.jpg",22.00,1,1),
(null,6,1,"老油条","/sucai/sucai_5.jpg",24.00,1,1),
(null,6,1,"油面筋泡","/sucai/sucai_6.jpg",20.00,1,1),
(null,6,1,"金针菇","/sucai/sucai_7.jpg",32.00,1,1),
(null,6,1,"藕片","/sucai/sucai_8.jpg",22.00,1,1),
(null,6,1,"土豆","/sucai/sucai_9.jpg",22.00,1,1),
(null,6,1,"海带","/sucai/sucai_10.jpg",22.00,1,1),
(null,6,1,"菠菜","/sucai/sucai_11.jpg",24.00,1,1),
(null,6,1,"甜玉米","/sucai/sucai_12.jpg",20.00,1,1),
(null,6,1,"生菜","/sucai/sucai_13.jpg",20.00,1,1),
(null,6,1,"豆腐皮","/sucai/sucai_14.jpg",24.00,1,1),
(null,6,1,"水晶粉丝","/sucai/sucai_15.jpg",16.00,1,1),
(null,6,1,"腐竹","/sucai/sucai_16.jpg",28.00,1,1),
(null,6,1,"油豆皮","/sucai/sucai_17.jpg",22.00,1,1),
(null,6,1,"炸豆衣卷","/sucai/sucai_18.jpg",28.00,1,1),
(null,6,1,"红薯粉带","/sucai/sucai_19.jpg",26.00,1,1),
(null,6,1,"青笋","/sucai/sucai_20.jpg",22.00,1,1),
(null,6,1,"娃娃菜","/sucai/sucai_21.jpg",24.00,1,1),
(null,6,1,"青青活体豌豆苗","/sucai/sucai_22.jpg",29.00,1,1),
(null,6,1,"翡翠藻","/sucai/sucai_23.jpg",20.00,1,1),
(null,6,1,"手切笋","/sucai/sucai_24.jpg",28.00,1,1),
(null,6,1,"龙竹甜笋","/sucai/sucai_25.jpg",32.00,1,1),
(null,6,1,"奶油南瓜","/sucai/sucai_26.jpg",20.00,1,1),
(null,6,1,"豆黄金鲜腐竹","/sucai/sucai_27.jpg",26.00,1,1),
(null,6,1,"年糕","/sucai/sucai_28.jpg",18.00,1,1),

(null,7,1,"鲜辣鲍鱼仔","/xiaochi/xiaochi_1.jpg",8.00,1,1),
(null,7,1,"现炸酥肉","/xiaochi/xiaochi_2.jpg",36.00,1,1),
(null,7,1,"金银馒头","/xiaochi/xiaochi_3.jpg",12.00,1,1),
(null,7,1,"葱味飞饼","/xiaochi/xiaochi_4.jpg",12.00,1,1),
(null,7,1,"五常米饭","/xiaochi/xiaochi_5.jpg",4.00,1,1),
(null,7,1,"慕斯酸奶兔","/xiaochi/xiaochi_6.jpg",6.00,1,1),
(null,7,1,"茴香小油条","/xiaochi/xiaochi_7.jpg",12.00,1,1),
(null,7,1,"时蔬炒饭","/xiaochi/xiaochi_8.jpg",8.00,1,1),
(null,7,1,"马蹄山药蛋挞","/xiaochi/xiaochi_9.jpg",12.00,1,1),

(null,8,1,"海底捞德式小麦啤酒","/jiushui/jiushui_1.jpg",12.00,1,1),
(null,8,1,"海底捞经典大麦啤酒","/jiushui/jiushui_2.jpg",12.00,1,1),
(null,8,1,"听雪碧","/jiushui/jiushui_3.jpg",6.00,1,1),
(null,8,1,"听可乐","/jiushui/jiushui_4.jpg",8.00,1,1),
(null,8,1,"果粒橙1.25L","/jiushui/jiushui_5.jpg",15.00,1,1),
(null,8,1,"雪碧1.25L","/jiushui/jiushui_6.jpg",13.00,1,1),
(null,8,1,"可口可乐1.25L","/jiushui/jiushui_7.jpg",13.00,1,1),
(null,8,1,"椰汁听装(310ml)","/jiushui/jiushui_8.jpg",10.00,1,1),
(null,8,1,"王老吉(听装)","/jiushui/jiushui_9.jpg",7.00,1,1),
(null,8,1,"海底捞乳酸菌饮料-原味","/jiushui/jiushui_10.jpg",12.00,1,1),
(null,8,1,"海底捞乳酸菌饮料-草莓味","/jiushui/jiushui_11.jpg",12.00,1,1),
(null,8,1,"45°西风幸福(52)500ml","/jiushui/jiushui_12.jpg",208.00,1,1),
(null,8,1,"江小白40°100ml","/jiushui/jiushui_13.jpg",26.00,1,1),
(null,8,1,"法国伯特干红","/jiushui/jiushui_14.jpg",88.00,1,1),
(null,8,1,"35°劲酒125ML","/jiushui/jiushui_15.jpg",24.00,1,1),
(null,8,1,"海底捞深色拉格啤酒","/jiushui/jiushui_16.jpg",14.00,1,1),

(null,9,1,"自选小料","/jiushui/jiushui_16.jpg",9.00,1,1),
(null,9,1,"自选饮料","/jiushui/jiushui_16.jpg",6.00,1,1);

/*排号表*/
CREATE TABLE diancan_RowNum(
  R_ID INT PRIMARY KEY AUTO_INCREMENT,/*排号号码*/
  U_ID INT,/*用户ID*/
  R_Time Datetime,/*下单时间*/
  R_People Int,/*人数*/
  R_Address Varchar(200),/*地址*/
  R_ETime Varchar(8)
);
INSERT INTO diancan_RowNum VALUES
(null,1,"2019-09-20 22:22:11","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,2,"2019-09-20 22:22:12","杭州市西湖区文一路294号铂澜大象城5楼","夜市"),
(null,3,"2019-09-20 22:22:13","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,4,"2019-09-20 22:22:14","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,5,"2019-09-20 22:22:15","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,6,"2019-09-20 22:22:16","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,7,"2019-09-20 22:22:17","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,8,"2019-09-20 22:22:18","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,9,"2019-09-20 22:22:19","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,10,"2019-09-20 22:22:20","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,11,"2019-09-20 22:22:21","杭州市西湖区文一路294号铂澜大象城5楼","午市"),
(null,12,"2019-09-20 22:22:22","杭州市西湖区文一路294号铂澜大象城5楼","午市");


/****桌子信息****/
CREATE TABLE diancan_Desk(
  D_ID INT PRIMARY KEY AUTO_INCREMENT,
  D_MID int,                    /**餐馆ID**/
  D_Name Varchar(20),           /**桌子名字**/
  D_Volum Int,                  /**桌子容纳数**/
  D_Statue Boolean              /**桌子状态  (可用/不可用)**/
);

/**桌子信息表表插入数据**/
INSERT INTO diancan_Desk VALUES
(null,1,"sm1",4,0),
(null,1,"sm2",4,0),
(null,1,"sm3",4,0),
(null,1,"sm4",4,0),
(null,1,"sm5",4,0),
(null,1,"sm6",4,0),
(null,1,"sm7",4,0),
(null,1,"sm8",4,0),
(null,1,"sm9",4,0),
(null,1,"sm10",4,0),
(null,1,"md1",6,0),
(null,1,"md2",6,0),
(null,1,"md3",6,0),
(null,1,"md4",6,0),
(null,1,"md5",6,0),
(null,1,"md6",6,0),
(null,1,"md7",6,0),
(null,1,"md8",6,0),
(null,1,"md9",6,0),
(null,1,"md10",6,0),
(null,1,"md11",6,0),
(null,1,"md12",6,0),
(null,1,"md13",6,0),
(null,1,"md14",6,0),
(null,1,"md15",6,0),
(null,1,"md16",6,0),
(null,1,"lg1",12,0),
(null,1,"lg2",12,0),
(null,1,"lg3",12,0),
(null,1,"lg4",12,0),
(null,1,"lg5",12,0),
(null,1,"lg6",12,0),
(null,1,"lg7",12,0),
(null,1,"lg8",12,0),
(null,2,"sm1",4,0),
(null,2,"sm2",4,0),
(null,2,"sm3",4,0),
(null,2,"sm4",4,0),
(null,2,"sm5",4,0),
(null,2,"sm6",4,0),
(null,2,"sm7",4,0),
(null,2,"sm8",4,0),
(null,2,"sm9",4,0),
(null,2,"sm10",4,0),
(null,2,"md1",6,0),
(null,2,"md2",6,0),
(null,2,"md3",6,0),
(null,2,"md4",6,0),
(null,2,"md5",6,0),
(null,2,"md6",6,0),
(null,2,"md7",6,0),
(null,2,"md8",6,0),
(null,2,"md9",6,0),
(null,2,"md10",6,0),
(null,2,"md11",6,0),
(null,2,"md12",6,0),
(null,2,"md13",6,0),
(null,2,"md14",6,0),
(null,2,"md15",6,0),
(null,2,"md16",6,0),
(null,2,"lg1",12,0),
(null,2,"lg2",12,0),
(null,2,"lg3",12,0),
(null,2,"lg4",12,0),
(null,2,"lg5",12,0),
(null,2,"lg6",12,0),
(null,2,"lg7",12,0),
(null,2,"lg8",12,0);


/**订单信息**/
CREATE TABLE diancan_Order(
  O_ID INT PRIMARY KEY AUTO_INCREMENT,
  O_MID Int,                    /**餐馆ID**/
  O_UID Int,                    /**用户ID**/
  O_DID Int,                    /**桌子ID**/
  O_Time Datetime,              /**下单时间**/
  O_Statue Int,                 /**订单状态 有效 无效 完成**/
  O_Phone Varchar(11),          /**下单电话**/
  O_FID Varchar(200),           /**所点菜ID   !用逗号隔开!**/
  O_Totle Float,                /**实际消费**/
  O_Dis Float,                  /**优惠价**/
  O_PayStatue Boolean,          /**支付状态**/
  O_Note Varchar(120)           /**特殊说明**/
);

/**订单信息表插入数据**/



/**评价表**/
CREATE TABLE diancan_Evaluate(
  E_ID INT PRIMARY KEY AUTO_INCREMENT,
  E_MID Int,                    /**餐馆ID**/
  E_UID Int,                    /**用户ID**/
  E_AllRating Float,            /**用户总评 1-5**/
  E_ServiceRating Float,        /**服务评价 1-5**/
  E_ERation Float,              /**环境评价 1-5**/
  E_Comment Varchar(120),       /**说明**/
  E_FID Varchar(100)           /**特别推荐**/
  -- E_ImgUrl Varchar(200),        /**图片地址**/
  -- E_Statue Boolean              /**审核 是否通过**/
);
INSERT INTO  diancan_Evaluate VALUES
(null,1,1,4.5,4,4.5,"还行",null),
(null,1,2,5,5,4.5,"很好吃",null),
(null,1,3,4.5,4,4.5,"服务很好",null),
(null,1,4,4.5,4,4.5,"还行",null);