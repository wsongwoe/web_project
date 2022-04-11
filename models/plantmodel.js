//Created By: William Charles See Ong C0797740, Ashray Pujari C0800447, Maria Theresa Corre C0784534, Amulya Baddam C0796372
//Constant Variable to response mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
const AutoIncrement = require('mongoose-sequence')(mongoose);

//Model or Table structure of Plant
var plantsSchema = new mongoose.Schema({
    Plant_Name: {type:String},
    Description: {type:String},
    Care_Level: {type:String}, 
    Environment: {type:String},
    Water: {type:String},
    Light: {type:String},
    Plant_Size: {type:String},
    Price: {type:Number},
    Plant_Type: {type:String},
    Edible: {type:String},
    Fruit_Bearing: {type:String},
    Quantity: {type:Number}
    
});
//Table Plants under PlantSchema
plantsSchema.plugin(AutoIncrement, {inc_field: 'id'});
mongoose.model('plants', plantsSchema);