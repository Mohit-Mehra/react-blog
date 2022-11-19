const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    console.log("hey world")
})

app.listen("5000",()=>{
    console.log("hello")
});