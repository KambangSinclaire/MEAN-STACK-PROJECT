const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require("./config/database");
const app = express();

//Declaring port for both production and development  
const port = process.env.PORT || 7000;

//Mongoose Setup and Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log("could not connect to the database");

    } else {
        console.log("Successfully connected to " + config.db);

    }
});


//Middlewares
app.use(express.static(__dirname + '/FrontEnd/dist/FrontEnd'));

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + '/FrontEnd/dist/FrontEnd/index.html'));
});



app.listen(port, () => {
    console.log("Server is listening on port " + port);
});