//Created By: William Charles See Ong | Student Id: C0797740
//Declare variable express to connect express js
var express = require('express');
//Declare variable mongoose to connect to mongoose
var mongoose = require('mongoose');
//Declare path
var path = require('path');
//Declare bodyparser for forms
var bodyParser = require('body-parser');
//Declare app to use epxress js
var app = express();

//To call for the bodyParser
app.use(bodyParser.urlencoded({extended:true}));
//Make all the format into JSON
app.use(bodyParser.json());

//Setup the views folder
app.set('views', path.join(__dirname, 'view'));
app.set('views engine', 'ejs');

//Url of mongoose connection
require('./models/plantmodel');
//Local Host Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/web_project',{useUnifiedTopology:true},{useNewUrlParser:true});

//Connection to mongoose
const db=mongoose.connection;
//If Error in connection with mongoose shoe
db.on('error', console.error.bind(console,'connection error'));
//If Successfull Connection with Mongoose terminal show server is connected
db.once('open',function(){
    console.log("Server is Connected");
})

//Create variable for the plantController and its path
var plantController = require('./controller/plantController');

//Function to get all the details of the plant
app.get('/',plantController.GetAll);

//Function to add plant
app.post('/plant/add', plantController.Create);

//all the addplant.ejs add funciton
app.get('/add', function(req,res){
    res.render('addplant.ejs');
})

//Local Host Connection
app.listen(8080);

