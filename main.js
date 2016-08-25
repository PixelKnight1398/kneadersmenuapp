var currentScreen = 0;
var rotation = "portrait";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rotationInterval = setInterval(function(){
	if(window.innerHeight < window.innerWidth){
		rotation = "landscape";
		if(document.getElementById("appLayout").href != "layout-land.css"){
			document.getElementById("appLayout").href = "layout-land.css";
			switch(currentScreen){
				case 1:
					if(document.getElementById("sandwichNavBarOther").style.display == "" || document.getElementById("sandwichNavBarOther").style.display == "none"){
						document.getElementById("sandwichNavBarOther").style.display = "block";
						document.getElementById("meatSandwichContainer").style.left = "100%";
						document.getElementById("vegetableSandwichContainer").style.left = "100%";
						document.getElementById("miscSandwichContainer").style.left = "100%";
					}
				break;
				case 2:
					if(document.getElementById("saladNavBarOther").style.display == "" || document.getElementById("saladNavBarOther").style.display == "none"){
						document.getElementById("saladNavBarOther").style.display = "block";
						document.getElementById("meatSaladContainer").style.left = "100%";
						document.getElementById("toppingSaladContainer").style.left = "100%";
					}
				break;
				case 3:
					if(document.getElementById("smoothieNavBarOther").style.display == "" || document.getElementById("smoothieNavBarOther").style.display == "none"){
						document.getElementById("smoothieNavBarOther").style.display = "block";
						document.getElementById("fruitSmoothieContainer").style.left = "100%";
					}
				break;
				default:
				//do nothing
				break;
			}
		}
	}
	else{
		rotation = "portrait";
		
		if(document.getElementById("appLayout").href != "layout.css"){
			document.getElementById("appLayout").href = "layout.css";
			switch(currentScreen){
				case 1:
					if(document.getElementById("sandwichNavBarOther").style.display == "" || document.getElementById("sandwichNavBarOther").style.display == "block"){
						document.getElementById("sandwichNavBarOther").style.display = "none";
						document.getElementById("meatSandwichContainer").style.left = "-90%";
						document.getElementById("vegetableSandwichContainer").style.left = "-90%";
						document.getElementById("miscSandwichContainer").style.left = "-90%";
					}
				break;
				case 2:
					if(document.getElementById("saladNavBarOther").style.display == "" || document.getElementById("saladNavBarOther").style.display == "block"){
						document.getElementById("saladNavBarOther").style.display = "none";
						document.getElementById("meatSaladContainer").style.left = "-90%";
						document.getElementById("toppingSaladContainer").style.left = "-90%";
					}
				break;
				case 3:
					if(document.getElementById("smoothieNavBarOther").style.display == "" || document.getElementById("smoothieNavBarOther").style.display == "block"){
						document.getElementById("smoothieNavBarOther").style.display = "none";
						document.getElementById("fruitSmoothieContainer").style.left = "-90%";
					}
				break;
				default:
				//do nothing
				break;
			}
		}
	}
	
}, 500);

window.onscroll = function(){
	document.body.scrollLeft = 0;
	document.body.scrollTop = 0;
}

var main = function(){
	if(window.innerHeight < window.innerWidth){
		document.getElementById("appLayout").href = "layout-land.css";
		rotation = "landscape";
	}
	else{
		document.getElementById("appLayout").href = "layout.css";
		rotation = "portrait";
	}
}

main();

var showScreen = function(screen){
	foodIncrement = 0;
	$(document).ready(function(){
		$("#menuScreenContainer").animate({
			left: '-100%'
		}, 400, "swing", function(){
			$("#menuScreenContainer").hide();
		});
	});
	switch(screen){
		case 1:
			currentScreen = 1;
			document.getElementById("sandwichWorkspace").style.display = "block";
			$(document).ready(function(){
				$("#sandwichScreenContainer").show();
				$("#sandwichBar").show();
				$("#sandwichTrash").show();
			});
			changeFoodItem();
		break;
		case 2:
			document.getElementById("saladWorkspace").style.display = "block";
			currentScreen = 2;
			$(document).ready(function(){
				$("#saladScreenContainer").show();
				$("#saladBar").show();
				$("#saladTrash").show();
			});
			changeFoodItem();
		break;
		case 3:
			document.getElementById("smoothieWorkspace").style.display = "block";
			currentScreen = 3;
			$(document).ready(function(){
				$("#smoothieScreenContainer").show();
				$("#smoothieBar").show();
				$("#smoothieTrash").show();
			});
			changeFoodItem();
		break;
		default:
		alert("Page failed to load, please refresh");
		break;
	}
	switch(currentScreen){
		case 1:
			centerBoundingRect = document.getElementById("sandwichWorkspace").getBoundingClientRect();
		break;
		case 2:
			centerBoundingRect = document.getElementById("saladWorkspace").getBoundingClientRect();
		break;
		case 3:
			centerBoundingRect = document.getElementById("smoothieWorkspace").getBoundingClientRect();
		break;
	}
}

