var alphabet1 = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var alphabet2 = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

var searchIndex = (alphabet, letter) => {
    for(i = 0; i < alphabet.length; i++){
        if(alphabet[i] === letter) return i;
    }
    return -1;
}

var encryptLetter = letter => {
    var letterIndex = searchIndex(alphabet1, letter);
    var encryptedLetter = alphabet2[letterIndex];
    return encryptedLetter;
}

var messageLowercase = text => {
    var text = document.getElementById("text1").value;
    var textLowercase = text.toLowerCase();
    var result = "";
    for(letter of textLowercase){
        result = result + encryptLetter(letter);
    }
    return document.getElementById("text2").value = result;
}

document.getElementById("encrypt").addEventListener("click", messageLowercase);
document.getElementById("decrypt").addEventListener("click", messageLowercase);