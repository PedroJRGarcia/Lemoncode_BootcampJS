//Case 1.- Credit Card Validation
const patternCard = /^(5[0-5]\d{2})(.?\d{4}){3}$/;
const cardValues = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];
cardValues.forEach(value => {
    console.log(`Regex pattern matchs with "${value}" ? `, patternCard.test(value));
});

const patternCard2 = /(\d{4})(.?\d{4})(.?\d{4})(.?\d{4})$/;
cardValues.forEach(value => {
    var index = value.match(patternCard2);
    for(i = 0; i < index.length; i++){
    console.log(`4 Numbers Group "${value}" : `, 
    index[1] + ' & ' + index[2] + ' & ' + index[3] + ' & ' + index[4]);
    }
});