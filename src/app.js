const express = require("express");

const app = express();

//This will only handle GET call to /user
app.get("/user", (req,res)=>{
    res.send({firstName:"Huzaifa", lastName:"Islam"})
})
app.post("/user", async(req,res)=>{
    console.log(req.body);
    //savind data to database
    res.send("Data saved successfully to db!!")
})

app.delete("/user", (req,res)=>{
    res.send("Deleted successfully")
})

//This will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{
    res.send("Hello from Test")
})

app.listen(3000,()=>{
    console.log("server is here")
})


