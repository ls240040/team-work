const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://127.0.0.1:5050/index/shoplist
router.get('/shoplist', (req, res) => {
        var sql = "SELECT M_Name,M_Address,M_Distance FROM diancan_Mer";
        pool.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                res.send({ code: -1, msg: "查询失败" });
            } else {
                res.send({ code: 1, msg: "查询成功", data: result });
            }
        })
    })
    //http://127.0.0.1:5050/index/rowNum
router.post('/rownum', (req, res) => {
    addr = req.body.addr
    uid = req.body.uid
    num = req.body.num
    ETime = req.body.ETime
    eTime = req.body.eTime
    Time = req.body.time
    shopname = req.body.shopname
    var sql1 = "SELECT R_ID FROM diancan_rownum WHERE U_ID=?"
    pool.query(sql1, uid, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            var sql = "INSERT INTO  diancan_RowNum  SET U_ID=?,R_Time=?,R_People=?,R_Address=?,R_Etime=?,R_ShopName=?";
            pool.query(sql, [uid, Time, num, addr, eTime, shopname], (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    res.send({ code: -1, msg: "排号失败" });
                } else {
                    res.send({ code: 1, msg: "排号成功", data: result });
                }
            })
        } else {
            res.send({ code: -2, msg: "请勿重复排号", data: result });
        }
    })

})

//http://127.0.0.1:5050/index/rowNum2
router.get('/rowNum2', (req, res) => {
    var U_ID = req.query.uid;
    var sql = "SELECT R_ID,R_Time,R_People,R_Address FROM diancan_rownum WHERE U_ID=?"
    pool.query(sql, [U_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

//http://127.0.0.1:5050/index/cancelOrder
router.get('/cancelOrder',(req,res)=>{
    var U_ID = req.query.uid;
    var sql = "DELETE FROM reserve WHERE U_ID=?";
    pool.query(sql,[U_ID],(err,result)=>{
        if (err) throw err;
        if (result.affectedRows == 0) {
            res.send({ code: -1, msg: "删除失败" });
        } else {
            res.send({ code: 1, msg: "删除成功", data: result });
        }
    })
})

router.post('/cancelNum', (req, res) => {
    var rid = req.body.rid
    var sql = "DELETE FROM diancan_rownum WHERE R_ID=?"
    pool.query(sql, rid, (err, result) => {
        if (err) throw err;
        if (result.rowaffected == 0) {
            res.send({ code: -1, msg: "删除失败" });
        } else {
            var sql1 = "ALTER  TABLE  `diancan_rownum` DROP `R_ID"
            pool.query(sql1, (err, result) => {
                if (err) throw err;
                var sql2 = "ALTER  TABLE  diancan_rownum ADD R_ID INT PRIMARY KEY AUTO_INCREMENT";
                pool.query(sql2, (err, result) => {
                    if (err) throw err;
                    res.send({ code: 1, msg: "查询成功" });
                })
            })
        }
    })
})


//http://127.0.0.1:5050/index/reserve?R_Phone=18596855565&R_Name=tom
router.get('/reserve', (req, res) => {
    var time = req.query.time;
    var num = req.query.num;
    var room = req.query.room;
    var hall = req.query.hall;
    var R_Name = req.query.name;
    var R_Phone = req.query.phone;
    var sex = req.query.sex;
    var demand = req.query.demand;
    var uid=req.query.uid;
    var M_Name=req.query.M_Name;
    var M_Distance=req.query.M_Distance;
    console.log(time, num, room, hall, R_Name, R_Phone, sex, demand);
    var sql = "SELECT R_Time,R_Num,R_Name,M_Name,M_Distance FROM reserve WHERE R_Phone=? AND R_Name=?";
    pool.query(sql, [R_Phone, R_Name], (err, result) => {
        if (err) throw err;
        //6.在回调函数中 判断下一步操作
        if (result.length == 0) {
            var sql = `INSERT INTO reserve VALUES(NULL,${uid},'${time}','${num}',${room},'${hall}','${R_Name}',${R_Phone},'${sex}','${demand}','${M_Name}','${M_Distance}')`;
            //7.执行sql获取返回结果
            pool.query(sql, (err, result) => {
                if (err) throw err;
                //8.如果 sql UPDATE INSERT DELETE
                //判断执行成功  result.affectedRows 影响行数
                if (result.affectedRows > 0) {
                    res.send({ code: 1, msg: "预订成功", data: result })
                } else {
                    res.send({ code: -2, msg: "预订失败" })
                }
            })
        }else{
            res.send({ code: 2, msg: "已预订" ,data:result})
        }

    })
})


//http://127.0.0.1:5050/index/reserve2
router.get('/reserve2', (req, res) => {
    var U_ID=req.query.uid;
    var sql = "SELECT R_Time,R_Num,R_Name,M_Name,M_Distance FROM reserve WHERE U_ID=?";
    pool.query(sql,[U_ID],(err,result)=>{
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败"});
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })

})

router.get('/carousel', (req, res) => {
    var sql = "SELECT C_Href FROM diancan_carousel WHERE C_Place='indexTop'";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})
router.get('/indexShop', (req, res) => {
    var sql = "SELECT S_Title,S_price,S_Count,S_Href FROM diancan_shop";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})
router.get('/shop', (req, res) => {
    var sql = "SELECT S_Href,S_Title,S_price,S_Count FROM diancan_shop";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

module.exports = router;