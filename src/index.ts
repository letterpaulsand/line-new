
let message: any = document.getElementById('message')
let stickerPackageId: any = document.getElementById('sticker-package-id')
let stickerId: any = document.getElementById('sticker-id')
let send: any = document.getElementById('send');



interface Post {
    message?: string,
    stickerPackageId?: number,
    stickerId?: number
}

send.addEventListener('click', () => {
    let messageValue: string = message.value;
    let stickerPackageIdValue: number = stickerPackageId.value;
    let stickerIdValue: number = stickerId.value;

    let obj: Post = {}

    if (messageValue) {
        alert('ok')
    } else {
        alert('You have to type something!')
    }

    console.log(obj);
    

    fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `message=${messageValue}&stickerId=${stickerIdValue}&stickerPackageId=${stickerPackageIdValue}`
    })

    console.log(messageValue, stickerPackageIdValue, stickerIdValue);
})
