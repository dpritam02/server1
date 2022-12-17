const { application } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true})); //by using urlencoded->get access to form data


app.get("/",function(req,res){
    // res.sendFile("index.html");//used to send file in this folder
    // console.log(__dirname); //__dirname -> gives the address of the file
    res.sendFile(__dirname + "/index.html"); //provide path to read the index file
});
app.post("/",function(req,res){
    // console.log(req.body.num1); //parse the http request
    //here num1 value get stored in req
var n1 = Number(req.body.num1);
var n2 = Number(req.body.num2);
var result = n1*n2;
    res.send("the multiplication is: "+result);
});


app.get("/bmicalculator",function(req,res){
    // res.sendFile("index.html");//used to send file in this folder
    // console.log(__dirname); //__dirname -> gives the address of the file
    res.sendFile(__dirname + "/bmicalculator.html"); //provide path to read the index file
});
app.post("/bmicalculator",function(req,res){
    // console.log(req.body.num1); //parse the http request
    //here num1 value get stored in req
var a = parseFloat(req.body.w);
var b = parseFloat(req.body.h);
var result = a / (b*b);
    res.send("your bmi is:  "+result);
});

app.listen(3000,function(){
    console.log("server is running on port 3000")
});