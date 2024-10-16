const express= require('express')
const app=express();
const db=require('./db')

const bodyParser= require('body-parser');
app.use(bodyParser.json());

const MenuItem = require('./models/menu');
app.get('/',function(req,res){
  res.send('Hello Sir! Welcome to our restaurant. How may I help you?')
})

const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItemRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
  console.log('listening on port 3000');
}) 

// Mongoose allows you to define a schema for your documents.A schema is like a blueprint that defines the structure and data types of your documents within a collection

// bodyParser.json()automatically parses the JSON data from the request body and converts it into a JavaScript object, which is then sorted in thereq.body

// An async function allows you to use the await keyword inside it 
// await is used to pause the execution of the function until a promise is resolved