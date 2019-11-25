const express = require('express');
const app = express();
app.use(express.static(__dirname + '/'));


app.get("/Employee",(req,res)=>{
    res.sendFile('Employee/index.html',{root: __dirname});
});

app.listen(27580,(req,res)=>{
    console.log("Running ...");
});