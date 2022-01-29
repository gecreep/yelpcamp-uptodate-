const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User=require('../models/user')
const users=require('../controllers/userControl')
router.get('/register',(req,res)=>{
    res.render('user/register');
})

router.route('/register')
.get(users.renderRegister)
.post( catchAsync(users.registerUser));

router.route('/login').get( users.logInUser)
.post(passport.authenticate('local',
 { failureFlash: true, failureRedirect: '/login' }),
users.showLogIn)


router.get('/logout',users.logOutUser)

module.exports = router;