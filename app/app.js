//app.js

let express=require('express');
let  app=express();
let port=3000;
app.listen(port, function(){
    console.log('hello express');
});


let mongoose=require('mongoose');

//let db='mongodb://jolaya182:marieo23@ds231715.mlab.com:31715/expensviz';
//mongodb://<dbuser>:<dbpassword>@ds231715.mlab.com:31715/expensviz
let db='mongodb://jolaya182:marieo23@ds231715.mlab.com:31715/expensviz';
mongoose.Promise=global.Promise;
mongoose.connect(db, function(err){
  if(err){
        console.log( "error!: "+ err )
    }

    console.log("mongo  works")

});


/**
 * To connect using the mongo shell:
 * 
mongo ds231715.mlab.com:31715/expensviz -u <dbuser> -p <dbpassword>
 * 
 * 
 */
