const product = { count: "3", price: "12.55", type: "clothes"};

let productotal = product.count * product.price > 0 ? product.count * product.price : 0;

let vat;
switch(product.type){
    case "book": 
    vat = productotal * 0.04; break;
    case "food": 
    vat = productotal * 0.10; break;
    default: 
    vat = productotal * 0.21; break;
}

console.log("Total to pay = ", vat + productotal, " €");

