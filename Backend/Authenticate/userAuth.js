const user = require("../Model/usermodel");
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const setuser = (user1)=>{
    return jwt.sign({name:user1.username,email:user1.email,password:user1.password},"rahullokhande");
}
const getuser = (uid)=>{
    return jwt.verify(uid,secretKey);
}

module.exports = {setuser,getuser};