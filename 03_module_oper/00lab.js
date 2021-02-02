const product = { count: "3", price: "12.55", type: "clothes"};

let productotal = product.count * product.price >= 0 ? product.count * product.price : 0;

let vat;
switch(product.type){
    case "book": 
    vat = 4% console.log((productotal * 0.04) + productotal); break;
    case "food": 
    vat = 10% console.log((productotal * 0.10) + productotal); break;
    default: 
    vat = 21% console.log((productotal * 0.21) + productotal); break;
}
