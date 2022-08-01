var express=require('express')
var app=express();

app.get('/',(req,resp)=>{
resp.send(
    "<h1>Welcome to mumbai </h1>"
)
});

app.listen(9000);
console.log("listening at port 9000");