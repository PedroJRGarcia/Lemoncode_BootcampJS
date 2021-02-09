var a = () => document.getElementById("a").value;
var b = () => document.getElementById("b").value;
var result = document.getElementById("total");

var plus = () => parseInt(a()) + parseInt(b());
var minus = () => parseInt(a()) - parseInt(b());
var multiplied = () => parseInt(a()) * parseInt(b());
var divided = () => parseInt(a()) / parseInt(b());

resultPlus = () => {
    result.innerText = a() !== "" && b() !== "" ? plus() : "Error";
} 
resultMinus = () => {
    result.innerText = a() !== "" && b() !== "" ? minus() : "Error";
}
resultMultiplied = () => {
    result.innerText = a() !== "" && b() !== "" ? multiplied() : "Error";
}
resultDivided = () => {
    result.innerText = a() !== "" && b() !== "" ? divided() : "Error";
}

document.getElementById("plusButton").addEventListener("click", resultPlus); 
document.getElementById("minusButton").addEventListener("click", resultMinus);
document.getElementById("multipliedButton").addEventListener("click", resultMultiplied);
document.getElementById("dividedButton").addEventListener("click", resultDivided);