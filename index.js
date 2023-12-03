const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const route = require('./routes/route');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT_NUMBER || 8000;
const MONGO_URI = process.env.MONGO_URL;



//cors package

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.use('/api', route);

app.use(express.static(path.join(__dirname, 'views', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'build', 'index.html'));
});


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


