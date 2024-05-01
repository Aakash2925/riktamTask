const mongoose =require('mongoose');
// Configuration for setting up of mongoose to operate on MongoDB Databases
// const url = process.env.DB_URL+"riktam";
const url = process.env.DB_URL;
const connectUsingMongoose = async () =>{
    try{
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connected to mongoDB via mongoose ODM tool :)");
    }catch(err){
        console.log("Error while connecting to mongoose DB");
        console.log(err);
    }
}
module.exports = connectUsingMongoose;