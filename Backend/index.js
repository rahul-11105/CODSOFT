const express = require("express");
const app = express();
const port = 3000;

//modules required;
const cors = require('cors');
const cookieParser = require('cookie-parser');


//middlewares;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//connection;
const connect = require("./connection/connectToDB");
const user = require("./Model/usermodel");
connect("mongodb://127.0.0.1:27017/job_portal")
.then(()=>{
    console.log("DB connected Successfully");
})
.catch((err)=>{
    console.log("err occured during connection of DB");
})
//routes;
app.get('/',(req,res)=>{
    const user1 = new user({name:"rahul",email:"rahullokhande11105@gmail.com",password:"1234"});
    user1.save();
    res.send("<h1> hello </h1>");
});

app.listen(port,()=>{
    console.log(`app is started at port ${port}`);
})