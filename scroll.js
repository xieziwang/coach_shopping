
		var header = document.getElementsByTagName("header")[0];
		var bigLogo = document.getElementById("bigLogo");
		var smallLogo = document.getElementById("smallLogo");

		window.onscroll = function(){navFix()};

		function navFix(){
			if(document.body.scrollTop>55){
				header.style.position ="fixed";
				bigLogo.style.display="none";
				smallLogo.style.opacity=1;
				smallLogo.style.marginLeft= "5px";
			}else if(document.body.scrollTop < 55 && window.innerWidth>750){
				header.style.position = "static";
				bigLogo.style.display="block";
				smallLogo.style.opacity=0;
				smallLogo.style.marginLeft= "25px";
			}

		}
