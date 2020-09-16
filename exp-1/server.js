const express = require('express');
var app = express()
const fs = require('fs')
const path = require('path')
const mysql = require('mysql')

var con = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "ba7f4376abe00d",
  password: "2aaec46f",
  database: "heroku_aaae19a4220d4fe"
});

app.use(express.static(path.join(__dirname, "build")));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'build','index.html'));
  // create row var sql = "INSERT INTO responses (see_more_clicked) VALUES (1)"; 
});

app.listen(process.env.PORT || 3000);
console.log("Listening on port 3000")


// see more clicked
app.get('/api/see_more_clicked', (req,res) => {
  var sql = "INSERT INTO responses (see_more_clicked) VALUES (1)"; 
  con.query (sql, (err, result) => {
    if (err) {console.log(err)};
    console.log("1 record inserted");
    res.end('Success');
  });
})

// upgrade clicked
app.get('/api/upgrade_clicked', (req,res) => {
  var sql = "INSERT INTO responses (upgrade_clicked) VALUES (1)"; 
  con.query (sql, (err, result) => {
    if (err) {console.log(err)};
    console.log("1 record inserted");
    res.end('Success');
  });
})

//


//  mysql://ba7f4376abe00d:2aaec46f@us-cdbr-east-02.cleardb.com/heroku_aaae19a4220d4fe?reconnect=true
