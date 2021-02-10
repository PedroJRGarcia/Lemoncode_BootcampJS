var a = () => document.getElementById("a").value;
var total = 0;
var totalResult = document.getElementById("total");
var select = 'plus';
var selectString;

var resultPlus = () => {
    selectString = 'plus';
    result();
}
var resultMinus = () => {
    selectString = 'minus';
    result();
}
var resultMulti = () => {
    selectString = 'multi';
    result();
}
var resultDiv = () => {
    selectString = 'div';
    result();
}

var result = () => {
    switch (select){
        case 'plus': 
            total += parseInt(a());
            break;
        case 'minus': 
            total -= parseInt(a());
            break;
        case 'multi': 
            total *= parseInt(a());
            break;
        case 'div': 
            total /= parseInt(a());
            break;
    }
    select = selectString;
    cleanInput();
}

cleanInput = () => document.getElementById("a").value = "";

function submit(){
    selectString = "";
    result();
    totalResult.innerHTML = total;
}

document.getElementById("plusButton").addEventListener("click", resultPlus);
document.getElementById("minusButton").addEventListener("click", resultMinus);
document.getElementById("multiButton").addEventListener("click", resultMulti);
document.getElementById("divButton").addEventListener("click", resultDiv);
document.getElementById("equalButton").addEventListener("click", submit);