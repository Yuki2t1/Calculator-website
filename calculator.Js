const Display=document.getElementById("Display")
const button=document.getElementById("changei")
const bg=document.getElementById("A1")
const bg1=document.getElementById("A2")
const bg2=document.getElementById("A3")
const bg3=document.getElementById("A4")
function appendToDisplay(input){
    Display.value+=input
}
function clearToDisplay(){
    Display.value=''
}

try{
    function calculate(){
        Display.value= eval (Display.value)
    }
}
catch(error){
    Display.value("Invalid Syntax!")
}
function changecolor(color){
    document.body.style.background=color;
}
button.onclick=function(){
    changecolor("linear-gradient(to right,rgb(94, 94, 194),rgb(80, 80, 99))")
}
bg.onclick = function(){
    changecolor("white")
}
bg1.onclick = function(){
    changecolor("gray")
}
bg2.onclick = function(){
    changecolor("yellow")
}
bg3.onclick = function(){
    changecolor("Black")
}
