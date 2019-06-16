const express = require('express');
const jwt = require('jsonwebtoken');
const user = require('./models/register');
require('./db/database');
// const hbs = require('hbs');
// var favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/render'));






// app.post("/register", async function(req, res)
// { 
   
//    const Users = await User.checkCrediantialsDb(req.body.username,  req.body.password)
// //     ///self created function


// const token = await  Users.generateAuthToken()

//  //console.log(token)
//  res.send({token})

//   })

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/render/home.html')
});
//to get register form
app.get('/register', function(req,res){
    res.sendFile(__dirname + '/render/register.html');
});
// to insert value into for registering user
app.post('/register',(req,res) =>{
    // console.log(req.body)
    var myData = new user(req.body);
    myData.save().then(function(){
        console.log('successfully registered!')
    })
    .catch(function()
    {console.log("something is wrong")})
});

// to check if the user is valid or not in login
app.post("/login", async function(req, res)
{ 
   
   const Users = await User.checkCrediantialsDb(req.body.username,  req.body.password)
//     ///self created function


const token = await  Users.generateAuthToken()

 //console.log(token)
 res.send({token})

  })



// creates a server for the program to run
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});