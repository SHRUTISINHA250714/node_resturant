const mongoose=require('mongoose');
// Define the MongoDB connection URL

require('dotenv').config();
const mongoURL=process.env.MONGODB_URL;


// Set up MongoDB connection
mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,

})
 const db=mongoose.connection ;
 
//  Define event listeners for database connection 

 db.on('connected',()=>{
   console.log('Connected to MongoDB server');
 });
 db.on('error',(err)=>{
  console.error('MongoDB connection error:',err);
 });
 db.on('disconnected',()=>{
  console.log('MongoDB disconnected');
 });

//  Export the database connection
module.exports=db;