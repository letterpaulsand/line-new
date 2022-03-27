let message: any = document.getElementById('message')
let stickerPackageId: any = document.getElementById('sticker-package-id')
let stickerId: any = document.getElementById('sticker-id')
let send: any = document.getElementById('send');

send.addEventListener('click', ()=>{
    let messageValue: string = message.value;
    let stickerPackageIdValue: string = stickerPackageId.value;
    let stickerIdValue: string = stickerId.value;

    fetch('http://127.0.0.1:3000',{
        method: 'POST',
        headers: {
            
        }
    })

    // console.log(messageValue, stickerPackageIdValue, stickerIdValue);
})
