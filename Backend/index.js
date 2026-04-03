const express = require("express");
const app = express();
const port = 8080;

//modules required;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {setuser, getuser} = require("./Authenticate/userAuth");

require("dotenv").config();


//middlewares;
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  }));
  app.options("*", cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
 
//connection;
const connect = require("./connection/connectToDB");
const user = require("./Model/usermodel"); 
connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected Successfully");
})
.catch((err)=>{
    console.log("err occured during connection of DB");
    console.log(err);
});


//routes;
app.get('/logout',(req,res)=>{
    if(req.cookies.uid){ 
        //console.log(req.cookies.uid);
        res.clearCookie('uid');
        //console.log(req.cookies.uid2);
        return res.json({
            message:"ok",
        });
    }
    else {
        return res.json({
            message:'not ok',
        });
    }
});
app.post('/checkAuth',(req,res)=>{
    if(req.cookies.uid) {
        return res.json({
            message:'ok',
        })
    }
    else { 
        return res.json({
            message:'not ok',
        })
    }
    
}) 
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        
        const userExists = await user.findOne({ name: username });
        if (userExists) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username is already taken' 
            });
        }

        // Checking if email already exists
        const userEmailExists = await user.findOne({ email: email });
        if (userEmailExists) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email is already in use' 
            });
        }

        // Creating new user (password is stored as plain text, not recommended)
        const newUser = new user({ 
            name: username, 
            email: email, 
            password: password 
        });
        await newUser.save();

        const token = setuser(req.body);

        // Setting cookie
        res.cookie('uid', token, {
            httpOnly: false,
            secure: true,
            sameSite: "None",
        });

        console.log("New user registered successfully");
        return res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});


app.post('/login',async (req,res)=>{
    //console.log(req.body);
    const {username,password} = req.body;
        try{
            const uid = getuser(req.cookies.uid);
            console.log(uid);
            console.log("uid is present");
            let existinguser = await user.findOne({name:uid.name});
            if(!existinguser) {
                return res.json({
                    message:"Invalid UserName",
                });
            }
            else if(username != uid.name){
                return res.json({
                    message:"Invalid UserName",
                });
            }
            const isPasswordValid = existinguser.password;
            if (!isPasswordValid) {
                return res.json({
                    message:"Invalid Password",
                });
            }
            else if(isPasswordValid != password){
                console.log("Wrong pass..!!");
                return res.json({
                    message:"Invalid Password",
                });
            }
            console.log(uid);
        }
        catch(err){
            console.log("oopps! uid not found");

            const Logeduser =  await user.findOne({name:username});
            if(Logeduser == null){
                return res.json({
                    message:'nouid'
                })
            }
            else if(Logeduser.name == username) {
                if(password != Logeduser.password) {
                    return res.json({
                        success: false, 
                        message:'Invalid Password' 
                    });
                }
                else {
                    const userinfo = {
                        username:Logeduser.name,
                        email:Logeduser.email,
                        password:Logeduser.password
                    }
                    const token = setuser(userinfo);

                    // Setting cookie
                    res.cookie('uid', token, {
                        httpOnly: false,
                        secure: true,
                        sameSite: "None",
                    });

                    return res.json({
                        ok:"true",
                    });
                }
            }            
            
        }
    res.json({
        ok:"true",
    });
});

app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
})