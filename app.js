// creating server
const express = require('express');
const app = express();


// packages used in server
const cookieParser = require('cookie-parser')
const path = require('path');


// Module used in server
const db = require('./config/mongoose-connection');
const ownersRoutes = require('./routes/ownersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');


//middle ware used in server
app.set("views engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));



// routes
app.use("/users", usersRoutes);
app.use("/owners", ownersRoutes);
app.use("/products", productsRoutes);





//listen to server
app.listen(3000,()=>{
    console.log("http://localhost:3000")
    
})


