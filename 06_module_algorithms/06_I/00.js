const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
const products = [{
    description: "Eraser",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0, 
    }, {
    description: "Pencil H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
    }, {
    description: "Label tape",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0, 
    }, {
    description: "Plastic bin",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
    }, {
    description: "Square",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
    }, {
    description: "Whiteboard",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
    }, {
    description: "Sharpener",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
    }, {
    description: "ABC Book",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
}, ];

var div = document.getElementById('list');
var ol = document.createElement('ol');
div.appendChild(ol);

var isValidUnit = () => {
    var isValid = true;
    for(item of products){
        if(item.units > 0){
            isValid = false;
        }
    }
    document.getElementById("calculate").disabled = isValid;
    console.log(isValid);
}

isValidUnit();

var printItem = (item) => {
    var li = document.createElement('li');
    var text = document.createTextNode(item.description + ": " + item.price + " €/Unit");
    var input = document.createElement('input');
    input.setAttribute("class", "qty");
    input.setAttribute("id", "idInput");
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    input.addEventListener("change", event => {
        item.units = parseInt(event.target.value);
        isValidUnit();
        isAvailable();
    });
    li.setAttribute("class", "classLi");
    li.appendChild(text);
    li.appendChild(input);
    ol.appendChild(li);
}

for(item of products){
    printItem(item);
}

var isAvailable = () => {
    var available = false;
    for(item of products){
        if(item.units > item.stock){
            available = true;
        }
    }
    document.getElementById("calculate").disabled = available;
}

var productsCost = () => {
    var subtotal = 0;
    var tax = 0;
    for(item of products){
        subtotal += item.units * item.price;
        document.getElementById("subtotal").innerHTML = "Subtotal: " + Math.round((subtotal + Number.EPSILON) * 100) / 100 + " €";
        tax += item.units * (item.tax / 100);
        document.getElementById("tax").innerHTML = "TAX: " + Math.round((tax + Number.EPSILON) * 100) / 100 + " €";
        total = subtotal + tax;
        document.getElementById("total").innerHTML = "Total: " + Math.round((total + Number.EPSILON) * 100) / 100 + " €";
    }
    return total;
}

document.getElementById("calculate").addEventListener("click", productsCost);