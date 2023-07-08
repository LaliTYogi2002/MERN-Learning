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

app.listen(3000,function(){
    console.log("Server Started on 3000 port");
})