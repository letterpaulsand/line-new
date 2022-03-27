"use strict";
let message = document.getElementById('message');
let stickerPackageId = document.getElementById('sticker-package-id');
let stickerId = document.getElementById('sticker-id');
let send = document.getElementById('send');
send.addEventListener('click', () => {
    let messageValue = message.value;
    let stickerPackageIdValue = stickerPackageId.value;
    let stickerIdValue = stickerId.value;
    fetch('http://127.0.0.1:3000', {
        method: 'POST',
        headers: {}
    });
    // console.log(messageValue, stickerPackageIdValue, stickerIdValue);
});
//# sourceMappingURL=index.js.map