
var modal = document.getElementById("signInBox");
var btn = document.getElementById("signNav");
var btnNest = document.getElementById("nestSign");
var closeBtn = document.getElementById("close");

btn.onclick = function(){
	modal.style.display = "block";
}

btnNest.onclick = function(){
	modal.style.display = "block";
}

closeBtn.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}