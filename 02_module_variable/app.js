var hoteles = {
    Roca: {
        name: "Roca",
        location: "Palma de Mallorca",
        img: "https://caprocat.com/wp-content/uploads/2019/09/album-cap-rocat-mallorca-centinel-terrace-sunset.jpg",
    },
    Arenas: {
        name: "Arenas",
        location: "Almería",
        img: "https://cf.bstatic.com/images/hotel/max1024x768/201/201728068.jpg",
    },
    Negril: {
        name: "Negril",
        location: "Jamaica",
        img: "https://www.beaches.com/blog/content/images/2019/11/Beaches-Negril-Seven-Mile-Beach-Aerial3.jpg",
    },
}

var hotelSelection = prompt("Which Hotel do you want to select? Roca, Arenas or Negril?");

document.getElementById("hotelSelect").innerHTML = "Hotel " + hoteles[hotelSelection].name;
document.getElementById("location").innerHTML = "Located in " + hoteles[hotelSelection]["location"];
document.getElementById("hotelImg").src = hoteles[hotelSelection].img;

var stars = {
    one: "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    two: "<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    three: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
    four: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
    five: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>",
}
var hotelRating = prompt("How many stars the hotel deserve? one to five");

document.getElementById("rating").innerHTML = stars[hotelRating];


var anonymous = confirm("Do you want your review to be anonymous?");

document.getElementById("hotelReview").checked = anonymous;




