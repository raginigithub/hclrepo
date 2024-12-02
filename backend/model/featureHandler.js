var db = require("../dbcon/db");

module.exports = {
    getFeatures(dbconn)
    {
        let sql = "select * from hosp_feature";
        dbconn.query(sql,(err,rows) =>
        {
            if(err) throw err;
            return rows;
     
        });
    }
 }