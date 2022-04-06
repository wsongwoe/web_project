//Created By: William Charles See Ong | Student Id: C0797740
//Constant Variable to response mongoose
var mongoose = require('mongoose');

//Model or Table structure of Plant
var plantsSchema = new mongoose.Schema({
    Plant_Id: {type:String},
    Plant_Name: {type:String},
    Description: {type:String},
    Care_Level: {type:String}, 
    Environment: {type:String},
    Water: {type:String},
    Light: {type:String},
    Plant_Size: {type:String},
    Price: {type:String},
    Plant_Type: {type:String},
    Edible: {type:String},
    Fruit_Bearing: {type:String},
    Quantity: {type:Number}
});

mongoose.model('plants', plantsSchema);