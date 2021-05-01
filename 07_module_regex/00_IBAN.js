const pattern = /^[A-Z]{2}\d{22}$/;
const value = 'ES6600190020961234567890';
console.log(`Regex pattern matchs with "${value}" ?`, pattern.test(value));

const pattern1 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;
const value1 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
value1.forEach(value =>{
    console.log(`Regex pattern1 matchs with "${value1}" ?`, pattern1.test(value));
});

const pattern2 = /^([A-Z]{2})\d{2}(\s?\d{4}){2}(\s?\d{2})(\d{2})(\s?\d{4}){2}$/;
const value2 = ['ES6600190020961234567890', 'DE66 0019 0020 9712 3456 7890'];
value2.forEach(value => {
    var index = value.match(pattern2);
    for(i = 0; i < index.length; i++){
        console.log(`Country Code + Digit Code "${value}": `, index[1] + index[3]);
    }
});