const product = { count: 15, price: 13.55, type: "food"};

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function getVat(product) {
let vat;
switch(product.type){
    case "book": vat = 0.04; break;
    case "food": vat = 0.10; break;
    default: vat = 0.21; break;}
    return vat; }

console.log("Total VAT is  ", getTotalVat(product));