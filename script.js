document.getElementById('demo').innerHTML = 'new text';
document.getElementById('demo').id = "demo2";
document.getElementById('demo2').style.color = "red";
document.getElementById('demo2').outerHTML = "<button>something to press</button>";

function myFun() {
    alert("WARNING ALERT");
}
myFun();

function darkMode() {
    document.getElementById("pagestyle").setAttribute("href", "./style-dark.css");
}

var a = 10;     //CAN be redefined
let b = 20;;
const c = 30;    // cannot be changed but must be defined

console.log(a+b+c);
