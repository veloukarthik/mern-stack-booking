const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const route = require('./routes/route');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./kv-posts-firebase-adminsdk-ij5lz-ea1f4f855a.json');
const path = require('path');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid')

const PORT = process.env.PORT_NUMBER || 8000;
const MONGO_URI = process.env.MONGO_URL;



//cors package

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'kv-posts.appspot.com'
});
const bucket = admin.storage().bucket();

app.get('/firebase',(req,res)=>{
    
    bucket.getFiles().then(results=>{
        let [files] = results
        files.forEach(file=>console.log(file.name))
        // onSuccess(res)
        return res.json({files,status:true}).status(200);
    }).catch(err=>{
        console.log(err)
        return res.json({err:err,'status':false}).status(400);
        // onError(err)
    })
})

app.get('/firebase-download',(req,res)=>{

    bucket.file('images/image.png').download({
        destination: './downloads/1.png'
    }).then(results=>{
        console.log(results)

        return res.json({results,status:true}).status(200);
        // onSuccess(res)
    }).catch(err=>{
        console.log(err)
        return res.json({err:err,'status':false}).status(400);
        // onError(err)
    })
})

app.get('/firebase-upload',async (req,res)=>{
    bucket.upload('downloads/image.png', {
        destination: 'images/image.png',
        metadata: {
            metadata: {firebaseStorageDownloadTokens: uuidv4()}
        }
    }).then(async (results)=>{
        console.log(results)
        const options = {
            action: 'read',
            expires: Date.now() + 24 * 60 * 60 * 1000 // 1 day
         }
        const ImageURl = await bucket.file('images/image.png').getSignedUrl(options);
        return res.send(ImageURl);
        // onSuccess(res)
    }).catch(err=>{
        console.log(err)
        // onError(err)
        return res.send(err);
    })
})

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


