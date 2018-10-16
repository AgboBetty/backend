var express=require('express');
var app = express();
var path = require('path');
const User = require("./user.model");


const mongoose = require('mongoose');
let dbUrl = "mongodb://localhost:27017/mydb";

let mongoDb = dbUrl;

mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error",console.error.bind(console,"MongoDB COnnection error:"));


let user = new User({
    firstname:"Betty",
    surname:"agbo",
    email:"bettyagbo002@gmail.com",
    password:"betty",
    birth:"8-7-2001",
    gender:"female",
    nationality:"nigeria"
});

user.save().then(user => {console.log(user)})
.catch(err => {console.log(err)});

app.use(express.static('public'));

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname + '/index.html'));
});
var server=app.listen(3000,function() {console.log("Listening On Port 3000")});




// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj =
//          {firstname: "betty", surname: "agbo", email:"bettyagbo002@gmail.com",nationality:"Nigeria", birth:"8-7-2001",gender:"female" };
//          dbo.collection("customers").insertone(myobj, function(err, res) 
//          {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//           });
//         });