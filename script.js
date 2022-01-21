"use strict"
const finishline = document.getElementById("finishline")
finishline.style.left = 90 + "%"
const unicorns = 20
let unix = []
let unidivs = []
let thetop = 0
let unipos = 0
for(let i = 0; i < unicorns; i++){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    unix.push(0)
    unidivs.push(document.createElement("div"))
    document.body.appendChild(unidivs[i])
    unidivs[i].className = "unicorn";
    thetop += 4
    unidivs[i].style.top = thetop +"%"
    unidivs[i].style.backgroundColor = randomColor;
}
requestAnimationFrame(moveUnicorns)
function moveUnicorns(){
    for(let i = 0; i < unicorns; i++){
        unidivs[i].style.left = unix[i] + "%"
        unix[i] += Math.random()
        if(unix[i] >= 90){
            alert("Unicorn "+i+" won!")
            for(let i = 0; i < unicorns; i++){
                unix[i] = 0
            }
            break;
        }
    }
    requestAnimationFrame(moveUnicorns)
}
