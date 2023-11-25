const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const route = require('./routes/route');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT_NUMBER || 8000;
const MONGO_URI = process.env.MONGO_URL;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', route);

mongoose.connect(MONGO_URI, {})
    .then((res) => {
        console.log("mongoose connected")
    })
    .catch((error) => {
        console.log(error);
    })

app.listen(PORT, () => {
    console.log(`This server is listening ${PORT} port`);
})


