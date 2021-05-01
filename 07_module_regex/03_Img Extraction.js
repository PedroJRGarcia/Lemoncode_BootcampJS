const patternImg = /(imgsrc="\.jpg")|(imgsrc="\.png")/g;
const imgValues = [document.getElementById("img")];
console.log(patternImg.exec(imgValues));