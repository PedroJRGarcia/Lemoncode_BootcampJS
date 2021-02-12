var result = document.getElementById("total");
var total = 0;

var room = () => {
    var select1 = document.getElementById("roomSelect").value;
    if(select1 === "standard"){
        return 100;
    }else if(select1 === "junior"){
        return 120;
    }else if(select1 === "suite"){
        return 150;
    };
    return 0;
}

var roomSpa = () => document.getElementById("spa").checked ? 20 : 0;

var roomSize = (rate) => {
    var select2 = document.getElementById("sizeSelect").value;
    if(select2 === "individual"){
        return (rate * 0.75);
    }else if(select2 === "double"){
        return (rate * 1);
    }else if(select2 === "triple"){
        return (rate * 1.25);
    };
    return 0;
}

var nights = () => {
    var night = document.getElementById("nights").value;
    return night > 0 ? night : 0;
}

function parkingPlace (){
    var parking = document.getElementById("parking").value;
    return parking > 0 ? (parking * 10) : 0;
}

function submit(){
    var rate = room() + roomSpa();
    total = (roomSize(rate) * nights()) + parkingPlace();
    document.getElementById("total").value = total + " €";
}

document.getElementById("calculate").addEventListener("click", submit);