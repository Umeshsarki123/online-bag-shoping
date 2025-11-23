const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const path = require('path');

const db = require('./config/mongoose-connection')

app.set("views engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));


app.use("/owners", ownersRouts);
app.use("/users", usersRouts);
app.use("/products", productsRouts);



app.listen(3000,()=>{
    console.log("http://localhost:3000")
    
})


