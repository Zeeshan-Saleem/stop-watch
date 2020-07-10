// var count = 0;
// var interval;

// function timer(){
//     count ++
//     console.log(count)
// }

// interval =  setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// }, 5000)

var min = 0;
var sec = 0;
var msec = 0;
var min_heading = document.getElementById("min")
var sec_heading = document.getElementById("sec")
var msec_heading = document.getElementById("msec")
var interval;

function timer(){
    msec ++
    msec_heading.innerHTML = msec
    if (msec >=100){
        sec ++
        sec_heading.innerHTML = sec
        msec = 0
    }
    else if(sec>=60){
        min ++
        min_heading.innerHTML = min
        sec =   0
    }
}
function start(){
    interval = setInterval(timer,10)
    document.getElementById('abc').disabled=true
}


function Pause(){
    clearInterval(interval)
    document.getElementById('abc').disabled=false
}


function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    min_heading.innerHTML = min;
    sec_heading.innerHTML = sec;
    msec_heading.innerHTML = msec;
    Pause();
    document.getElementById('abc').disabled=false
}




