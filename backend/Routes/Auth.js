
const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');
const errorHandler = require('../Middlewares/errorMiddleware');
const authTokenHandler = require('../Middlewares/checkAuthToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

//Api Testing 
router.get('/test', async (req, res)=>{
    res.json({
        message: "  use /auth/test  to test me Auth Api is Working properly"
    })
})

function createResponse (ok,message,data) {
    return{
        ok,
        message,
        data,
    };
}

//register Api
router.post('/register', async (req, res,next)=>{
try {
    // Get req from the body
    const{name,email,password} = req.body;
    // If the User Exist Check
    const existingUser = await User.findOne({email: email});
    if(existingUser){
        return res.status(400).json(createResponse(false,'Email Already exists'));
    }
    // If dont exist create one 
    const newUser = new User({
        name,
        password,
        email,
    });

// Save the user
await newUser.save();
res.status(201).json(createResponse(true,"User Registered Successfully"));
    
} catch (error) {
    next(error);
}
})
// Login Api
// router.post('/login', async (req, res,next)=>{
// try {
    
// } catch (error) {
//     next(error);
// }
// })
// Send Otp Api
// router.post('/sendotp', async (req, res,next)=>{

// })
// Check Login Api

// router.get('/checklogin',authTokenHandler, async (req, res, next)=>{

// })

router.use(errorHandler)


module.exports= router;