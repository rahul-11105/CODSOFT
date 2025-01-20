const express = require("express");
const app = express();
const port = 8080;

//modules required;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {setuser, getuser} = require("./Authenticate/userAuth");


//middlewares;
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000', // React app URL
        credentials: true, // Allow cookies to be sent with requests
    }
));
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
});


//routes;

app.post('/signup',(req,res)=>{
    console.log(req.body);
    const {username,email,password} = req.body;
    const token = setuser(req.body);
    console.log(token);
    const user1 = new user({name:username,email:email,password:password});
    user1.save();
    console.log("new user found");
    res.cookie('uid',token,
        {
            httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client-side
            secure: false,  // Set to true if using HTTPS (not necessary for localhost without HTTPS)
            sameSite: 'Strict', // Helps in cross-origin requests
        }
    );
    res.send("ok");
});

app.post('/login',async (req,res)=>{
    //console.log(req.body);
    const {username,password} = req.body;
    
    try{
        const uid = getuser(req.cookies.uid);
        console.log(uid);
        const existinguser = await user.findOne({name:uid.name});
        if (!existinguser) {
            console.log("user not found");
            return res.status(404).send("User not found");
        }
        const isPasswordValid = existinguser.password;
        if (!isPasswordValid) {
            console.log("pass not mached");
            return res.status(401).send("Invalid credentials");
        }
        else if(isPasswordValid != password){
            console.log("pass galat be");
            return res.status(401).send("Invalid credentials");
        }
        console.log(uid);
    }
    catch(err){
        console.log("uid not found",err);
    }
    
    res.send('ok');
});

app.listen(port,()=>{
    console.log(`app is started at port ${port}`);
})