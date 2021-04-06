var workHours = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

var result = [];
for(a of myTeam){
    console.log("Availability of " + a.name);
    for(var i = 0; i < a.availability.length; i++){
        var random = Math.round(Math.random()) % 2 === 0;
        a.availability[i] = random;
        if(a.availability[i]){
            console.log("   " + workHours[i] + " Yes");
            result.push(i);
        }else {
            console.log("   " + workHours[i] + " No");
        }
    }
}

var totalMembers = [];
var getSchedule = () => {
    for(var i = 0; i < workHours.length; i++){
        totalMembers = result.filter(element => element === i);
        if(totalMembers.length === 4){
            return workHours[i];
        }
    }
} 
var hour = getSchedule();
if(totalMembers.length === 4){
    console.log("The team can meet at " + hour);
}else {
    console.log("The team cannot meet");
}