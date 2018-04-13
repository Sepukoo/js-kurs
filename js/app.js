/* var heading = document.querySelector('h1');
heading.textContent = "header lolz" */

 var shit = document.querySelector('h1')
var customHeader = "Something";
shit.textContent = customHeader; 

/* camelCase

"''" 

 (varibales)
var

let
es6
const ost = "pop"; */

var number1 = 2.5;
var number2 = 3;
var text = "fancy";
var myList = ["one", "two", "three"]
var myObject = {};


function multyplyBytwo(n1, n2){
    var val = n2 + n1;
    return val * 2;
}

function addText(){
   var el = document.getElementById("textChange")
   if (el.innerHTML === "rofl"){
       el.innerHTML = null ;
   } 
   else {
       el.innerHTML = "rofl"
   }
}

/* function addIdTwoDiv(idName){
    var el = document.getElementById(idName)
    var elClass = el.className;
    elClass = "blue";
   // return elClass; //
    console.log(el)
} */

function multyplyByTwelve(c1){
    var val = c1
    return val * 12;
}