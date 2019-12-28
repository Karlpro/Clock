
var min = document.getElementById('min');

setInterval(function () {
	// body...
	var time = new Date();
	min.style.transform = "rotate("+ time.getMinutes()*6 + "deg)";
},1000)
