//Created By: William Charles See Ong C0797740, Ashray Pujari C0800447, Maria Theresa Corre C0784534, Amulya Baddam C0796372
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

//Static Files for CSS and Image
app.use(express.static('public'))
app.use('/img',express.static(__dirname + "public/img"));
app.use('/css',express.static(__dirname + "public/css"));

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
//Constant exp variable
const exp = require('constants');

//Function to get all the details of the plant
app.get('/',plantController.GetAll);
//Function to get all the details of the plant such as Id, type, environment and size
app.get('/plants/search',plantController.GetCustomSearch);
app.get('/plants/id',plantController.GetById);
app.get('/plants/type',plantController.GetByType);
app.get('/plants/environment',plantController.GetByEnv);
app.get('/plants/size',plantController.GetBySize);
//Function to add plant
app.post('/plant/add', plantController.Create);
//Function to delete
app.get('/plant/delete/:id', plantController.DeleteById);
//Function to update
app.get('/plant/updating/:id', plantController.GetupdateId);
app.post('/plant/update/:id', plantController.UpdateElement);

//all the addplant.ejs add funciton
app.get('/add', function(req,res){
    res.render('addplant.ejs');
})

//Local Host Connection
var server = app.listen(8080, function() {
	var port = server.address().port
	console.log("Server is listening on: http://localhost:%s", port)
})

