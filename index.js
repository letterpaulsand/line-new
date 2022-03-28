const express = require('express')
const FormData = require('form-data');
require('dotenv').config()
const axios = require('axios');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const token = process.env.LINE_NOTIFY_TOKEN

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'))
})

app.get('/index.css', (req, res) => {
    res.sendFile(path.resolve('./dist/index.css'))
})

app.get('/index.js', (req, res) => {
    res.sendFile(path.resolve('./dist/index.js'))
})

app.post('/send', (req, res) => {
    let formBody = new FormData()

    let message = req.body.message;
    let stickerPackageId = req.body.stickerPackageId;
    let stickerId = req.body.stickerId;

    if (message) {
        if (stickerPackageId && stickerId) {
            formBody.append('stickerPackageId', stickerPackageId);
            formBody.append('stickerId', stickerId);
        }
        formBody.append('message', message);
    } else {
        res.status(400).sendFile(path.resolve('./json/400.json'))
    }


    let headers = Object.assign({
        'Authorization': `Bearer ${token}`,
    }, formBody.getHeaders())


    axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        headers: headers,
        data: formBody
    }).then(respond => {
        
        res.status(200).json(respond.data);

    }).catch(()=>{

        res.status(500).json();

    });

})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})