const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://Test_DB:Umesh%407601800312@cluster1.x64znym.mongodb.net/bag-shop")
.then(()=>{
    console.log('connected')    
})
.catch((err)=>{
    console.log(err)
})


module.exports = mongoose.connection;
