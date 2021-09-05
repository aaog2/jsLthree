// UI
const checkbox = document.getElementById("toggle"),
    slider = document.getElementById("slider");

const basic = document.querySelector(".basic");
const prof = document.querySelector(".prof");
const master = document.querySelector(".master");

// Event Listener
slider.addEventListener("click",()=>{
    // console.log("hey");

    if(!checkbox.checked){
        // console.log("i am check");
        basic.innerText = 110;
        prof.innerText = 230;
        master.innerText = 350;
    }else {
        // console.log("i am not check");
        [basic.innerText,prof.innerText,master.innerText] = [9.99,19.99,29.99];
    }
});