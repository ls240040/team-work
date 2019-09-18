const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://127.0.0.1:5050/menu
router.get('/', (req, res) => {
    var sql = "SELECT FT_Name FROM diancan_foodtype";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

router.post('/food', (req, res) => {
    var type = req.body.foodType
    var sql = "SELECT FT_ID FROM diancan_foodType where FT_Name = ?";
    pool.query(sql, [type], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            var fid = result[0].FT_ID
            var sql = "SELECT F_Name,F_Url,F_Price FROM diancan_food where F_Id = ?";
            pool.query(sql, [fid], (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    res.send({ code: -1, msg: "查询失败", data: result });
                } else {
                    res.send({ code: 1, msg: "查询成功", data: result });
                }
            })


        }
    })




})

module.exports = router;