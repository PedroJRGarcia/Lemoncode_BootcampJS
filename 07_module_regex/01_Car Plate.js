const patternPlate = /^\d{4}[A-Z]{3}$/;
const plates = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
for(i = 0; i < plates.length; i++){
    console.log('Regex pattern matchs with ' + plates[i] + ' ? ', patternPlate.test(plates[i]));
};

const patternInfo = /^(\d{4})(\s|-)?([A-Z]{3})$/;
const plateValues = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
plateValues.forEach(value => {
    var index = value.match(patternInfo);
    for(i = 0; i < index.length; i++){
    console.log(`Number Plate + Letter Plate  "${value}" : `, index[1] + ' & ' + index[3]);
    }
});
