let  mongoose=require('mongoose');
var Schema=mongoose.Schema;

let User=new Schema({
    name:{type : String},
    lastName:{type : String},
    email:{type : String},
    password:{type : String}
});

module.exports=mongoose.model('User' , User );