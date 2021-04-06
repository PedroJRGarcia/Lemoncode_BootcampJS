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
    if(getChange === 1){
        message = getChange + " " + moneyType + " of " + moneyValue + " €";
    }else {
        message = getChange + " " + moneyType + "s of " + moneyValue + " €";
    }
    return message;
}

var getQuantity = (neededQty, availableQty) => {
    if(availableQty >= neededQty){
        return neededQty;
    } else {
        return availableQty;
    }
};

var epsilon = (x) => Math.round((x + Number.EPSILON) * 100) / 100;

var moneyChange = () => {
    var amount = given.value - total.value;
    var givenMoney = [];
    if(amount > 0) {
        for(change of arr){
            if(change.value <= amount){
                var rest = epsilon(amount % change.value);
                var neededQty = epsilon((amount - rest)/change.value);
                var availableQty = change.qty;
                var qty = getQuantity(neededQty, availableQty);
                change.value > 4 ? 
                arr2.push(getMessage(qty, "bill", change.value)):
                arr2.push(getMessage(qty, "coin", change.value));
                amount = epsilon(amount - (qty * change.value));
                givenMoney.push("Amount of " + change.value + " € left: " + (change.qty - qty));
            }
        } 
        if (amount < 0.01) {
            document.getElementById("result").innerHTML = arr2.join('<br>');
            document.getElementById("result").innerHTML += ('<br>') + "Cash register: " + givenMoney.join('<br>');
            cleanInput();
        } else {
            document.getElementById("result").innerHTML = "Not enough money left. Amount: " + amount;
            cleanInput();
        }
    } else {
        cleanInput();
    }
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