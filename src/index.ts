/**
 * @version 1.0.0
 * @copyright MIT
 * @author paul
 */

// There is the config data below

//--------- CONFIG ---------

// https://line-new.vercel.app
const BACKEND_URL = 'https://line-new.vercel.app'
// DON'T ADD " / " AFTER THE URL

//--------- CONFIG ---------


let message: any = document.getElementById('message')
let stickerPackageId: any = document.getElementById('sticker-package-id')
let stickerId: any = document.getElementById('sticker-id')
let send: any = document.getElementById('send')
let resultBox: any = document.getElementById('result-box')

interface Post {
    message: string,
    stickerPackageId?: number,
    stickerId?: number
}

interface Result{
    status: number,
    message: string,
    source?: string 
}

function changeTheResultBox(data: Result){
    if(data.source){
        resultBox.innerText = `
    {
        "status": ${data.status},
        "message": ${data.message},
        "source": ${data.source}
    }
        `
    }else{
        resultBox.innerText = `
    {
        "status": ${data.status},
        "message": ${data.message}
    }
        `
    }
    
}

send.addEventListener('click', () => {
    let messageValue: string = message.value;
    let stickerPackageIdValue: number = stickerPackageId.value;
    let stickerIdValue: number = stickerId.value;

    let SendToBackend: Post = {
        message: messageValue,
        stickerPackageId: stickerPackageIdValue,
        stickerId: stickerIdValue
    }

    let sendBody = 
        `message=${SendToBackend.message}&
        stickerId=${SendToBackend.stickerId}&
        stickerPackageId=${SendToBackend.stickerPackageId}`;

    if (messageValue) {
        alert('ok')
    } else {
        alert('You have to type something!')
    }
    

    fetch(`${BACKEND_URL}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: sendBody
    }).then(res=>{
        return res.json()
    }).then(data=>{
        changeTheResultBox(data)
        console.log(data);
    })
})
