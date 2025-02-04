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

        // Check if email already exists
        const userEmailExists = await user.findOne({ email: email });
        if (userEmailExists) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email is already in use' 
            });
        }

        // Create new user (password is stored as plain text, not recommended)
        const newUser = new user({ 
            name: username, 
            email: email, 
            password: password 
        });
        await newUser.save();

        // Generate a token (placeholder function; replace with your logic)
        const token = setuser(req.body);

        // Set cookie
        res.cookie('uid', token, {
            httpOnly: true,
            secure: false, // Use true in production with HTTPS
            sameSite: 'Strict',
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
        const existinguser = await user.findOne({name:uid.name});
        if(!existinguser) {
            return res.json({
                message:"Invalid UserName",
            });
        }
        else if(existinguser != uid.name){
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
            console.log("pass galat be");
            return res.json({
                message:"Invalid Password",
            });
        }
        console.log(uid);
    }
    catch(err){
        console.log("uid not found",err);
        return res.json({
            success: false, 
            message:'nouid' 
        });
    }
    
    res.json({
        ok:"true",
    });
});

app.listen(port,()=>{
    console.log(`app is started at port ${port}`);
})