const mongoose=require('mongoose');
// Define the MongoDB connection URL
// const mongoURL='mongodb://localhost:27017/hotels'
// const mongoURL='mongodb+srv://heyshruti68:s4TTUUopZOqZutjC@cluster0.gjoac.mongodb.net/'
// mongoose.connect('mongodb+srv://heyshruti68:s4TTUUopZOqZutjC@cluster0.gjoac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   ssl: true,
//   tlsAllowInvalidCertificates: false
// });
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