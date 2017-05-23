var burgerBtn = document.getElementsByClassName("menu-icon")[0];
var burgerIcon = document.getElementsByClassName("material-icons")[0];
var nestLink = document.getElementsByClassName("nest-link");
var burgerDrop = document.getElementById("burgerDrop");
var nestDrop = document.getElementById("nestDrop");
var womenNest = document.getElementById("womenNest");

burgerBtn.onclick = function(){
	burgerDrop.style.display = "block";
	burgerDrop.style.width = "200px";
	burgerDrop.style.right = 0;
}

nestDrop.onclick = function(){
	burgerDrop.style.display = "block";
	womenNest.style.display="block";
	womenNest.style.right = "200px";
	womenNest.style.top = 0;
}


burgerDrop.onmouseleave =function(){
	burgerDrop.style.display = "none";
	womenNest.style.display="none";
}
	/*	
}
window.onclick = function(event){
	if(burgerDrop.style.display =="block"){		
		if(!(event.target == burgerIcon || event.target== nestLink)){
			console.log(event.target);
			burgerDrop.style.display = "none";
			womenNest.style.display="none";
		}
	}else{
		
	}
	
}*/