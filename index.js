const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const route = require('./routes/route');
const app = express();

const PORT = process.env.PORT_NUMBER || 8000;
const MONGO_URI = process.env.MONGO_URL;




app.use('/', route);

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true
})
    .then((res) => {
        console.log("mongoose connected")
    })
    .catch((error) => {
        console.log(error);
    })

app.listen(PORT, () => {
    console.log("This server is listening 8000 port");
})


