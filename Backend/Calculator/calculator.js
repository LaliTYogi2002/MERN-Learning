const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    ans = Number(req.body.num1)+Number(req.body.num2);
    res.send(`Addition is ${ans}`)
})

app.get("/bmicalculator",function(req,res){

    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    var bmi = weight/(height*height) ;

    res.send(`${bmi}`)

})

app.listen(3000,function(){
    console.log("Server Started on 3000 port");
})