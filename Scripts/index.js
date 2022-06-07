//definations
let body = document.getElementById("body");
let lofi = document.getElementById("lofi")
let def = document.getElementById("default");
let synth = document.getElementById("synth")
let abstract = document.getElementById("abstract")
let tex = document.getElementById("Text")
let Avatar = document.getElementById("Avatar")
let source = document.getElementById("source")

abstract.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/abstract.png)"
    tex.style.color = "pink"
    tex.style.textShadow = "0px 0px 10px pink"
    Avatar.style.border = "3px solid pink"
    Avatar.style.boxShadow = "0px 0px 10px pink"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "pink"
    source.style.textShadow = "0px 0px 10px pink"
}
synth.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/synth.jpg)"
    tex.style.color = "violet";
    tex.style.textShadow = "0px 0px 10px purple,0px 0px 20px pink"
    Avatar.style.border = "3px solid violet"
    Avatar.style.boxShadow = "0px 0px 10px purple, 0px 0px 20px pink"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "violet"
    source.style.textShadow = "0px 0px 10px violet"
}

def.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/default.png)"
    tex.style.color = "aqua"
    tex.style.textShadow = "0px 0px 10px aqua"
    Avatar.style.border = "3px solid aqua"
    Avatar.style.boxShadow = "0px 0px 10px aqua"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "aqua"
    source.style.textShadow = "0px 0px 10px aqua"
}
//events
lofi.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/lofi.png)"
    tex.style.color = "orange"
    tex.style.textShadow = "0px 0px 10px orange"
    Avatar.style.border = "3px solid orange"
    Avatar.style.boxShadow = "0px 0px 10px orange"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "orange"
    source.style.textShadow = "0px 0px 10px orange"
}
//functions
function time(){
const timer = document.getElementsByClassName("title");
let Year = new Date().getUTCFullYear();
let Month = new Date().getUTCMonth();
let Day = new Date().getUTCDate();
let date = `${Day}/${Month}/${Year}`
timer.textContent = date
}

time();
