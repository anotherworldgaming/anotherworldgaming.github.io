var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('htcvid', {
	loop: 1,
	events: {
		'onReady': onPlayerReady
	}
});
}

function onPlayerReady() {
	player.mute();
	player.playVideo();
	
}

var time;
var flipStart = 0;
var player;
window.onload = function() {
	alert("First time customers get 50% off!");
	header = document.querySelector(".header");
	downArrow = document.getElementById("down");
	htcvid = document.getElementById("htcvid");
	wall = new Image();
	header.style.opacity = "1";
	loadImg();
}

window.onscroll = function() {
	header = document.querySelector(".header");
	downArrow = document.getElementById("down");
	//Scroll down from main header
	if (window.scrollY > 400) {
		htcvid.style.opacity = "1";
		document.querySelector(".infocards:nth-child(2) p").style.opacity = "1";
		downArrow.style.opacity = "0";
		header.style.opacity = "0";
	} 
	//Scroll up from 2nd header
	else if (window.scrollY < 400) { 
		htcvid.style.opacity = "0";
		document.querySelector(".infocards:nth-child(2) p").style.opacity = "0";
		downArrow.style.opacity = "1";
		header.style.opacity = "1";
		
	}
	
	
	//Scroll down from 2nd header
	if (window.scrollY > 1300) {
		
		htcvid.style.opacity = "0";
		document.querySelector(".infocards:nth-child(3)").style.opacity = "1";
		clearTimeout(time);
		if(flipStart === 0) {flipBoard(2); flipStart = 1;}
	} else if (window.scrollY < 1300) {
		document.querySelector(".infocards:nth-child(3)").style.opacity = "0";
	}
	console.log(window.scrollY);
}

var loadImg = function() {
	wall.src="img/back1.jpg";
	wall.onload = function() {
		document.querySelector(".infocards:nth-child(3)").appendChild(wall);
	}
		
}

var flipBoard = function(x) {
	setTimeout(function() {document.querySelector(".infocards:nth-child(3) img").style.opacity = "0";}, 4000);
	setTimeout(function() {wall.onload = function(){document.querySelector(".infocards:nth-child(3) img").src = this.src; }; wall.src = "img/back" + x + ".jpg";}, 5000);
	setTimeout(function() {document.querySelector(".infocards:nth-child(3) img").style.opacity = "1";x++;if(x === 13){x = 1;};flipBoard(x);}, 6000);
}