var hideScreen = function(screen){
	currentScreen = 0;
	$(document).ready(function(){
		$("#menuScreenContainer").show();
		$("#menuScreenContainer").animate({
			left: '0%'
		}, 400, "swing", function(){
			switch(screen){
				case 1:
					document.getElementById("sandwichWorkspace").style.display = "none";
					$("#sandwichScreenContainer").hide();
				break;
				case 2:
					document.getElementById("saladWorkspace").style.display = "none";
					$("#saladScreenContainer").hide();
				break;
				case 3:
					document.getElementById("smoothieWorkspace").style.display = "none";
					$("#smoothieScreenContainer").hide();
				break;
				default:
					alert("Failed to animate, please refresh");
				break;
			}
		});
	});
}

var showIngredients = function(container){
	switch(currentScreen){
		case 1:
		document.getElementById("sandwichWorkspace").style.display = "none";
			$(document).ready(function(){
			switch(container){
				case 1:
					$("#breadSandwichContainer").show();
					$("#breadSandwichContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 2:
					$("#sauceSandwichContainer").show();
					$("#sauceSandwichContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 3:
					$("#cheeseSandwichContainer").show();
					$("#cheeseSandwichContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 4:
					switch(rotation){
						case "portrait":
							$("#meatSandwichContainer").show();
							$("#meatSandwichContainer").animate({
								left: '0%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
						case "landscape":
							$("#meatSandwichContainer").show();
							$("#meatSandwichContainer").animate({
								left: '30%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
					}
				break;
				case 5:
					switch(rotation){
						case "portrait":
							$("#vegetableSandwichContainer").show();
							$("#vegetableSandwichContainer").animate({
								left: '0%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
						case "landscape":
							$("#vegetableSandwichContainer").show();
							$("#vegetableSandwichContainer").animate({
								left: '30%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
					}
				break;
				case 6:
					switch(rotation){
						case "portrait":
							$("#miscSandwichContainer").show();
							$("#miscSandwichContainer").animate({
								left: '0%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
						case "landscape":
							$("#miscSandwichContainer").show();
							$("#miscSandwichContainer").animate({
								left: '30%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
					}
				break;
			}
			});
		break;
		case 2:
			document.getElementById("saladWorkspace").style.display = "none";
			$(document).ready(function(){
			switch(container){
				case 1:
					$("#lettuceSaladContainer").show();
					$("#lettuceSaladContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 2:
					$("#dressingSaladContainer").show();
					$("#dressingSaladContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 3:
					$("#cheeseSaladContainer").show();
					$("#cheeseSaladContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 4:
					switch(rotation){
						case "portrait":
							$("#meatSaladContainer").show();
							$("#meatSaladContainer").animate({
								left: '0%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
						case "landscape":
							$("#meatSaladContainer").show();
							$("#meatSaladContainer").animate({
								left: '30%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
					}
				break;
				case 5:
					switch(rotation){
						case "portrait":
							$("#toppingSaladContainer").show();
							$("#toppingSaladContainer").animate({
								left: '0%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
						case "landscape":
							$("#toppingSaladContainer").show();
							$("#toppingSaladContainer").animate({
								left: '30%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
					}
				break;
			}
			});
		break;
		case 3:
			document.getElementById("smoothieWorkspace").style.display = "none";
			$(document).ready(function(){
			switch(container){
				case 1:
					$("#nameSmoothieContainer").show();
					$("#nameSmoothieContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 2:
					$("#juiceSmoothieContainer").show();
					$("#juiceSmoothieContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 3:
					$("#icecreamSmoothieContainer").show();
					$("#icecreamSmoothieContainer").animate({
						left: '0%'
					}, 400, "swing", function(){
						//do nothing
					});
				break;
				case 4:
					switch(rotation){
						case "portrait":
							$("#fruitSmoothieContainer").show();
							$("#fruitSmoothieContainer").animate({
								left: '0%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
						case "landscape":
							$("#fruitSmoothieContainer").show();
							$("#fruitSmoothieContainer").animate({
								left: '30%'
							}, 400, "swing", function(){
								//do nothing
							});
						break;
					}
				break;
			}
			});
		break;
		default:
		//do nothing
		break;
	}
}

var hideIngredients = function(container){
	switch(currentScreen){
		case 1:
			document.getElementById("sandwichWorkspace").style.display = "block";
			$(document).ready(function(){
			switch(container){
				case 1:
					$("#breadSandwichContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#breadSandwichContainer").hide();
					});
				break;
				case 2:
					$("#sauceSandwichContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#sauceSandwichContainer").hide();
					});
				break;
				case 3:
					$("#cheeseSandwichContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#cheeseSandwichContainer").hide();
					});
				break;
				case 4:
					switch(rotation){
						case "portrait":
							$("#meatSandwichContainer").animate({
								left: '-90%'
							}, 400, "swing", function(){
								$("#meatSandwichContainer").show();
							});
						break;
						case "landscape":
							$("#meatSandwichContainer").animate({
								left: '100%'
							}, 400, "swing", function(){
								$("#meatSandwichContainer").show();
							});
						break;
					}
				break;
				case 5:
					switch(rotation){
						case "portrait":
							$("#vegetableSandwichContainer").animate({
								left: '-90%'
							}, 400, "swing", function(){
								$("#vegetableSandwichContainer").show();
							});
						break;
						case "landscape":
							$("#vegetableSandwichContainer").animate({
								left: '100%'
							}, 400, "swing", function(){
								$("#vegetableSandwichContainer").show();
							});
						break;
					}
				break;
				case 6:
					switch(rotation){
						case "portrait":
							$("#miscSandwichContainer").animate({
								left: '-90%'
							}, 400, "swing", function(){
								$("#miscSandwichContainer").show();
							});
						break;
						case "landscape":
							$("#miscSandwichContainer").animate({
								left: '100%'
							}, 400, "swing", function(){
								$("#miscSandwichContainer").show();
							});
						break;
					}
				break;
			}
			});
		break;
		case 2:
			document.getElementById("saladWorkspace").style.display = "block";
			$(document).ready(function(){
			switch(container){
				case 1:
					$("#lettuceSaladContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#lettuceSaladContainer").hide();
					});
				break;
				case 2:
					$("#dressingSaladContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#dressingSaladContainer").hide();
					});
				break;
				case 3:
					$("#cheeseSaladContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#cheeseSaladContainer").hide();
					});
				break;
				case 4:
					switch(rotation){
						case "portrait":
							$("#meatSaladContainer").animate({
								left: '-90%'
							}, 400, "swing", function(){
								$("#meatSaladContainer").show();
							});
						break;
						case "landscape":
							$("#meatSaladContainer").animate({
								left: '100%'
							}, 400, "swing", function(){
								$("#meatSaladContainer").show();
							});
						break;
					}
				break;
				case 5:
					switch(rotation){
						case "portrait":
							$("#toppingSaladContainer").animate({
								left: '-90%'
							}, 400, "swing", function(){
								$("#toppingSaladContainer").show();
							});
						break;
						case "landscape":
							$("#toppingSaladContainer").animate({
								left: '100%'
							}, 400, "swing", function(){
								$("#toppingSaladContainer").show();
							});
						break;
					}
				break;
			}
			});
		break;
		case 3:
			document.getElementById("smoothieWorkspace").style.display = "block";
			$(document).ready(function(){
			switch(container){
				case 1:
					$("#nameSmoothieContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#nameSmoothieContainer").hide();
					});
				break;
				case 2:
					$("#juiceSmoothieContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#juiceSmoothieContainer").hide();
					});
				break;
				case 3:
					$("#icecreamSmoothieContainer").animate({
						left: '-90%'
					}, 400, "swing", function(){
						$("#icecreamSmoothieContainer").hide();
					});
				break;
				case 4:
					switch(rotation){
						case "portrait":
							$("#fruitSmoothieContainer").animate({
								left: '-90%'
							}, 400, "swing", function(){
								$("#fruitSmoothieContainer").show();
							});
						break;
						case "landscape":
							$("#fruitSmoothieContainer").animate({
								left: '100%'
							}, 400, "swing", function(){
								$("#fruitSmoothieContainer").show();
							});
						break;
					}
				break;
			}
			});
		break;
		default:
		//do nothing
		break;
	}
}

var toggleTutorial = function(t){
	if(t == 1){
		document.getElementById("tutorialScreen").style.display = "block";
	}
	else{
		document.getElementById("tutorialScreen").style.display = "none";
	}
}