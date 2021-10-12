// UI
const picdiv = document.querySelector(".fill");
const emptyes = document.querySelectorAll(".empty");

// console.log(emptyes);

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);

// Drag Start
function dragstart(){
    console.log("drag start is working");

    // += append
    this.className += " hold";

    setTimeout(()=>{
        this.className="invisible";
    },0);

}

// console.log(emptyes);

// emptyes.forEach(emptye=>{
//     // console.log(emptye);
//     emptye.addEventListener("dragover",dragover);
//     emptye.addEventListener("dragenter",dragenter);
//     emptye.addEventListener("dragleave",dragleave);
//     emptye.addEventListener("drop",dragdrop);
// })


// ES6 .can looping object5-specific iterator value
for(const emptye of emptyes){
    // console.log(emptye);

    emptye.addEventListener("dragover",dragover);
    emptye.addEventListener("dragenter",dragenter);
    emptye.addEventListener("dragleave",dragleave);
    emptye.addEventListener("drop",dragdrop);
}

// =>numerable properties name of objects
// for(const empty in emptyes){
//     console.log(empty);
// }


// Drag End
function dragend(){
    // console.log("drag end is working");
    this.className = "fill";
}


// drag in empty box

function dragover(e){
    // console.log("dragover");
    e.preventDefault();
}


function dragenter(e){
    // console.log("dragenter");
    e.preventDefault();

    this.className += " hovered";
}

function dragleave(e){
    // console.log("dragleave");
    e.preventDefault();

    this.className = "empty";
}

function dragdrop(e){
    // console.log("dragdrop");
    // e.preventDefault(); pay lal ya ma pay lal ya

    this.className = "empty";
    this.appendChild(picdiv);
}

// 25DND