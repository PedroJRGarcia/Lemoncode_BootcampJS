var a = () => document.getElementById("a").value;
var b = () => document.getElementById("b").value;
var result = document.getElementById("total");

var plus = () => parseInt(a()) + parseInt(b());
var minus = () => a() - b();
var multiplied = () => a() * b();
var divided = () => a() / b();

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




// function showResult() {
//     if ((isNaN)(a())===false || (isNaN)(b())===false){
//         result.innerText = "Error, select two numbers";
//     }else if((isNaN)(a())===false && (isNaN)(b())===false){
//         result.innerText = "Error, select two numbers";
//     }else {
//         showResult = resultTotal;
//     }
// }



// var showTotal = {
//     showPlus: document.getElementById("plusButton").addEventListener("click", resultPlus),
//     showMinus: document.getElementById("minusButton").addEventListener("click", resultMinus),
//     showMultiplied: document.getElementById("multipliedButton").addEventListener("click", resultMultiplied),
//     showDivided: document.getElementById("dividedButton").addEventListener("click", resultDivided),
// }