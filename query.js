

let round=document.querySelector(".round");
let shape=document.querySelector(".shape");
let btn=document.querySelectorAll("button");
// let btn1=document.getElementById("btn1")
btn[0].addEventListener("click",changeColor);

function genarateColor(){
    let color=Math.floor(Math.random()*255);
    return color;
}

function changeColor(){
    let newColor= `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    round.style.backgroundColor = newColor;
}

// function changeColor(){
//     let newColor= `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
//     btn1.style.backgroundColor = newColor;
// }

btn[1].addEventListener("click",changeShape);
let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idx=randomShape();
    shape.id=idx;
}

