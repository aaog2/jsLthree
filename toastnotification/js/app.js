// UI
const button = document.getElementById("button");
const toasts = document.getElementById('toasts');

const message = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
]


// Add EventListener
// button.addEventListener('click',()=>createnotification());
// button.addEventListener('click',()=>createnotification('Can\'t access!'));
button.addEventListener('click',()=>createnotification('Can\'t access!',"danger"));

// function createnotification(){
//     // console.log("hey");
//     const notifi = document.createElement("div");
//     notifi.classList.add("toast");
//     notifi.innerText = getrandommessage();
//     console.log(notifi);
//
//     toasts.appendChild(notifi);
//
//     setTimeout(()=>{
//         notifi.remove();
//     },3000);
//
// }

function createnotification(message,type){
    // console.log("hey");
    const notifi = document.createElement("div");
    notifi.classList.add("toast");
    notifi.classList.add(type ? type : info);
    notifi.innerText = message ? message : getrandommessage();
    console.log(notifi);

    toasts.appendChild(notifi);

    setTimeout(()=>{
        notifi.remove();
    },3000);

}

function getrandommessage(){
    return message[Math.floor(Math.random()*message.length)];
}

// console.log(getrandommessage());

// 5TN WDFXXXX