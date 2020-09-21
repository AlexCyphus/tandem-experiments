const express = require('express');
var app = express()
const fs = require('fs')
const path = require('path')
const mysql = require('mysql')
var bodyParser = require('body-parser')

var con = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "ba7f4376abe00d",
  password: "2aaec46f",
  database: "heroku_aaae19a4220d4fe"
});

app.use(express.static(path.join(__dirname, "build")));

var jsonParser = bodyParser.json()

const port = 8000

app.listen(process.env.PORT || port);
console.log(`Listening on port ${port}`)

// keep database alive
setInterval(function () {
    con.query('SELECT 1');
}, 5000);

// load homepage, create blank row, save as userID
app.get('/', function(req,res){
  console.log("homepage homey")
  res.sendFile(path.join(__dirname,'build','index.html'));
});

app.get('/api/initiate', function(req,res){
  var sql = "INSERT INTO responses (initiated) VALUES (1)"; 
  con.query (sql, (err, result) => {
    if (err) {console.log(err)};
    userId = result.insertId;
    console.log("row initialized")
  });
});

// see more clicked (working)
app.put('/api/see_more_clicked', jsonParser, (req, res) => {
  console.log("see more", userId)
  var sql = "UPDATE responses SET see_more_clicked = 1 WHERE id = " + userId
  con.query (sql, (err, result) => {
    if (err) {console.log(err)};
    console.log("see_more_clicked inserted")
  })
});

// upgrade clicked (working)
app.put('/api/upgrade_clicked', (req,res) => {
  console.log("upgrade", userId)
  var sql = "UPDATE responses SET upgrade_clicked = 1 WHERE id = " + userId
  con.query (sql, (err, result) => {
    if (err) {console.log(err)};
    console.log("upgrade_clicked inserted")
  })
});

// content_clicked

// upgrade_clicked

// close_clicked

// give_feedback_clicked


//  mysql://ba7f4376abe00d:2aaec46f@us-cdbr-east-02.cleardb.com/heroku_aaae19a4220d4fe?reconnect=true
