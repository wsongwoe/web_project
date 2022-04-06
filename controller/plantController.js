//Created By: William Charles See Ong | Student Id: C0797740
//Constant Variable to response express js
const { response } = require('express');

//Declare Variable for Mongoose on Plant Model
var mongoose = require('mongoose'), Plant = mongoose.model('plants');

//Modules for Listing the Plant and Add
module.exports={
    GetAll:function(req,res){
        console.log("Display All Plants Details");
        //Find function in mongodb to show all the list of Plants inside the Database
        Plant.find({}, function(err, results){
            if(err) throw err;
            //Renders the list of all Plants in the index.ejs file
            res.render('index.ejs',{alltheplants:results});
            });
    },
    //Create function to add plants
    Create:function(req,res){
        console.log("Add Plants Details");
        //Get plants information using body parser method to POST form
        var plantInfo= req.body;
        //Plant req.body.First_Name pass on the addplants.ejs Id and following the other details
        plantInfo = {
            "Plant_Id":req.body.Plant_Id,
            "Plant_Name":req.body.Plant_Name,
            "Description":req.body.Description,
            "Care_Level":req.body.Care_Level,
            "Environment":req.body.Environment,
            "Water":req.body.Water,
            "Light":req.body.Light,
            "Plant_Size":req.body.Plant_Size,
            "Price":req.body.Price,
            "Plant_Type":req.body.Plant_Type,
            "Edible":req.body.Edible,
            "Fruit_Bearing":req.body.Fruit_Bearing,
            "Quantity":req.body.Quantity
        }
        //Adds records from the database
        Plant.create(plantInfo,function(err,result){
            if (err) throw err;
            res.redirect('/');
        })
    }
}