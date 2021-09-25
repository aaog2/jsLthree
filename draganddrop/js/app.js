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
}

// Drag End
function dragend(){
    console.log("drag end is working");

    this.className = "fill";
}

// 25DND