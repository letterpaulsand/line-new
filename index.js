const express = require('express')
const FormData = require('form-data');
const axios = require('axios');
const path = require('path')
const app = express()

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

    formBody.append('message', req.body.message);
    formBody.append('stickerPackageId', req.body.stickerPackageId);
    formBody.append('stickerId', req.body.stickerId);

    let headers = Object.assign({
        'Authorization': 'Bearer eAYxFZtU7fT0DfRVuGiNMXhoozXB4nucOenl4p2s1S4',
        'Content-Type': 'multipart/form-data'
    },formBody.getHeaders())

    axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        headers: headers,
        data: formBody
    }).then(res=>{
        console.log(res);
    })


    // fetch('https://notify-api.line.me/api/notify', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Bearer eAYxFZtU7fT0DfRVuGiNMXhoozXB4nucOenl4p2s1S4',
    //         'Content-Type': 'multipart/form-data;'
    //     },
    //     body: formBody
    // }).then(res=>{
    //     return res.json()
    // }).then(data=>{
    //     console.log(data);
    // })

})

app.listen(3000, () => {
    console.log('ok');
})