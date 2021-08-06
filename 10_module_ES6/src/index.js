//1. hasId
const userA = {
    id: 12,
    name: "Peter",
};
const userB = {
    number: 13,
    name: "Charles",
};

const hasId = ({ id }) => id ? true : false;
console.log(hasId(userA));
console.log(hasId(userB));

//2. head

const colours = ["red", "green", "blue", "black"];
const head = ([ first ]) => first;
console.log(head(colours));

//3. tail

const tail = ([, ...allButFirst]) => allButFirst; 
console.log(tail(colours));

//4. swapFirstToLast

const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(colours));

//5. excludeId

const excludeId = ({id, ...rest}) => rest;
console.log(excludeId(userA));

//6. wordsStartingWithA

const wordsA = [ "sometimes", "never", "always", "all" ];
const wordsStartingWithA = array => array.filter(array => array[0] === "a");  
console.log(wordsStartingWithA(wordsA));

//7. concat

const strings = ["hello", "bye", "tomorrow", "today"];
const concat = ([...strings]) => strings.join(" | ");
console.log(concat(strings));

//8. multArray

const numbers = [23, 10, 3, 5, 8, 11];
const multArray = ([...numbers], x) => numbers.map(number => number * x);
console.log(multArray(numbers, 2));

//9. calcMult

const calcMult = ([...numbers]) => numbers.reduce((acc, mult) => acc * mult);
console.log(calcMult(numbers));

//10. swapFirstSecond

const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log(swapFirstSecond(numbers));

//11. firstEqual

const firstEqual = ([...strings], x) => strings.map(string => string[0] === x);
console.log(firstEqual(strings, "t"));

//12. longest

const arrays = [[1, 1],[0, 0, 0], [3], [2, 2, 2, 2]];
const longest = ([...arrayMaster]) => 
    arrayMaster.reduce((a, b) => (a.length > b.length ? a : b), []);
console.log(longest(arrays));

//13. searchInStringV1

const str = "rodrigo,rodriguez";
const searchInStringV1 = (char, [...string]) => 
    string.reduce((a, c) => c === char ? ++a : a , 0);
console.log(searchInStringV1("r", str));

//14. searchInStringV2

const searchInStringV2 = (char, [...string]) => string.filter(c => c === char);
console.log(searchInStringV2("r", str));

//15. sortCharacters

const sortCharacters = ([...string]) => string.sort();
console.log(sortCharacters(str));

//16. shout

const multStr = ["one", "two", "three", "fourteen"];
const shout = ([...strings]) => strings.join("!").toUpperCase();
console.log(shout(multStr));

//17. Lista de la Compra

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A. IVA 21%

const getIva = (iva, items) => items.map(item => ({...item, IVA: item.price * iva}));
console.log(getIva(0.21, shoppingCart));

//B. + a - unidades

const shoppingCartCopy = [...shoppingCart];
const sortItems = items => items.sort((a, b) => b.units - a.units);
console.log(sortItems(shoppingCartCopy));

//C. subtotal Droguería

const subtotalDrugstore = items => items
    .filter(item => item.category === "Droguería")
    .reduce((acc, item) =>  acc + (item.price * item.units), 0);
console.log(subtotalDrugstore(shoppingCart));

//D. Total Price

const getTotal = (iva, items) => items
    .map(item => ({...item, 
    Product: item.product + " -> Total price: " + ((item.price * iva) * item.units) + " €"}))
    .sort((a, b) => a.category.localeCompare(b.category));

console.log(getTotal(1.21, shoppingCart)); 


