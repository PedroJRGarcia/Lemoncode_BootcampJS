const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
const mediumPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/; 
const passwordValues = ['Amediumpass0', 'strong$Pass7', 'lowpass'];
passwordValues.forEach(value => {
    console.log(`Strong Pattern matchs with "${value}" ? `, strongPass.test(value));
    console.log(`medium pattern matchs with "${value}" ? `, mediumPass.test(value));
});

const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
const urlValues = ['www.lemoncode.net', 'https://www.lemoncode.net', 'lemoncode.net'];
urlValues.forEach(value => {
    console.log(`Regex pattern matchs with "${value}" : `, urlRegex.test(value));
});

const patternHex = /^#+([a-f0-9]{6}|[a-f0-9]{3})$/i;
const hexValues = ['#FF0000', '#33C', '#0000ff', 'FFFFFF'];
hexValues.forEach(value => {
    console.log(`Regex pattern matchs with "${value}" : `, patternHex.test(value));
});