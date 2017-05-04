var playgame=document.querySelector("#play");

var v1=document.querySelector("#v1");
var v2=document.querySelector("#v2");
var v3=document.querySelector("#v3");
var v4=document.querySelector("#v4");
var v5=document.querySelector("#v5");
var v6=document.querySelector("#v6");
var rgb=document.querySelector("#rgb");
var stat=document.querySelector("#stat");


var num1=document.querySelector("#playdiv");

playgame.addEventListener("click", function(){
	v1.style.background="rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")";
	v2.style.background="rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")";
	v3.style.background="rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")";
	v4.style.background="rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")";
	v5.style.background="rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")";
	v6.style.background="rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")";

	var arr=[v1.style.background,v2.style.background,v3.style.background,v4.style.background,v5.style.background,v6.style.background];
	rgb.textContent=arr[Math.floor(Math.random()*6)];
	stat.textContent="-";
});

v1.addEventListener("click", function(){
	if(this.style.background===rgb.textContent){
		v1.style.background=""+rgb.textContent+"";
		v2.style.background=""+rgb.textContent+"";
		v3.style.background=""+rgb.textContent+"";
		v4.style.background=""+rgb.textContent+"";
		v5.style.background=""+rgb.textContent+"";
		v6.style.background=""+rgb.textContent+"";
		stat.textContent="GOOD";

	}
	else{
		this.style.background="#262224";
		stat.textContent="TRY AGAIN!!";
	}




});

v2.addEventListener("click", function(){
	if(this.style.background===rgb.textContent){
		v1.style.background=""+rgb.textContent+"";
		v2.style.background=""+rgb.textContent+"";
		v3.style.background=""+rgb.textContent+"";
		v4.style.background=""+rgb.textContent+"";
		v5.style.background=""+rgb.textContent+"";
		v6.style.background=""+rgb.textContent+"";
		stat.textContent="GOOD";

	}
	else{
		this.style.background="#262224";
		stat.textContent="TRY AGAIN!!";
	}




});

v3.addEventListener("click", function(){
	if(this.style.background===rgb.textContent){
		v1.style.background=""+rgb.textContent+"";
		v2.style.background=""+rgb.textContent+"";
		v3.style.background=""+rgb.textContent+"";
		v4.style.background=""+rgb.textContent+"";
		v5.style.background=""+rgb.textContent+"";
		v6.style.background=""+rgb.textContent+"";
		stat.textContent="GOOD";

	}
	else{
		this.style.background="#262224";
		stat.textContent="TRY AGAIN!!";
	}




});

v4.addEventListener("click", function(){
	if(this.style.background===rgb.textContent){
		v1.style.background=""+rgb.textContent+"";
		v2.style.background=""+rgb.textContent+"";
		v3.style.background=""+rgb.textContent+"";
		v4.style.background=""+rgb.textContent+"";
		v5.style.background=""+rgb.textContent+"";
		v6.style.background=""+rgb.textContent+"";
		stat.textContent="GOOD";

	}
	else{
		this.style.background="#262224";
		stat.textContent="TRY AGAIN!!";
	}




});

v5.addEventListener("click", function(){
	if(this.style.background===rgb.textContent){
		v1.style.background=""+rgb.textContent+"";
		v2.style.background=""+rgb.textContent+"";
		v3.style.background=""+rgb.textContent+"";
		v4.style.background=""+rgb.textContent+"";
		v5.style.background=""+rgb.textContent+"";
		v6.style.background=""+rgb.textContent+"";
		stat.textContent="GOOD";

	}
	else{
		this.style.background="#262224";
		stat.textContent="TRY AGAIN!!";
	}




});

v6.addEventListener("click", function(){
	if(this.style.background===rgb.textContent){
		v1.style.background=""+rgb.textContent+"";
		v2.style.background=""+rgb.textContent+"";
		v3.style.background=""+rgb.textContent+"";
		v4.style.background=""+rgb.textContent+"";
		v5.style.background=""+rgb.textContent+"";
		v6.style.background=""+rgb.textContent+"";
		stat.textContent="GOOD";


	}
	else{
		this.style.background="#262224";
		stat.textContent="TRY AGAIN!!";
	}




});

