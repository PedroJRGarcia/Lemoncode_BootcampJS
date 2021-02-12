var a = () => document.getElementById("a").value;
var b = () => document.getElementById("b").value;
var result = document.getElementById("total");

var plus = () => parseInt(a()) + parseInt(b());
var minus = () => parseInt(a()) - parseInt(b());
var multi = () => parseInt(a()) * parseInt(b());
var div = () => parseInt(a()) / parseInt(b());

resultPlus = () => result.innerText = a() !== "" && b() !== "" ? plus() : "Error";
resultMinus = () => result.innerText = a() !== "" && b() !== "" ? minus() : "Error";
resultMulti = () => result.innerText = a() !== "" && b() !== "" ? multi() : "Error";
resultDiv = () => result.innerText = a() !== "" && b() !== "" ? div() : "Error";

document.getElementById("plusButton").addEventListener("click", resultPlus); 
document.getElementById("minusButton").addEventListener("click", resultMinus);
document.getElementById("multiButton").addEventListener("click", resultMulti);
document.getElementById("divButton").addEventListener("click", resultDiv);