const mongoose = require('mongoose');


require('dotenv').config();

const uri = process.env.MONGO_URI;


mongoose
.connect(uri)
.then(()=>{
    console.log('Data base connected successfully')    
})
.catch((err)=>{
    console.log(err)
})


module.exports = mongoose.connection;
