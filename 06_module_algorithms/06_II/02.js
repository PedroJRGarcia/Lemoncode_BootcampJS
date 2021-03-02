var randomPick = (n, max, min) => {
    var result = [];
    for(let i = 0; i < n; i++){
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        result.includes(random) ? n += 1 : result.push(random);
    }
    return result;
}
console.log(randomPick(10, 60, 20));