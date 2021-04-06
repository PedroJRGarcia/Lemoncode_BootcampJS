var arr = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
var arr2 = [];
var total = document.getElementById("total");
var given = document.getElementById("given");

var getMessage = (getChange, moneyType, moneyValue) => {
    var message = "";
    if(getChange === 1){
        message = getChange + " " + moneyType + " of " + moneyValue + " €";
    }else {
        message = getChange + " " + moneyType + "s of " + moneyValue + " €";
    }
    return message;
}

var moneyChange = () => {
    var amount = given.value - total.value;
    for(var i = 0; amount > 0 && i < arr.length; i++){
        if(arr[i] <= amount){
            var rest = amount % arr[i];
            getChange = (amount - rest) / arr[i];
            i > 5 ? 
            arr2.push(getMessage(getChange, "coin", arr[i])):
            arr2.push(getMessage(getChange, "bill", arr[i]));
            amount -= getChange * arr[i];
        }
    }
    document.getElementById("result").innerHTML = arr2.join('<br>');
    cleanInput();
};
var cleanInput = () => { 
    total.value = "";
    given.value = "";
};
var cleanTotal = () => {
    result.innerHTML = "";
    arr2.length = 0;
}

document.getElementById("button").addEventListener("click", moneyChange);
document.getElementById("total").addEventListener("click", cleanTotal);