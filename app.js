const express = require("express");
const {connectmongo} =require("./connection");
const {logReqRes} = require('./middlewares');
const userRouter= require("./routes/user");
 const app = express();
 app.use(express.json());

connectmongo("mongodb://127.0.0.1:27017/first-app");


app.use('/users',userRouter);
app.get('/',(req,res)=>{
  return res.json("Hellow World");
})
app.use(logReqRes("test.txt"));

app.listen(8000, () => {
  console.log("Server running on port 8000");
});