// let button1=document.getElementById("button1");
// let result=button1.innerText;
// screen=document.getElementById("screen");
// screen.innerText-result;


// let button1=document.getElementById("div13");
// let str=button1.innerText;
// let screen=document.getElementById("screen");
// screen.innerText=str;


let buttons =document.querySelectorAll(".div");
let screen=document.getElementById("screen");
let str;

for(let button of buttons)
{
  button.addEventListener("click",(event)=>
  {
    if(event.target.innerText == "C")
    {
      screen.innerText = "";
    }
      
    else if(event.target.innerText == "=")
    {
      screen.innerText=eval(screen.innerText)
    }
    else
    {
      str=event.target.innerText;
      screen.innerText=screen.innerText+str;
    }
  })
}