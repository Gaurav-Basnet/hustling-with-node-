
const express = require("express");

const app = express();
app.get('/',(req,res)=>{
  return res.send("Hello");
})
app.get('/about',(req,res)=>{
  return res.send("aabout");
})


app.listen(8000,()=>{console.log("Muji run vo")})