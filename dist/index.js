"use strict";
/**
 * @version 1.0.0
 * @copyright MIT
 * @author paul
 */
// There is the config data below
//--------- CONFIG ---------
const BACKEND_URL = 'https://line-new.vercel.app';
// DON'T ADD " / " AFTER THE URL
//--------- CONFIG ---------
let message = document.getElementById('message');
let stickerPackageId = document.getElementById('sticker-package-id');
let stickerId = document.getElementById('sticker-id');
let send = document.getElementById('send');
function changeTheResultBox(data) {
}
send.addEventListener('click', () => {
    let messageValue = message.value;
    let stickerPackageIdValue = stickerPackageId.value;
    let stickerIdValue = stickerId.value;
    // let SendToBackend: Post = {
    //     message: ''
    // }
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
        body: `message=${messageValue}&stickerId=${stickerIdValue}&stickerPackageId=${stickerPackageIdValue}`
    }).then(res => {
        return res.json();
    }).then(data => {
        // changeTheResultBox(data)
        console.log(data);
    });
});
//# sourceMappingURL=index.js.map