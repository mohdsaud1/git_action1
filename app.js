const express = require("express");
const app = express();

app.use('/',(req,res)=>{
    res.send("Hello new worldwelcome everyone")
 });


app.listen(2000, () => {
    console.log("Run....");
 });
  
