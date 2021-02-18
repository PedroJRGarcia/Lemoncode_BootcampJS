const shoppingCart = [
    {
        id: 198752,
        name: "Ink DJ27 Colour",
        price: 52.95,
        count: 3,
        premium: true
    }, {
        id: 75621,
        name: "Ticket Printer PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    }, {
        id: 54657,
        name: "Box w Printer's Paper Roll",
        price: 5.95,
        count: 3,
        premium: false
    }, {
        id: 3143,
        name: "Paper Box A4-size 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

for (products of shoppingCart){
    for (prop in products){
    document.getElementById("list").innerHTML += '<li>' + prop + ": " + products[prop] + '</li>';
    document.getElementById("list").innerHTML += prop === "premium" ? '<li class="line">' + "---------------" + '</li>' : "";
    }
}

function remove(productId){  
    for (i = 0; i < shoppingCart.length; i++){
        if(shoppingCart[i].id !== productId){
            // shoppingCart.splice(2,1);
            console.log(shoppingCart[i]);
        }
    }
    return;
}

function handlerRemove(){
    remove(54657);
}

function filter(){
    for (i = 0; i < shoppingCart.length; i++){
        if(shoppingCart[i].premium){
            console.log(shoppingCart[i]);
        }
    }
}

function totalP(){
    console.log(costs());
    return document.getElementById("total").value = Math.round((discount() + Number.EPSILON) * 100) / 100 + " €";
}

document.getElementById("add").addEventListener("click", totalP);
document.getElementById("prime").addEventListener("click", filter);
document.getElementById("remove").addEventListener("click", handlerRemove);

function costs(){
    var shippingCost = 0;
    for (product of shoppingCart){
        if (product && product.premium){
            shippingCost++;
        } 
    }
    return shippingCost === shoppingCart.length ? "WithOut shipping costs" : "With shipping costs";
}

function discount(){
    var cost = 0;
    for (product of shoppingCart){
        cost += product.price * product.count;
    }
    return cost > 100 ? (cost * 0.95) : cost;
}