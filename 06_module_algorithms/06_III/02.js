var arr = [{
    value: 200,
    qty: 1
    },{ 
    value: 100,
    qty: 0
    },{ 
    value: 50,
    qty: 2
    },{ 
    value: 20,
    qty: 15
    },{
    value: 5,
    qty: 7
    },{
    value: 0.50,
    qty: 26
    },{ 
    value: 0.10,
    qty: 11
    },{
    value: 0.01,
    qty: 20}];
var arr2 = [];
var total = document.getElementById("total");
var given = document.getElementById("given");

var getMessage = (getChange, moneyType, moneyValue) => {
    var message = "";
    return getChange === 1 ?
    message = getChange + " " + moneyType + " of " + moneyValue + " €":
    message = getChange + " " + moneyType + "s of " + moneyValue + " €";
}

var getQuantity = (neededQty, availableQty) => availableQty >= neededQty ? neededQty : availableQty;

var epsilon = (x) => Math.round((x + Number.EPSILON) * 100) / 100;

var moneyChange = () => {
    var amount = given.value - total.value;
    var givenMoney = [];
    var i = 0;
        do {
            if (arr[i].value <= amount){
                var rest = epsilon(amount % arr[i].value);
                var neededQty = epsilon((amount - rest)/arr[i].value);
                var availableQty = arr[i].qty;
                var qty = getQuantity(neededQty, availableQty);
                arr[i].value > 4 ? 
                arr2.push(getMessage(qty, "bill", arr[i].value)):
                arr2.push(getMessage(qty, "coin", arr[i].value));
                amount = epsilon(amount - (qty * arr[i].value));
                givenMoney.push("Amount of " + arr[i].value + " € left: " + (arr[i].qty - qty));
                document.getElementById("result").innerHTML = arr2.join('<br>');
                document.getElementById("result").innerHTML += ('<br>') + "Cash register: " + givenMoney.join('<br>');
                cleanInput();
            } else {
                document.getElementById("result").innerHTML = "Not enough money left. Amount: " + amount;
                cleanInput();
            }
            i++;
        } while(amount > 0 && i < arr.length);
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