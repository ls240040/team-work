//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
<<<<<<< HEAD
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    database: 'diancan',
    connectionLimit: 20
=======
  host: '127.0.0.1',
  user: 'root',
  password: '',
  port:3306,
  database: 'diancan',
  connectionLimit: 20 
>>>>>>> 7c98d9497d806a417a99cca1ba6ae9e06d4cf850
});
//把创建好的连接池导出
module.exports = pool;