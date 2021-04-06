var alphabet1 = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var alphabet2 = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

var messageEncrypt = text => {
    var text = document.getElementById("text1").value;
    var textLowercase = text.toLowerCase();
    var result = "";
    for(letter of textLowercase){
        result += alphabet2[alphabet1.indexOf(letter)];
    }
    return document.getElementById("text2").value = result;
}

var messageDecrypt = text => {
    var text = document.getElementById("text2").value;
    var textLowercase = text.toLowerCase();
    var result = "";
    for(letter of textLowercase){
        result += alphabet1[alphabet2.indexOf(letter)];
    }
    return document.getElementById("text1").value = result;
}

document.getElementById("encrypt").addEventListener("click", messageEncrypt);
document.getElementById("decrypt").addEventListener("click", messageDecrypt);