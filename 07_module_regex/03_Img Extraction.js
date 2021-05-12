const imgString = ['<img id="img" src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>', 
'<img id="img1"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'];
const patternImg = /(https:\/\/.{1,}.(png|jpg|gif))/g;
console.log(patternImg.exec(imgString));