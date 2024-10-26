const express = require("express");

const app = express();

// using question mark --> so /abc and /ac both can be handled with this /ab?c 
app.get("/ab?c",(req,res)=>{
    res.send({firstName:"Huzaifa", lastName:"Islam"})
})

//we can grp also optional things in bracket. in this below example bc is option
app.get("/a(bc)?d",(req,res)=>{
    res.send({firstName:"Huzaifa", lastName:"Islam"})
})

//using + in the url --> abc and abbc and abbbc, etc will work we can have minimum one b btw a and c and maximum any number of b but /ac will not be handled with this. Pattern should remain same 
app.get("/ab+c",(req,res)=>{
    res.send("Checking how + works in url")
})

// using * means we can put anything btw ab and cd it will be handled. like /abHuzaifacd. /abqwertycd 
app.get("/ab*cd",(req,res)=>{
    res.send("Checking how * works in url")
})

// use of regex --> /abcdfly /butterfly --> this regex will handle all the urls ending with fly
app.get(/.*fly/, (req,res)=>{
    console.log("use of regex");
})

//how to get query params from url --> /user?userid123=452 or /user?userid123=452&password=test 
app.get("/user",(req,res)=>{
    console.log(req.query);
    res.send("extracting query")
})

//how to handle dymanic apis like --> /user/101 also called path params 
app.get("/user/:userId",(req,res)=>{ //colon means its a dynamic route
    console.log(req.params);
    res.send("testing dynamic urls")
})
app.get("/user/:userId/:name/:password",(req,res)=>{ //colon means its a dynamic route
    console.log(req.params);
    res.send("testing dynamic urls")
})


app.listen(3000,()=>{
    console.log("server is here")
})


