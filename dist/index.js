"use strict";
let message = document.getElementById('message');
let stickerPackageId = document.getElementById('sticker-package-id');
let stickerId = document.getElementById('sticker-id');
let send = document.getElementById('send');
send.addEventListener('click', () => {
    let messageValue = message.value;
    let stickerPackageIdValue = stickerPackageId.value;
    let stickerIdValue = stickerId.value;
    let obj = {};
    if (messageValue) {
        alert('ok');
    }
    else {
        alert('You have to type something!');
    }
    console.log(obj);
    fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `message=${messageValue}&stickerId=${stickerIdValue}&stickerPackageId=${stickerPackageIdValue}`
    });
    console.log(messageValue, stickerPackageIdValue, stickerIdValue);
});
//# sourceMappingURL=index.js.map