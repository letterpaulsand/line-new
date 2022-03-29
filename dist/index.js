"use strict";
/**
 * @version 1.0.0
 * @copyright MIT
 * @author paul
 */
// There is the config data below
//--------- CONFIG ---------
// https://line-new.vercel.app
const BACKEND_URL = 'https://line-new.vercel.app';
// DON'T ADD " / " AFTER THE URL
//--------- CONFIG ---------
let message = document.getElementById('message');
let stickerPackageId = document.getElementById('sticker-package-id');
let stickerId = document.getElementById('sticker-id');
let send = document.getElementById('send');
let resultBox = document.getElementById('result-box');
function changeTheResultBox(data) {
    if (data.source) {
        resultBox.innerText = `
    {
        "status": ${data.status},
        "message": ${data.message},
        "source": ${data.source}
    }
        `;
    }
    else {
        resultBox.innerText = `
    {
        "status": ${data.status},
        "message": ${data.message}
    }
        `;
    }
}
send.addEventListener('click', () => {
    let messageValue = message.value;
    let stickerPackageIdValue = stickerPackageId.value;
    let stickerIdValue = stickerId.value;
    let SendToBackend = {
        message: messageValue,
        stickerPackageId: stickerPackageIdValue,
        stickerId: stickerIdValue
    };
    let sendBody = `message=${SendToBackend.message}&
        stickerId=${SendToBackend.stickerId}&
        stickerPackageId=${SendToBackend.stickerPackageId}`;
    if (messageValue) {
        alert('ok');
    }
    else {
        alert('You have to type something!');
    }
    fetch(`${BACKEND_URL}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: sendBody
    }).then(res => {
        return res.json();
    }).then(data => {
        changeTheResultBox(data);
        console.log(data);
    });
});
//# sourceMappingURL=index.js.map