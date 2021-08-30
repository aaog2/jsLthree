// UI
const display = document.querySelector('.display');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

let time;

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

console.log(milliseconds);

// Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

// Start Timer
function starttimer(){
    // console.log("start timer");
    if(time !== null){
        clearInterval(time);
    }

    time = setInterval(displaytimer,10);
}

// Pause Timer
function pausetimer(){
    // console.log("pause timer");
    clearInterval(time);
}

// Reset Timer
function resettimer(){
    // console.log("reset timer");
    clearInterval(time);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    display.textContent = '00 : 00 : 00 : 000';
}

// Display Timer
function displaytimer(){
    milliseconds += 10;
    // console.log(milliseconds);

    if(milliseconds === 1000){
        milliseconds = 0;
        seconds += 1;
        // console.log(seconds);
    }

    if(seconds === 60){
        seconds = 0;
        minutes += 1;
    }

    if(minutes === 60){
        minutes = 0;
        hours ++;
    }

    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;
    let mili = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds : milliseconds;

    display.textContent = `${h} : ${m} : ${s} : ${mili}`;

}

