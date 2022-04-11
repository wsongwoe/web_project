//Created By: William Charles See Ong C0797740, Ashray Pujari C0800447, Maria Theresa Corre C0784534, Amulya Baddam C0796372
//Constant Variable to response express js
const { response } = require('express');

//Declare Variable for Mongoose on Plant Model
var mongoose = require('mongoose'), Plant = mongoose.model('plants');

//Modules for Plants
module.exports={
    //Function to get all list of plants
    GetAll:function(req,res){
        //Log Terminal action
        console.log("Display All Plants Details");
        //Find function in mongodb to show all the list of Plants inside the Database
        Plant.find({}, function(err, results){
            if(err) throw err;
            //Renders the list of all Plants in the index.ejs file
            res.render('index.ejs',{alltheplants:results});
            });
    },
    //Function to get all list of plants by Name
    GetByName:function(req,res){
        //Log Terminal action
        console.log("Search for Plant Names");
        //Constant variable for Plant Name
        const {Plant_Name}=req.query;
        //Find function in mongodb to get Plant Name Field
        Plant.find({Plant_Name}, function(err,results){
             if(err) throw err;
         //Renders the list of all Plants in the index.ejs file
        res.render('index.ejs',{alltheplants:results});
            });
    },
     //Function to get all list of plants by ID
    GetById:function(req,res){
        //Log Terminal action
        console.log("Search for Plant Id");
        //Constant variable for Plant ID
        const {Plant_Id}=req.query;
        //Find function in mongodb to get Plant ID Field
        Plant.find({Plant_Id}, function(err,results){
             if(err) throw err;
        //Renders the list of all Plants in the index.ejs file
        res.render('index.ejs',{alltheplants:results});
            });
    },
    //Function to get all list of plants by Type
    GetByType:function(req,res){
        //Log Terminal action
        console.log("Search for Plant Type");
        //Constant variable for Plant Type
        const {Plant_Type}=req.query;
        //Find function in mongodb to get Plant Type Field
        Plant.find({Plant_Type}, function(err,results){
             if(err) throw err;
        //Renders the list of all Plants in the index.ejs file
        res.render('index.ejs',{alltheplants:results});
            });
    },
    //Function to get all list of plants by environment
    GetByEnv:function(req,res){
        //Log Terminal action
        console.log("Search for Plant Environment");
        //Constant variable for Environment
        const {Environment}=req.query;
        //Find function in mongodb to get Plant Environment Field
        Plant.find({Environment}, function(err,results){
             if(err) throw err;
        //Renders the list of all Plants in the index.ejs file
        res.render('index.ejs',{alltheplants:results});
            });
    },
    //Function to get all list of plants by Size
    GetBySize:function(req,res){
        //Log Terminal action
        console.log("Search for Plant Size");
        //Constant variable for Plant Size
        const {Plant_Size}=req.query;
        //Find function in mongodb to get Plant Size Field
        Plant.find({Plant_Size}, function(err,results){
             if(err) throw err;
        //Renders the list of all Plants in the index.ejs file
        res.render('index.ejs',{alltheplants:results});
            });
    },
    //Function to get all list of plants by Custom Search all at once
    GetCustomSearch:function(req,res){
        //Log Terminal action
        console.log("Custom Search");
        console.log({'Plant_Name':req.query.Plant_Name});
        console.log({'Plant_Size':req.query.Plant_Size});
        console.log({'Plant_Type':req.query.Plant_Type});
        console.log({'Environment':req.query.Environment});
        //Find function in mongodb to get all plant details using logical OR
        Plant.find({ $or:[
            {'Plant_Name':req.query.Plant_Name}, 
            {'Plant_Size':req.query.Plant_Size},
            {'Plant_Type':req.query.Plant_Type}]},function(err,results){
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
        //Renders the list of all Plants in the path /
            res.redirect('/');
        })
    },
    //Create function to Delete plants
    DeleteById:function(req, res){
        console.log('Deleting the row');
        Plant.deleteOne({Plant_Id : req.params.id}, function(err, result){
            if (err) throw err;
            //Renders the list of all Plants in the path /
            res.redirect('/');
        });
        console.log("The row which is being deleted: %s", {Plant_Id : req.params.id})
    },
    //Get function ID to Update plants
    GetupdateId:function(req, res){
        console.log('Update the row using id');
        Plant.findOne({Plant_Id : req.params.id}, function(err, results){
            if(err) throw err;
            //Renders the list of all Plants in the updateplant.ejs file
            res.render('updateplant.ejs',{theplant:results});
        });
        console.log("The id is %s", {Plant_Id : req.params.id})
    },
    //Function to Update Plant
    UpdateElement:function(req, res){

        console.log('updating the row');

        var plantUpdate= req.body;

        plantUpdate = {
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

        


        Plant.findOneAndUpdate({Plant_Id : req.params.id}, plantUpdate, function(err, results){
            
            if(err) throw err;
            res.redirect(303, '/')
            //$inc:{plantUpdate};

        });
    }

    

   
}