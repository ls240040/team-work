const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://127.0.0.1:5050/community/carousel
router.get('/carousel', (req, res) => {
    var sql = "SELECT C_Href FROM diancan_carousel WHERE C_Place='community'";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

//http://127.0.0.1:5050/community/recommend
router.get('/recommend', (req, res) => {
    var attention = req.query.attention2;
    var sql = "SELECT ID,R_Attention,R_Avatar,R_Name,R_Title,R_Vip,R_Comment,R_img1,R_img2,R_img3,R_Time,R_Come,R_Comnum,R_Collect FROM recommend";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})


//http://127.0.0.1:5050/community/recommend2
router.get('/recommend2', (req, res) => {
    var attention = req.query.attention2;
    var id = req.query.id;
    var sql = "SELECT ID,R_Attention,R_Avatar,R_Name,R_Title,R_Vip,R_Comment,R_img1,R_img2,R_img3,R_Time,R_Come,R_Comnum,R_Collect FROM recommend";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            var sql = `UPDATE recommend SET R_Attention=? WHERE ID=?`;
            pool.query(sql, [attention, id], (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send({ code: 2, msg: "更新成功", data: result });
                } else {
                    res.send({ code: -2, msg: "更新失败" });
                }
            })
        }

    })
})


//http://127.0.0.1:5050/community/dweek
router.get('/dweek', (req, res) => {
    var sql = "SELECT R_Back,R_Avatar,R_Name,R_Title,R_Label FROM doyen WHERE R_Id=1";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

//http://127.0.0.1:5050/community/dmonth
router.get('/dmonth', (req, res) => {
    var sql = "SELECT R_Back,R_Avatar,R_Name,R_Title,R_Label FROM doyen WHERE R_Id=2";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

//http://127.0.0.1:5050/community/dyear
router.get('/dyear', (req, res) => {
    var sql = "SELECT R_Back,R_Avatar,R_Name,R_Title,R_Label FROM doyen WHERE R_Id=3";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

//http://127.0.0.1:5050/community/friends
router.get('/friends', (req, res) => {
    var R_Avatar = req.query.avatar;
    var R_Name = req.query.name;
    var R_Title = req.query.title;
    var R_Vip = req.query.vip;
    var R_Comment = req.query.comment;
    var R_img1 = req.query.img1;
    var R_img2 = req.query.img2;
    var R_img3 = req.query.img3;
    var R_Time = req.query.time;
    var R_Comnum = req.query.comnum;
    var R_Collect = req.query.collect;
    var sql = "SELECT R_Avatar,R_Name,R_Title,R_Vip,R_Comment,R_img1,R_img2,R_img3,R_Time,R_Comnum,R_Collect FROM friends WHERE R_Name=?";
    pool.query(sql, (R_Name), (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            var sql = `INSERT INTO friends VALUES(NULL,'${R_Avatar}','${R_Name}','${R_Title}','${R_Vip}','${R_Comment}','${R_img1}','${R_img2}','${R_img3}','${R_Time}',${R_Comnum},${R_Collect})`;
            pool.query(sql, (err, result) => {
                if (err) throw err;
                if (result.affectedRows == 0) {
                    res.send({ code: -1, msg: "查询失败" });
                } else {
                    res.send({ code: 1, msg: "查询成功", data: result });
                }
            })
        } else {
            res.send({ code: 2, msg: "已关注", data: result });
        }
    })
})

//http://127.0.0.1:5050/community/friends2
router.get('/friends2', (req, res) => {
    var sql = "SELECT R_Avatar,R_Name,R_Title,R_Vip,R_Comment,R_img1,R_img2,R_img3,R_Time,R_Comnum,R_Collect FROM friends";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ code: 1, msg: "查询成功", data: result });
        } else {
            res.send({ code: -1, msg: "查询失败" });
        }
    })
})

module.exports = router;