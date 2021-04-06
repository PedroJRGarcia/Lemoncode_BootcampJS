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

var decryptLetter = letter => {
    var letterIndex = searchIndex(alphabet2, letter);
    var decryptedLetter = alphabet1[letterIndex];
    return decryptedLetter;
}

var messageEncrypted = text => {
    var text = document.getElementById("text1").value;
    var textLowercase = text.toLowerCase();
    var result = "";
    for(letter of textLowercase){
        result = result + encryptLetter(letter);
    }
    return document.getElementById("text2").value = result;
}

var messageDecrypted = text => {
    var text = document.getElementById("text2").value;
    var textLowercase = text.toLowerCase();
    var result = "";
    for(letter of textLowercase){
        result = result + decryptLetter(letter);
    }
    return document.getElementById("text1").value = result;
}

var cleanInputs = () => {
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
}

document.getElementById("encrypt").addEventListener("click", messageEncrypted);
document.getElementById("decrypt").addEventListener("click", messageDecrypted);
document.getElementById("remove").addEventListener("click", cleanInputs);