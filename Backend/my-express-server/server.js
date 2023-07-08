const express = require('express');
const app = express();


app.get("/", function(request, response){
    response.send("<h1>Hello World</h1>");
});

app.get("/contact",function(request, response){
    response.send("Contact me at: lalityogi2506666@gmail.com");
})
app.get("/about",function(request, response){
    response.send("My Self lalit Yogi , A Full stack web developer");
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
})