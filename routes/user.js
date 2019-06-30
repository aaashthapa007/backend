const express = require('express');
const jwt = require('jsonwebtoken');
const user = require('../models/register');
const loginUser = require ('../models/login');

const auth = require ('../middleware/Auth');
const router = express.Router();



////to resister user
router.post('/register',(req,res) =>{
    // console.log(req.body)
    var myData = new user(req.body);
    myData.save().then(function(){
        console.log('successfully registered!')
    })
    .catch(function()
    {console.log("something is wrong")})
});

// to check if the user is valid or not in login
router.post("/login", async function(req, res)
{ 
   
   const Users = await loginUser.checkCrediantialsDb(req.body.email,  req.body.password)
     ///self created function
const token = await  Users.generateAuthToken()

 //console.log(token)
  res.send({token})

  })




module.exports = router;