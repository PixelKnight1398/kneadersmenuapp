var idincrement = 0;

function food(type, name, subX, subY){
    this.type = type;
	this.name = name;
	this.xPos = subX;
    this.yPos = subY;
	this.id = idincrement;
}

food.prototype.setXpos = function(xPos){
    this.xPos = xPos;
};

food.prototype.setYpos = function(yPos){
    this.xPos = yPos;
};

var centerBoundingRect;
var trashBoundingRect;
var currentWorkspace;
var cameThrough = false;

var createItem = function(type, name){
	var tempXPos = getRandomInt(0, 100);//getRandomInt(window.innerWidth * 0.2, window.innerWidth - 50);
	var tempYPos = getRandomInt(0, 100);//getRandomInt(0, window.innerHeight - 50);
	if(type == "bread"){
		if(cameThrough){
			tempXPos = window.innerWidth * 0.4;
			tempYPos = window.innerHeight * 0.7;
		}
		else{
			tempXPos = window.innerWidth * 0.4;
			tempYPos = window.innerHeight * 0.1;
		}
	}
	var tempFood = new food(type, name, tempXPos, tempYPos);
	workspaceHandler.push(tempFood);
	var myImage = new Image();
	myImage.id = idincrement;
	idincrement += 1;
	myImage.style.position = "absolute";
	myImage.style.left = tempFood.xPos + "px";
	myImage.style.top = tempFood.yPos + "px";
	switch(rotation){
		case "portrait":
			myImage.style.height = centerBoundingRect.height * 0.2 + "px";
			myImage.style.width = centerBoundingRect.width * 0.4 + "px";
		break;
		case "landscape":
			myImage.style.height = centerBoundingRect.height * 0.25 + "px";
			myImage.style.width = centerBoundingRect.width * 0.175 + "px";
		break;
	}
	myImage.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0]; // reference first touch point for this event
        if(touchobj.clientX >= centerBoundingRect.left + myImage.width/2 && touchobj.clientX <= centerBoundingRect.width + centerBoundingRect.left){
            myImage.style.left = touchobj.clientX - myImage.width + "px";
        }
        myImage.style.top = touchobj.clientY - myImage.height/2 + "px";
		//console.log(myImage.style.top + ", " + touchobj.clientY);
		//console.log(myImage.style.left + ", " + myImage.style.top);
        for(var j = 0; j < workspaceHandler.length; j++){
            if(workspaceHandler[j].id == myImage.id){
                workspaceHandler[j].xPos = myImage.style.left.split("p")[0];
                workspaceHandler[j].yPos = myImage.style.top.split("p")[0];
            }
        }
        e.preventDefault();
    }, false);
    myImage.addEventListener("touchend", function(e){
        var touchobj = e.changedTouches[0];
		switch(currentScreen){
			case 1:
				trashBoundingRect = document.getElementById("sandwichTrash").getBoundingClientRect();
				currentWorkspace = document.getElementById("sandwichWorkspace");
			break;
			case 2:
				trashBoundingRect = document.getElementById("saladTrash").getBoundingClientRect();
				currentWorkspace = document.getElementById("saladWorkspace");
			break;
			case 3:
				trashBoundingRect = document.getElementById("smoothieTrash").getBoundingClientRect();
				currentWorkspace = document.getElementById("smoothieWorkspace");
			break;
		}
        if(touchobj.clientX > trashBoundingRect.left && touchobj.clientX < trashBoundingRect.width){
            if(touchobj.clientY > trashBoundingRect.top && touchobj.clientY < trashBoundingRect.height + trashBoundingRect.top){
                for(var i = 0; i < workspaceHandler.length; i++){
					if(workspaceHandler[i].id == myImage.id){
						workspaceHandler.splice(i, 1);
					}
				}
				currentWorkspace.removeChild(myImage);
            }
        }
        e.preventDefault();
    }, false);
	switch(currentScreen){
		case 1:
			document.getElementById("sandwichWorkspace").appendChild(myImage);
		break;
		case 2:
			document.getElementById("saladWorkspace").appendChild(myImage);
		break;
		case 3:
			document.getElementById("smoothieWorkspace").appendChild(myImage);
		break;
	}
	switch(type){
		case "bread":
			hideIngredients(1);
			switch(name){
				case "French Country":
					myImage.src = "assets/breadsworking_00.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "French Country");
					}
					else{
						cameThrough = false;
					}
				break;
				case "Ciabatta":
					myImage.src = "assets/breadsworking_01.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Ciabatta");
					}
					else{
						myImage.src = "assets/breadsworking_02.png";
						cameThrough = false;
					}
				break;
				case "Baguette":
					myImage.src = "assets/breadsworking_03.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Baguette");
					}
					else{
						myImage.src = "assets/breadsworking_04.png";
						cameThrough = false;
					}
				break;
				case "Rye":
					myImage.src = "assets/breadsworking_05.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Rye");
					}
					else{
						cameThrough = false;
					}
				break;
				case "12 Grain":
					myImage.src = "assets/breadsworking_06.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "12 Grain");
					}
					else{
						cameThrough = false;
					}
				break;
				case "Asiago":
					myImage.src = "assets/breadsworking_07.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Asiago");
					}
					else{
						cameThrough = false;
					}
				break;
				case "100%":
					myImage.src = "assets/breadsworking_08.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "100%");
					}
					else{
						cameThrough = false;
					}
				break;
				case "White":
					myImage.src = "assets/breadsworking_09.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "White");
					}
					else{
						cameThrough = false;
					}
				break;
				case "Wheat":
					myImage.src = "assets/breadsworking_10.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Wheat");
					}
					else{
						cameThrough = false;
					}
				break;
				case "Focaccia":
					myImage.src = "assets/breadsworking_11.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Focaccia");
					}
					else{
						myImage.src = "assets/breadsworking_12.png";
						cameThrough = false;
					}
				break;
				case "Croissant":
					myImage.src = "assets/breadsworking_13.png";
					if(!cameThrough){
						cameThrough = true;
						createItem("bread", "Croissant");
					}
					else{
						myImage.src = "assets/breadsworking_14.png";
						cameThrough = false;
					}
				break;
			}
		break;
		case "sauce":
			myImage.style.height = myImage.style.height.split("p")[0] * 0.65 + "px";
			switch(name){
				case "Kneaders":
					myImage.src = "assets/saucesworking_0.png";
				break;
				case "Ranch":
					myImage.src = "assets/saucesworking_1.png";
				break;
				case "Honey Mustard":
					myImage.src = "assets/saucesworking_2.png";
				break;
				case "Mayonaisse":
					myImage.src = "assets/saucesworking_3.png";
				break;
				case "Cranberry":
					myImage.src = "assets/saucesworking_4.png";
				break;
				case "Pesto":
					myImage.src = "assets/saucesworking_5.png";
				break;
				case "Au jus":
					myImage.src = "assets/saucesworking_6.png";
				break;
				case "Lemon":
					myImage.src = "assets/sauces_07.png";
				break;
				case "Sourcream":
					myImage.src = "assets/saucesworking_7.png";
				break;
				case "Vinegar":
					myImage.src = "assets/sauces_09.png";
				break;
				case "Thousand Island":
					myImage.src = "assets/saucesworking_8.png";
				break;
				case "Lemon Garlic":
					myImage.src = "assets/sauces_11.png";
				break;
			}
		break;
		case "cheese":
			myImage.style.height = myImage.style.height.split("p")[0] * 0.65 + "px";
			switch(name){
				case "Muenster":
					myImage.src = "assets/cheese_0.png";
				break;
				case "Swiss":
					myImage.src = "assets/cheese_1.png";
				break;
				case "Provolone":
					myImage.src = "assets/cheese_2.png";
				break;
				case "Mozzarella":
					myImage.src = "assets/cheese_3.png";
				break;
				case "Ricotta":
					myImage.src = "assets/cheese_4.png";
				break;
				case "Parmesan":
					myImage.src = "assets/cheese_5.png";
				break;
			}
		break;
		case "meat":
			myImage.style.height = myImage.style.height.split("p")[0] * 0.65 + "px";
			switch(name){
				case "Turkey":
					myImage.src = "assets/meatsworking_0.png";
				break;
				case "Beef":
					myImage.src = "assets/meatsworking_1.png";
				break;
				case "Ham":
					myImage.src = "assets/meatsworking_2.png";
				break;
				case "Pastrami":
					myImage.src = "assets/meatsworking_3.png";
				break;
				case "Bacon":
					myImage.src = "assets/meatsworking_4.png";
				break;
				case "Chicken":
					myImage.src = "assets/meatsworking_5.png";
				break;
				case "Tuna":
					myImage.src = "assets/meatsworking_6.png";
				break;
			}
		break;
		case "vegetable":
			myImage.style.height = myImage.style.height.split("p")[0] * 0.65 + "px";
			switch(name){
				case "Lettuce":
					myImage.src = "assets/vegetablesworking_00.png";
				break;
				case "Tomato":
					myImage.src = "assets/vegetablesworking_01.png";
				break;
				case "Onion":
					myImage.src = "assets/vegetablesworking_02.png";
				break;
				case "Avocado":
					myImage.src = "assets/vegetablesworking_03.png";
				break;
				case "Celery":
					myImage.src = "assets/vegetablesworking_04.png";
				break;
				case "Dill":
					myImage.src = "assets/vegetablesworking_05.png";
				break;
				case "Water Chestnuts":
					myImage.src = "assets/vegetablesworking_06.png";
				break;
				case "Green Onion":
					myImage.src = "assets/vegetablesworking_07.png";
				break;
				case "Basil":
					myImage.src = "assets/vegetablesworking_08.png";
				break;
				case "Spinach":
					myImage.src = "assets/vegetablesworking_09.png";
				break;
				case "Artichoke":
					myImage.src = "assets/vegetablesworking_10.png";
				break;
				case "Sourkraut":
					myImage.src = "assets/vegetablesworking_11.png";
				break;
				case "Mushrooms":
					myImage.src = "assets/vegetablesworking_12.png";
				break;
				case "Zucchini":
					myImage.src = "assets/vegetablesworking_13.png";
				break;
				case "Red Pepper":
					myImage.src = "assets/vegetablesworking_14.png";
				break;
				case "Eggplant":
					myImage.src = "assets/vegetablesworking_15.png";
				break;
			}
		break;
		case "misc":
			myImage.style.height = myImage.style.height.split("p")[0] * 0.65 + "px";
			switch(name){
				case "s&p":
					myImage.src = "assets/miscworking_0.png";
				break;
				case "Pecans":
					myImage.src = "assets/miscworking_1.png";
				break;
			}
		break;
		case "lettuce":
		console.log(0);
			switch(name){
				case "Romaine":
				console.log(1);
					myImage.src = "assets/lettuce_0.png";
				break;
				case "Spring Mix":
					myImage.src = "assets/lettuce_1.png";
				break;
				case "Spinach":
					myImage.src = "assets/lettuce_2.png";
				break;
			}
		break;
		case "dressing":
			switch(name){
				case "Blue Cheese":
					myImage.src = "assets/dressing_0.png";
				break;
				case "Poppy":
					myImage.src = "assets/dressing_1.png";
				break;
				case "Ranch":
					myImage.src = "assets/dressing_2.png";
				break;
				case "Raspberry Walnut":
					myImage.src = "assets/dressing_3.png";
				break;
				case "Caesar":
					myImage.src = "assets/dressing_4.png";
				break;
				case "Balsamic":
					myImage.src = "assets/dressing_5.png";
				break;
				case "Cilantro":
					myImage.src = "assets/dressing_6.png";
				break;
				case "BBQ":
					myImage.src = "assets/dressing_7.png";
				break;
			}
		break;
		case "cheeseSalad":
			switch(name){
				case "Feta":
					myImage.src = "assets/cheese_6.png";
				break;
				case "Mozzarella":
					myImage.src = "assets/cheese_3.png";
				break;
				case "Parmesan":
					myImage.src = "assets/cheese_5.png";
				break;
			}
		break;
		case "meatSalad":
			switch(name){
				case "Chicken":
					myImage.src = "assets/meatSalad_0.png";
				break;
				case "Turkey":
					myImage.src = "assets/meatSalad_1.png";
				break;
				case "Bacon":
					myImage.src = "assets/meatSalad_2.png";
				break;
			}
		break;
		case "topping":
			switch(name){
				case "Tomato":
					myImage.src = "assets/topping_00.png";
				break;
				case "Cucumber":
					myImage.src = "assets/topping_19.png";
				break;
				case "Onion":
					myImage.src = "assets/topping_01.png";
				break;
				case "s&p":
					myImage.src = "assets/topping_02.png";
				break;
				case "Mushrooms":
					myImage.src = "assets/topping_03.png";
				break;
				case "Dried Cranberry":
					myImage.src = "assets/topping_04.png";
				break;
				case "Sunflower Seeds":
					myImage.src = "assets/topping_05.png";
				break;
				case "Almonds":
					myImage.src = "assets/topping_06.png";
				break;
				case "Avocado":
					myImage.src = "assets/topping_07.png";
				break;
				case "Raspberry":
					myImage.src = "assets/topping_08.png";
				break;
				case "Strawberry":
					myImage.src = "assets/topping_09.png";
				break;
				case "Blackberry":
					myImage.src = "assets/topping_10.png";
				break;
				case "Blueberry":
					myImage.src = "assets/topping_11.png";
				break;
				case "Croutons":
					myImage.src = "assets/topping_12.png";
				break;
				case "Candied Pecans":
					myImage.src = "assets/topping_13.png";
				break;
				case "Oranges":
					myImage.src = "assets/topping_14.png";
				break;
				case "Cilantro":
					myImage.src = "assets/topping_15.png";
				break;
				case "Black Beans":
					myImage.src = "assets/topping_16.png";
				break;
				case "Corn":
					myImage.src = "assets/topping_17.png";
				break;
				case "Tortilla Strips":
					myImage.src = "assets/topping_18.png";
				break;
			}
		break;
		case "name":
			switch(name){
				case "Mango Tango":
					myImage.src = "assets/name_0.png";
				break;
				case "Going Guava":
					myImage.src = "assets/name_1.png";
				break;
				case "Pink Pina Colada":
					myImage.src = "assets/name_2.png";
				break;
				case "Morning Sunshine":
					myImage.src = "assets/name_3.png";
				break;
				case "Razzleberry":
					myImage.src = "assets/name_4.png";
				break;
				case "No Dairy Berry":
					myImage.src = "assets/name_5.png";
				break;
				case "Blueberry #5":
					myImage.src = "assets/name_6.png";
				break;
				case "Strawberry Tsunami":
					myImage.src = "assets/name_7.png";
				break;
				case "Planet Peaches":
					myImage.src = "assets/name_8.png";
				break;
			}
		break;
		case "juice":
			switch(name){
				case "Peach":
					myImage.src = "assets/juiceworking_0.png";
				break;
				case "Guava":
					myImage.src = "assets/juiceworking_1.png";
				break;
				case "Orange":
					myImage.src = "assets/juiceworking_2.png";
				break;
				case "Apple":
					myImage.src = "assets/juiceworking_3.png";
				break;
				case "Cranberry":
					myImage.src = "assets/juiceworking_4.png";
				break;
			}
		break;
		case "icecream":
			switch(name){
				case "VanYog":
					myImage.src = "assets/icecream_0.png";
				break;
				case "PS":
					myImage.src = "assets/icecream_1.png";
				break;
				case "RaspSher":
					myImage.src = "assets/icecream_2.png";
				break;
			}
		break;
		case "fruit":
			switch(name){
				case "Mango":
					myImage.src = "assets/fruit_0.png";
				break;
				case "Strawberry":
					myImage.src = "assets/fruit_1.png";
				break;
				case "Banana":
					myImage.src = "assets/fruit_2.png";
				break;
				case "CreamofCoconut":
					myImage.src = "assets/fruit_3.png";
				break;
				case "Raspberry":
					myImage.src = "assets/fruit_4.png";
				break;
				case "Blueberry":
					myImage.src = "assets/fruit_5.png";
				break;
				case "Peaches":
					myImage.src = "assets/fruit_6.png";
				break;
			}
		break;
	}
}

var workspaceHandler = [];

var foodIncrement = 0;
var possibleFoods = [
	["Classic", "Ranch", "Ham and Swiss", "Cheese Melt", "TBA", "Club", "CCH", "FD", "Tuna", "CKS", "TCC", "Cafe Croissant", "Chicken Pesto", "Turkey Art", "Rueben", "Harvest"],
	["Chicken Chop", "Turkey Cranberry", "Turkey Feta", "Chicken Alamondo", "TBA Salad", "Berry DeLite", "Chicken Caesar", "Large Green", "Berry Chicken", "Citrus", "Southwest BBQ"],
	["MT/SM", "GG/SM", "PC/SM", "MS/SM", "RZ/SM", "ND/SM", "#5/SM", "TSU/SM", "PP/SM"],
];

var currentFood = "";
var tutorialText = "";

var changeFoodItem = function(clearScreen){
	tutorialText = "";
	switch(currentScreen){
		case 1:
			for(var i = document.getElementById("sandwichWorkspace").children.length - 1; i >= 0; i--){
				document.getElementById("sandwichWorkspace").removeChild(document.getElementById("sandwichWorkspace").children[i]);
			}
			currentFood = possibleFoods[0][foodIncrement];
			document.getElementById("sandwichWorkspace").innerHTML += "<span style = 'color: white; font-size: 48px; position: absolute; top: 0; left: 0;'>Make a " + currentFood + "</span>";
			tutorialText = "To build a sandwich: <br /> <ol><li>Look at the sandwich you need to make, some sandwiches require specific breads, while others don't matter.  You can find " +
			"the specifics to your current sandwich below.</li><li>After picking the bread, you pick the sauce.</li><li>Then the cheese</li><li>Then the meat</li>" + 
			"<li>The vegetables...</li><li>And then misc stuff if you need it, which most likely you do.</li><li>Once you have all the ingredients you have to stack them in the correct order.  The order you select the ingredients is the order that you will stack them from bottom to top.  So Bread, Sauce, Cheese, Meat, and the vegetables</li></ol> Good Luck! =) <br /> <span>Current Sandwich</span><br />";
		break;
		case 2:
			for(var i = document.getElementById("saladWorkspace").children.length - 1; i >= 0; i--){
				document.getElementById("saladWorkspace").removeChild(document.getElementById("saladWorkspace").children[i]);
			}
			currentFood = possibleFoods[1][foodIncrement];
			document.getElementById("saladWorkspace").innerHTML += "<span style = 'color: white; font-size: 48px;'>Make a " + currentFood + "</span>";
			tutorialText = "To build a salad: <br /> <ol><li>Look at the salad you need to make.  You can find " +
			"the specifics to your current salad below.</li><li>After picking the lettuce, you pick the dressing.</li><li>Then the cheese</li><li>Then the meat</li>" + 
			"<li>And finally the toppings.</li><li>Once you have all the ingredients you have to stack them in the correct order.  The order you select the ingredients is the order that you will stack them from bottom to top.  So lettuce, dressing, Cheese, Meat, and the toppings.  However the dressing can go anywhere on the screen.</li></ol> Good Luck! =) <br /> <span>Current Salad</span><br />";
		break;
		case 3:
			for(var i = document.getElementById("smoothieWorkspace").children.length - 1; i >= 0; i--){
				document.getElementById("smoothieWorkspace").removeChild(document.getElementById("smoothieWorkspace").children[i]);
			}
			currentFood = possibleFoods[2][foodIncrement];
			document.getElementById("smoothieWorkspace").innerHTML += "<span style = 'color: white; font-size: 48px;'>Make a " + currentFood + "</span>";
			tutorialText = "To build a smoothie: <br /> <ol><li>Look at the smoothie you need to make.  You can find " +
			"the specifics to your current smoothie below.</li><li>After picking the name, you pick the juice.</li><li>Then the yogurt/sherbet</li>" + 
			"<li>And finally the fruits.</li></ol>As of right now feel free to place the ingredients anywhere. I am still working on the smoothie section to make it more interactable so hang in there I will get it updated asap!  I also apologize for any errors you might encounter as this particular section gave me some issues. >.<  I'll fix it as soon as I can!" +
			" Good Luck! =) <br /> <span>Current Smoothie</span><br />";
		break;
		default:
		//do nothing
		break;
	}
    workspaceHandler = [];
	switch(currentFood){
		case "Classic":
			tutorialText += "<span id = 'currentItemTutorial'>A Classic Sandwich comes with the customers choice of bread so any will work(CHOICE)!  Kneaders Sauce(k), provolone cheese(p), and any choice of meat except chicken or tuna!(T, B, H, P, BLT,VEG) Note veg is just veggies, also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "Ranch":
			tutorialText += "<span id = 'currentItemTutorial'>A Ranch Sandwich comes with the customers choice of bread so any will work(CHOICE)!  Ranch Sauce(r), swiss cheese(sw), and either turkey or beef(TR, BR), also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "Ham and Swiss":
			tutorialText += "<span id = 'currentItemTutorial'>A Ham and Swiss Sandwich comes with the customers choice of bread so any will work(CHOICE)!  Mayo, and Honey Mustard Sauce(m, hm), swiss cheese(sw), and of course ham(h), also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "Cheese Melt":
			tutorialText += "<span id = 'currentItemTutorial'>A Cheese Melt comes with French Country Sourdough bread!  Pesto Butter(pesto), plus provolone and muenster cheese(p, m)";
		break;
		case "TBA":
			tutorialText += "<span id = 'currentItemTutorial'>A Turkey Bacon Avocado comes with Focaccia Bread!  Kneaders Sauce(k), provolone cheese(p), turkey and bacon(t, bac), also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "Club":
			tutorialText += "<span id = 'currentItemTutorial'>A Club comes with French Country Sourdough bread!  Kneaders Sauce(k), provolone cheese(p), turkey, ham, and beef(t,b,h), also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "CCH":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Cheese and Ham comes with Ciabatta Bread!  Mayo and honey mustard(m, hm), swiss cheese(p), chicken and ham(c,h), also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "FD":
			tutorialText += "<span id = 'currentItemTutorial'>A French Dip comes with Baguette Bread!  Au jus sauce(au jus), swiss cheese(sw), beef(b), and S&P(s&p)";
		break;
		case "Tuna":
			tutorialText += "<span id = 'currentItemTutorial'>A Tuna comes with 12 Grain Bread!  The tuna is made with tuna salads that are pre prepped but contain most but not all of these ingredients: lemon and mayo(lemon, m), no cheese(none), Tuna(albacore tuna), also comes with lettuce, celery, onion, dill, and S&P(l, celery, o, dill, S&P)";
		break;
		case "CKS":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Salad Croissant comes with a Croissant! The CKS is made with a pre prepped chicken salad which contains most but not all of these ingredients:  Mayo, Sour Cream, and Vinegar(m, sourcream, vinegar), no cheese(none), chicke(c), also comes with water chestnuts, pecans, green onion, S&P, and Lettuce(water chestnuts, pecans, green onion, S&P, l)";
		break;
		case "TCC":
			tutorialText += "<span id = 'currentItemTutorial'>A Turkey Cranberry Croissant comes with a Croissant!  Cranberry Sauce(cran), swiss cheese(sw), turkey(t), also comes with lettuce and S&P.(L, S&P)";
		break;
		case "Cafe Croissant":
			tutorialText += "<span id = 'currentItemTutorial'>A Cafe Crosisant comes with a Croissant!  Any of the cafe sandwich sauces(k,r,m,hm), any cafe cheese(p, sw), any cafe meat(t,b,h,p,bac,veg,tr,br,hs), also comes with lettuce, tomatoes, onions and S&P.(L, TOM, O, S&P)";
		break;
		case "Chicken Pesto":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Pesto comes with French Country Sourdough Bread!  pesto butter(pesto), provolone cheese(p), chicken(c), also comes with basil, tomatoes, onions and S&P.(basil, TOM, O, S&P)";
		break;
		case "Turkey Art":
			tutorialText += "<span id = 'currentItemTutorial'>A Turkey Artichoke comes with Focaccia Bread!  pesto butter, and mayo(pesto, m), mozzarella cheese(mozz), turkey(t), also comes with spinach, tomatoes, onions, S&P and artichoke hearts.(spinach, TOM, O, S&P, art)";
		break;
		case "Rueben":
			tutorialText += "<span id = 'currentItemTutorial'>A Rueben comes with Rye Bread!  Thousand Island dressing(thousand island), swiss cheese(sw), pastrami(p), also comes with sourkraut, onions and S&P.(sk, O, S&P)";
		break;
		case "Harvest":
			tutorialText += "<span id = 'currentItemTutorial'>A Harvest comes with Ciabatta Bread!  Lemon garlic Sauce(lemon garlic), ricotta and parmesan cheese(ricotta, parm), no meat(none), also comes with mushrooms, zucchini, onions and red pepper, and eggplant.(Mushrooms, zucchini, o, red pepper, eggplant)";
		break;
		case "Chicken Chop":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Chop comes with Romaine Lettuce(rom)!  Blue Cheese dressing(bc), feta cheese(feta), chicken(c), and also comes with tomatoes, cucumbers, onions and S&P.(tom, cuc, O, S&P)";
		break;
		case "Turkey Cranberry":
			tutorialText += "<span id = 'currentItemTutorial'>A Turkey Cranberry comes with Spring Mix(spring)!  Poppy seed dressing(bc), mozzarella cheese(mozz), turkey(t), and also comes with mushrooms, dried cranberries, sunflower seeds, onions and S&P.(mushrooms, dried cran, sunflower, o, S&P)";
		break;
		case "Turkey Feta":
			tutorialText += "<span id = 'currentItemTutorial'>A Turkey Feta comes with Romaine Lettuce(rom)!  Ranch dressing(r), feta cheese(feta), turkey(t), and also comes with tomatoes, cucumbers, onions and S&P.(tom, cuc, O, S&P)";
		break;
		case "Chicken Alamondo":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Alamondo comes with Spring Mix(spring)!  Poppy seed dressing(bc), mozzarella cheese(mozz), chicken and bacon(c, b), and also comes with almonds, onions and S&P.(almonds, O, S&P)";
		break;
		case "TBA Salad":
			tutorialText += "<span id = 'currentItemTutorial'>A Turkey Bacon Avocado comes with Romaine Lettuce(rom)!  Ranch dressing(r), no cheese(none), turkey and bacon(t, b), and also comes with cucumbers, onions, avocado and S&P.(cuc, O, avo, S&P)";
		break;
		case "Berry DeLite":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Chop comes with Romaine lettuce and Spinach(rom, spinach)!  Raspberry Walnut dressing(rz walnut), feta cheese(feta), no meat(none), and also comes with raspberry, strawberry, blackberry, blueberry and onions.(rasp, straw, black, blue, o)";
		break;
		case "Chicken Caesar":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Caesar comes with Romaine Lettuce(rom)!  Caesar dressing(caesar), parmesan cheese(parm), chicken(c), and also comes with onions, croutons and S&P.(O, crou, S&P)";
		break;
		case "Large Green":
			tutorialText += "<span id = 'currentItemTutorial'>A Large green salad comes with Spring Mix(spring)!  Choice dressing so any dressing counts =)(Choice), mozzarella cheese(mozz), no meat(none), and also comes with tomatoes, cucumbers, onions, avocado and S&P.(tom, cuc, O, avo, S&P)";
		break;
		case "Berry Chicken":
			tutorialText += "<span id = 'currentItemTutorial'>A Berry Chicken comes with Spinach(spinach)!  Raspberry Walnut Vinaigrette(rz walnut), feta cheese(feta), chicken(c), and also comes with raspberry, candied pecans, onions and S&P.(rasp, candied pecans, O, S&P)";
		break;
		case "Citrus":
			tutorialText += "<span id = 'currentItemTutorial'>A Chicken Chop comes with Spring Mix(spring)!  Balsamic dressing(bals), parmesan cheese(parm), chicken(c), and also comes with oranges, dried cranberries, sunflower seeds, onions and S&P.(orange, dried cran, sunflower, O, S&P)";
		break;
		case "Southwest BBQ":
			tutorialText += "<span id = 'currentItemTutorial'>A Southwest BBQ comes with Romaine Lettuce(rom)!  Cotija Cilantro dressing and BBQ sauce(cotija cil, bbq), no cheese(none), chicken(c), and also comes with cilantro, tomato, avocado, black beans, corn, onions, tortilla strips and S&P.(cilantro, tom, avo, black beans, corn, o, tortilla strips, S&P)";
		break;
		case "MT/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Mango Tango smoothie comes with: Peach Juice(peach), 2 scoops of pineapple sherbet(2 ps), and also gets 2 mango scoops(2 mango)";
		break;
		case "GG/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Going Guava smoothie comes with: Guava Juice(Guava), 2 scoops of pineapple sherbet(2 ps), and also gets 1 mango, and 1 strawberry scoop, plus 1/3 of a banana(1 mango, 1 straw, 3 banana)";
		break;
		case "PC/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Pink Pina Colada smoothie comes with: Guava Juice(Guava), 2 scoops of vanilla yogurt(2 van yog), and also gets 2 strawberry scoops, plus 1/3 of a banana(2 straw, 3 banana)";
		break;
		case "MS/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Morning Sunshine smoothie comes with: Orange Juice(orange), 2 scoops of vanilla yogurt(2 van yog), and also gets 2 strawberry scoops, plus 1/3 of a banana(2 straw, 3 banana)";
		break;
		case "RZ/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Razzleberry smoothie comes with: Apple Juice(apple), 1 scoop of vanilla yogurt, and 2 scoops of raspberry sherbet(1 van yog, 2 rasp sher), and also gets 2 raspberry scoops, plus 1/3 of a banana(2 rasp, 3 banana)";
		break;
		case "ND/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A No Dairy Berry smoothie comes with: Guava Juice(Guava), no yogurt or sherbet, and also gets 1 peach scoop, 2 strawberry scoops, plus 1/3 of a banana(1 peach, 2 straw, 3 banana)";
		break;
		case "#5/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Blueberry #5 smoothie comes with: Peach Juice(peach), 1 scoop of vanilla yogurt, and 2 scoops of raspberry sherbet(1 van yog, 2 rasp sher), and also gets 1 blueberry scoop, 1 raspberry scoop, plus 1/3 of a banana(1 blue, 1 rasp, 3 banana)";
		break;
		case "TSU/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Strawberry Tsunami smoothie comes with: Cranberry Juice(cran), 2 scoops of pineapple sherbet(2 ps), and also gets 1 strawberry scoop, and 1 peach scoop(1 straw, 1 peach)";
		break;
		case "PP/SM":
			tutorialText += "<span id = 'currentItemTutorial'>A Planet Peaches smoothie comes with: Peach Juice(peach), 2 scoops of vanilla yogurt(2 van yog), and also gets 1 peach scoop, and 1 mango scoop(1 peach, 1 mango)";
		break;
	}
	document.getElementById("tutorialScreen").innerHTML = "";
	document.getElementById("tutorialScreen").innerHTML += '<div id = "tutorialClose" onmousedown = "toggleTutorial(0)"></div>';
	document.getElementById("tutorialScreen").innerHTML += tutorialText;
	foodIncrement += 1;
};


var toggleError = function(t, message){
	if(t == 1){
		document.getElementById("zError").innerHTML = message;
		document.getElementById("errorMessage").style.display = "block";
	}
	else{
		document.getElementById("zError").innerHTML = "";
		document.getElementById("errorMessage").style.display = "none";
	}
}

var checkSandwichIngredientAmounts = function(s, c, m, v, misc, ts, tc, tm, tv, tmisc){
	if(ts < s){
		toggleError(1, "You haven't placed enough sauces on the screen for this sandwich.");
		return false;
	}
	else if(ts > s){
		toggleError(1, "You have a bit too many sauces placed on the screen for this sandwich.  You only need " + s + ".");
		return false;
	}
	if(tc < c){
		toggleError(1, "You haven't placed enough cheeses on the screen for this sandwich.");
		return false;
	}
	else if(tc > c){
		toggleError(1, "You have a bit too many cheeses placed on the screen for this sandwich.");
		return false;
	}
	if(tm < m){
		toggleError(1, "You haven't placed enough meats on the screen for this sandwich.");
		return false;
	}
	else if(tm > m){
		toggleError(1, "You have a bit too many meats placed on the screen for this sandwich.");
		return false;
	}
	if(tv < v){
		toggleError(1, "You haven't placed enough vegetables on the screen for this sandwich.");
		return false;
	}
	else if(tv > v){
		toggleError(1, "You have a bit too many vegetables placed on the screen for this sandwich.");
		return false;
	}
	if(tmisc < misc){
		toggleError(1, "You haven't placed enough miscellaneous stuff on the screen for this sandwich.  Try adding salt and pepper. =)");
		return false;
	}
	else if(tmisc > misc){
		toggleError(1, "You have a bit too much miscellaneous stuff placed on the screen for this sandwich.");
		return false;
	}
	return true;
}

var checkSaladIngredientAmounts = function(l, d, c, m, t, tl, td, tc, tm, tt){
	if(tl < l){
		toggleError(1, "You haven't placed enough lettuce on the screen for this salad.");
		return false;
	}
	else if(tl > l){
		toggleError(1, "You have a bit too much lettuce placed on the screen for this salad.  You only need " + s + ".");
		return false;
	}
	if(td < d){
		toggleError(1, "You haven't placed enough dressings on the screen for this salad.");
		return false;
	}
	else if(td > d){
		toggleError(1, "You have a bit too many dressings placed on the screen for this salad.");
		return false;
	}
	if(tc < c){
		toggleError(1, "You haven't placed enough cheeses on the screen for this salad.");
		return false;
	}
	else if(tc > c){
		toggleError(1, "You have a bit too many cheeses placed on the screen for this salad.");
		return false;
	}
	if(tm < m){
		toggleError(1, "You haven't placed enough meats on the screen for this salad.");
		return false;
	}
	else if(tm > m){
		toggleError(1, "You have a bit too many meats placed on the screen for this salad.");
		return false;
	}
	if(tt < t){
		toggleError(1, "You haven't placed enough toppings on the screen for this salad.  Try adding salt and pepper. =)");
		return false;
	}
	else if(tt > t){
		toggleError(1, "You have a bit too many toppings placed on the screen for this salad.");
		return false;
	}
	return true;
}

var checkSmoothieIngredientAmounts = function(i, f, n, j, ti, tf, tn, tj){
	if(ti < i){
		toggleError(1, "You haven't placed enough icecream on the screen for this smoothie.");
		return false;
	}
	else if(ti > i){
		toggleError(1, "You have a bit too much icecream placed on the screen for this smoothie.  You only need " + s + ".");
		return false;
	}
	if(tf < f){
		toggleError(1, "You haven't placed enough fruit on the screen for this smoothie.");
		return false;
	}
	else if(tf > f){
		toggleError(1, "You have a bit too much fruit placed on the screen for this smoothie.");
		return false;
	}
	if(tn < n){
		toggleError(1, "You haven't placed enough names on the screen for this smoothie.");
		return false;
	}
	else if(tn > n){
		toggleError(1, "You have a bit too many names placed on the screen for this smoothie.  You only need " + s + ".");
		return false;
	}
	if(tj < j){
		toggleError(1, "You haven't placed enough juice on the screen for this smoothie.");
		return false;
	}
	else if(tj > j){
		toggleError(1, "You have a bit too much juice placed on the screen for this smoothie.");
		return false;
	}
	return true;
}

var ci = function( type, ingredient ){
	switch(currentScreen){
		case 1:
			switch(type){
				case "bread":
				console.log("bread");
					var breadOne = 0;
					var breadTwo = 0;
					if(Array.isArray(ingredient)){
				console.log("array");
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "bread"){
									if(breadOne == 0){
										breadOne = workspaceHandler[k].name;
									}
									if(breadTwo == 0){
										breadTwo = workspaceHandler[k].name;
									}
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your cheeses is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						if(breadOne == breadTwo){
							return true;
						}
						else{
							toggleError(1, "Your breads don't match!  Make sure that they are matching and try again. =)");
							return false;
						}
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "bread"){
								if(breadOne == 0){
									breadOne = workspaceHandler[i].name;
								}
								if(breadTwo == 0){
									breadTwo = workspaceHandler[i].name;
								}
							}
						}
						if(breadOne.name == breadTwo.name){
							if(ingredient == "CHOICE"){
								return true;
							}
							else{
								if(breadOne.name == ingredient){
									return true;
								}
							}
						}
						else{
							return false;
						}
					}
				break;
				case "sauce":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "sauce"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your sauces is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "sauce"){
								if(workspaceHandler[i].name == ingredient){
									console.log(workspaceHandler[i].name + ", " + ingredient);
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "cheese":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "cheese"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your cheeses is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "cheese"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "meat":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "meat"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your meats is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "meat"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "vegetable":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "vegetable"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your vegetables is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "vegetable"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "misc":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "misc"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your miscellaneous items is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "misc"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
			}
		break;
		case 2:
			switch(type){
				case "lettuce":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "lettuce"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your lettuces is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "lettuce"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "dressing":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "dressing"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your dressings is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "dressing"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "cheeseSalad":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "cheeseSalad"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your cheeses is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "cheeseSalad"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "meatSalad":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "meatSalad"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your meats is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "meatSalad"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
				case "topping":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "topping"){
									if(ingredient.indexOf(workspaceHandler[k].name) != -1){
										//continue
									}
									else{
										toggleError(1, "I'm afraid one of your toppings is wrong. =(  Change it up and try again.");
										return false;
									}
								}
							}
						}
						return true;
					}
					else{
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "topping"){
								if(workspaceHandler[i].name == ingredient){
									return true;
								}
							}
						}
						return false;
					}
				break;
			}
		break;
		case 3:
			switch(type){
				case "name":
					for(i = 0; i < workspaceHandler.length; i++){
						if(workspaceHandler[i].type == "name"){
							if(workspaceHandler[i].name == ingredient){
								return true;
							}
						}
					}
					return false;
				break;
				case "juice":
					for(i = 0; i < workspaceHandler.length; i++){
						if(workspaceHandler[i].type == "juice"){
							if(workspaceHandler[i].name == ingredient){
								return true;
							}
						}
					}
					return false;
				break;
				case "icecream":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							var tempps = 0;
							var temprs = 0;
							var tempvanyog = 0;
							var tempAmount = parseInt(ingredient[i].split(" ")[0]);
							var tempName = ingredient[i].split(" ")[1];
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "icecream"){
									if(workspaceHandler[k].name == tempName){
										switch(workspaceHandler[k].name){
											case "VanYog":
												tempvanyog += 1;
											break;
											case "PS":
												tempps += 1;
											break;
											case "RaspSher":
												temprs += 1;
											break;
										}
									}
								}
							}
							switch(tempName){
								case "VanYog":
									if(tempAmount == tempvanyog){
										//do nothing
									}
									else{
										toggleError(1, "It looks like you don't have the right amount of vanilla yogurt.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "PS":
									if(tempAmount == tempps){
										//do nothing
									}
									else{
										toggleError(1, "It looks like you don't have the right amount of pineapple sherbet.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "RaspSher":
									if(tempAmount == temprs){
										//do nothing
									}
									else{
										toggleError(1, "It looks like you don't have the right amount of raspberry sherbet.  Click the question mark to see and try again =)");
										return false;
									}
								break;
							}
						}
						return true;
					}
					else{
						var tempps = 0;
						var temprs = 0;
						var tempvanyog = 0;
						var tempAmount = parseInt(ingredient.split(" ")[0]);
						var tempName = ingredient.split(" ")[1];
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "icecream"){
								if(workspaceHandler[i].name == tempName){
									switch(workspaceHandler[i].name){
										case "VanYog":
											tempvanyog += 1;
										break;
										case "PS":
											tempps += 1;
										break;
										case "RaspSher":
											temprs += 1;
										break;
									}
								}
							}
						}
						switch(tempName){
							case "VanYog":
								if(tempAmount == tempvanyog){
									return true;
								}
								else{
									toggleError(1, "It looks like you don't have the right amount of vanilla yogurt.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "PS":
								if(tempAmount == tempps){
									return true;
								}
								else{
									toggleError(1, "It looks like you don't have the right amount of pineapple sherbet.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "RaspSher":
								if(tempAmount == temprs){
									return true;
								}
								else{
									toggleError(1, "It looks like you don't have the right amount of raspberry sherbet.  Click the question mark to see and try again =)");
									return false;
								}
							break;
						}
					}
				break;
				case "fruit":
					if(Array.isArray(ingredient)){
						for(i = 0; i < ingredient.length; i++){
							var tempMango = 0;
							var tempStrawberry = 0;
							var tempBanana = 0;
							var tempCreamOfCoconut = 0;
							var tempRaspberry = 0;
							var tempBlueberry = 0;
							var tempPeaches = 0;
							var tempAmount = parseInt(ingredient[i].split(" ")[0]);
							var tempName = ingredient[i].split(" ")[1];
							for(k = 0; k < workspaceHandler.length; k++){
								if(workspaceHandler[k].type == "fruit"){
									if(workspaceHandler[k].name == tempName){
										switch(workspaceHandler[k].name){
											case "Mango":
												tempMango += 1;
											break;
											case "Strawberry":
												tempStrawberry += 1;
											break;
											case "Banana":
												tempBanana += 1;
											break;
											case "CreamofCoconut":
												tempCreamOfCoconut += 1;
											break;
											case "Raspberry":
												tempRaspberry += 1;
											break;
											case "Blueberry":
												tempBlueberry += 1;
											break;
											case "Peaches":
												tempPeaches += 1;
											break;
										}
									}
								}
							}
							switch(tempName){
								case "Mango":
									if(tempMango == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of mangos.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "Strawberry":
									if(tempStrawberry == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of strawberries.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "Banana":
									if(tempBanana == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of banana.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "CreamofCoconut":
									if(tempCreamOfCoconut == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of Cream of Coconut.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "Raspberry":
									if(tempRaspberry == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of raspberries.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "Blueberry":
									if(tempBlueberry == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of blueberries.  Click the question mark to see and try again =)");
										return false;
									}
								break;
								case "Peaches":
									if(tempPeaches == tempAmount){
										//do nothing
									}
									else{
										toggleError(1, "It doesn't look like you have the right amount of peaches.  Click the question mark to see and try again =)");
										return false;
									}
								break;
							}
						}
						return true;
					}
					else{
						var tempMango = 0;
						var tempStrawberry = 0;
						var tempBanana = 0;
						var tempCreamOfCoconut = 0;
						var tempRaspberry = 0;
						var tempBlueberry = 0;
						var tempPeaches = 0;
						var tempAmount = parseInt(ingredient.split(" ")[0]);
						console.log(tempAmount);
						var tempName = ingredient.split(" ")[1];
						console.log(tempName);
						for(i = 0; i < workspaceHandler.length; i++){
							if(workspaceHandler[i].type == "fruit"){
								if(workspaceHandler[i].name == tempName){
									switch(workspaceHandler[i].name){
										case "Mango":
											tempMango += 1;
											console.log(tempMango);
										break;
										case "Strawberry":
											tempStrawberry += 1;
										break;
										case "Banana":
											tempBanana += 1;
										break;
										case "CreamofCoconut":
											tempCreamOfCoconut += 1;
										break;
										case "Raspberry":
											tempRaspberry += 1;
										break;
										case "Blueberry":
											tempBlueberry += 1;
										break;
										case "Peaches":
											tempPeaches += 1;
										break;
									}
								}
							}
						}
						switch(tempName){
							case "Mango":
								if(tempMango == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of mangos.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "Strawberry":
								if(tempStrawberry == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of strawberries.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "Banana":
								if(tempBanana == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of banana.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "CreamofCoconut":
								if(tempCreamOfCoconut == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of Cream of Coconut.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "Raspberry":
								if(tempRaspberry == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of raspberries.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "Blueberry":
								if(tempBlueberry == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of blueberries.  Click the question mark to see and try again =)");
									return false;
								}
							break;
							case "Peaches":
								if(tempPeaches == tempAmount){
									return true;
								}
								else{
									toggleError(1, "It doesn't look like you have the right amount of peaches.  Click the question mark to see and try again =)");
									return false;
								}
							break;
						}
					}
				break;
			}
		break;
	}
}

var grade = function(){
	switch(currentScreen){
		case 1:
			var tempBreadCount = 0;
			var tempSauceCount = 0;
			var tempCheeseCount = 0;
			var tempMeatCount = 0;
			var tempVegetableCount = 0;
			var tempMiscCount = 0;
			var tempTopBread;
			var tempBottomBread;
			for(var g = 0; g < workspaceHandler.length; g++){
				if(workspaceHandler[g].type == "bread"){
					if(tempBreadCount == 0){
						tempTopBread = workspaceHandler[g];
					}
					if(tempBreadCount == 1){
						tempBottomBread = workspaceHandler[g];
					}
					tempBreadCount += 1;
				}
				if(workspaceHandler[g].type == "sauce"){
					tempSauceCount += 1;
				}
				if(workspaceHandler[g].type == "cheese"){
					tempCheeseCount += 1;
				}
				if(workspaceHandler[g].type == "meat"){
					tempMeatCount += 1;
				}
				if(workspaceHandler[g].type == "vegetable"){
					tempVegetableCount += 1;
				}
				if(workspaceHandler[g].type == "misc"){
					tempMiscCount += 1;
				}
			}
			console.log(tempBreadCount + ", " + tempSauceCount + ", " + tempCheeseCount + ", " + tempMeatCount + ", " + tempVegetableCount + ", " + tempMiscCount);
			if(tempBreadCount > 2){
				toggleError(1, "You have " + (tempBreadCount - 2) + " too many pieces of bread on the screen.  Make sure to click the question mark if you need help. =)");
				return;
			}
			if(tempBreadCount < 2){
				toggleError(1, "You don't have enough bread!  You have " + tempBreadCount + " pieces of bread and you need two in order to make a sandwich.  Make sure to click the question mark if you need help. =)");
				return;
			}
			var topBread;
			var bottomBread;
			if(tempTopBread.yPos > tempBottomBread.yPos){
				topBread = tempBottomBread;
				bottomBread = tempTopBread;
			}
			else if(tempTopBread.yPos < tempBottomBread.yPos){
				topBread = tempTopBread;
				bottomBread = tempBottomBread;
			}
			else{
				toggleError(1, "It seems your pieces of bread are laying on eachother exactly.  Can you please readjust them to have one at the bottom and one at the top, with the ingredients in the middle? =)");
				return;
			}
		break;
		case 2:
			var tempLettuceCount = 0;
			var tempDressingCount = 0;
			var tempCheeseCount = 0;
			var tempMeatCount = 0;
			var tempToppingCount = 0;
			for(var g = 0; g < workspaceHandler.length; g++){
				if(workspaceHandler[g].type == "lettuce"){
					tempLettuceCount += 1;
				}
				if(workspaceHandler[g].type == "dressing"){
					tempDressingCount += 1;
				}
				if(workspaceHandler[g].type == "cheeseSalad"){
					tempCheeseCount += 1;
				}
				if(workspaceHandler[g].type == "meatSalad"){
					tempMeatCount += 1;
				}
				if(workspaceHandler[g].type == "topping"){
					tempToppingCount += 1;
				}
			}
		break;
		case 3:
			var tempNameCount = 0;
			var tempJuiceCount = 0;
			var tempIcecreamCount = 0;
			var tempFruitCount = 0;
			for(var g = 0; g < workspaceHandler.length; g++){
				if(workspaceHandler[g].type == "name"){
					tempNameCount += 1;
					
				}
				if(workspaceHandler[g].type == "juice"){
					tempJuiceCount += 1;
				}
				if(workspaceHandler[g].type == "icecream"){
					tempIcecreamCount += 1;
				}
				if(workspaceHandler[g].type == "fruit"){
					tempFruitCount += 1;
				}
			}
			console.log(tempNameCount + ", " + tempJuiceCount + ", " + tempIcecreamCount + ", " + tempFruitCount);
		break;
	}
	switch(currentFood){
		case "Classic":
			if(checkSandwichIngredientAmounts(1, 1, 1, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "CHOICE") && ci("sauce", "Kneaders") && ci("cheese", "Provolone") && ci("meat", ["Turkey", "Beef", "Ham", "Pastrami", "Bacon"]) && ci("vegetable", ["Lettuce", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job!");
					changeFoodItem();
				}
			}
		break;
		case "Ranch":
			if(checkSandwichIngredientAmounts(1, 1, 1, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "CHOICE") && ci("sauce", "Ranch") && ci("cheese", "Swiss") && ci("meat", ["Turkey", "Beef"]) && ci("vegetable", ["Lettuce", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Ham and Swiss":
			if(checkSandwichIngredientAmounts(2, 1, 1, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "CHOICE") && ci("sauce", ["Mayonaisse", "Honey Mustard"]) && ci("cheese", "Swiss") && ci("meat", "Ham") && ci("vegetable", ["Lettuce", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Cheese Melt":
			if(checkSandwichIngredientAmounts(1, 2, 0, 0, 0, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "French Country") && ci("sauce", "Pesto") && ci("cheese", ["Provolone", "Muenster"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "TBA":
			if(checkSandwichIngredientAmounts(1, 1, 2, 4, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Focaccia") && ci("sauce", "Kneaders") && ci("cheese", "Provolone") && ci("meat", ["Turkey", "Bacon"]) && ci("vegetable", ["Lettuce", "Tomato", "Onion", "Avocado"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Club":
			if(checkSandwichIngredientAmounts(1, 1, 3, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "French Country") && ci("sauce", "Kneaders") && ci("cheese", "Provolone") && ci("meat", ["Turkey", "Ham", "Beef"]) && ci("vegetable", ["Lettuce", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "CCH":
			if(checkSandwichIngredientAmounts(2, 1, 2, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Ciabatta") && ci("sauce", ["Mayonaisse", "Honey Mustard"]) && ci("cheese", "Swiss") && ci("meat", ["Ham", "Chicken"]) && ci("vegetable", ["Lettuce", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "FD":
			if(checkSandwichIngredientAmounts(1, 1, 1, 0, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Baguette") && ci("sauce", "Au jus") && ci("cheese", "Swiss") && ci("meat", "Beef") && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Tuna":
			if(checkSandwichIngredientAmounts(2, 0, 1, 4, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "12 Grain") && ci("sauce", ["Mayonaisse", "Lemon"]) && ci("meat", "Albacore Tuna") && ci("vegetable", ["Lettuce", "Celery", "Onion", "Dill"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "CKS":
			if(checkSandwichIngredientAmounts(3, 0, 1, 5, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Croissant") && ci("sauce", ["Mayonaisse", "Sour cream", "Vinegar"]) && ci("meat", "Chicken") && ci("vegetable", ["Celery", "Water Chestnuts", "Pecans", "Green Onion", "Lettuce"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "TCC":
			if(checkSandwichIngredientAmounts(1, 1, 1, 1, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Croissant") && ci("sauce", "Cranberry") && ci("cheese", "Swiss") && ci("meat", "Turkey") && ci("vegetable", "Lettuce") && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Cafe Croissant":
			if(checkSandwichIngredientAmounts(1, 1, 1, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Croissant") && ci("sauce", ["Kneaders", "Ranch", "Mayonaisse", "Honey Mustard"]) && ci("cheese", ["Provolone", "Swiss"]) && ci("meat", ["Turkey", "Beef", "Ham", "Pastrami", "Bacon"]) && ci("vegetable", ["Lettuce", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Chicken Pesto":
			if(checkSandwichIngredientAmounts(1, 1, 1, 3, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "French Country") && ci("sauce", "Pesto") && ci("cheese", "Provolone") && ci("meat", "Chicken") && ci("vegetable", ["Basil", "Tomato", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Turkey Art":
			if(checkSandwichIngredientAmounts(2, 1, 1, 4, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Focaccia") && ci("sauce", ["Mayonaisse", "Pesto"]) && ci("cheese", "Mozzarella") && ci("meat", "Turkey") && ci("vegetable", ["Spinach", "Tomato", "Onion", "Artichoke"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Rueben":
			if(checkSandwichIngredientAmounts(1, 1, 1, 2, 1, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Rye") && ci("sauce", "Thousand Island") && ci("cheese", "Swiss") && ci("meat", "Pastrami") && ci("vegetable", ["Sourkraut", "Onion"]) && ci("misc", "s&p")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Harvest":
			if(checkSandwichIngredientAmounts(1, 2, 0, 5, 0, tempSauceCount, tempCheeseCount, tempMeatCount, tempVegetableCount, tempMiscCount)){
				if(ci("bread", "Ciabatta") && ci("sauce", "Lemon Garlic") && ci("cheese", ["Ricotta", "Parmesan"]) && ci("vegetable", ["Mushrooms", "Zucchini", "Onion", "Red Pepper", "Eggplant"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Chicken Chop":
			if(checkSaladIngredientAmounts(1, 1, 1, 1, 4, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Romaine") && ci("dressing", "Blue Cheese") && ci("cheeseSalad", "Feta") && ci("meatSalad", "Chicken") && ci("topping", ["Tomato", "Cucumber", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Turkey Cranberry":
			if(checkSaladIngredientAmounts(1, 1, 1, 1, 5, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Spring Mix") && ci("dressing", "Poppy") && ci("cheeseSalad", "Mozzarella") && ci("meatSalad", "Turkey") && ci("topping", ["Mushrooms", "Dried Cranberry", "Sunflower Seeds", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Turkey Feta":
			if(checkSaladIngredientAmounts(1, 1, 1, 1, 4, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Romaine") && ci("dressing", "Ranch") && ci("cheeseSalad", "Feta") && ci("meatSalad", "Turkey") && ci("topping", ["Tomato", "Cucumber", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Chicken Alamondo":
			if(checkSaladIngredientAmounts(1, 1, 1, 2, 3, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Spring Mix") && ci("dressing", "Poppy") && ci("cheeseSalad", "Mozzarella") && ci("meatSalad", ["Chicken", "Bacon"]) && ci("topping", ["Almonds", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "TBA Salad":
			if(checkSaladIngredientAmounts(1, 1, 0, 2, 5, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Romaine") && ci("dressing", "Ranch") && ci("meatSalad", ["Turkey", "Bacon"]) && ci("topping", ["Tomato", "Cucumber", "Onion", "s&p", "Avocado"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Berry DeLite":
			if(checkSaladIngredientAmounts(2, 1, 1, 0, 5, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", ["Romaine", "Spinach"]) && ci("dressing", "Raspberry Walnut") && ci("cheeseSalad", "Feta") && ci("topping", ["Raspberry", "Strawberry", "Blackberry", "Blueberry", "Onion"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Chicken Caesar":
			if(checkSaladIngredientAmounts(1, 1, 1, 1, 3, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Romaine") && ci("dressing", "Caesar") && ci("cheeseSalad", "Parmesan") && ci("meatSalad", "Chicken") && ci("topping", ["Onion", "s&p", "Croutons"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Large Green":
			if(checkSaladIngredientAmounts(1, 1, 1, 0, 5, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Spring Mix") && ci("cheeseSalad", "Mozzarella") && ci("topping", ["Tomato", "Cucumber", "Onion", "s&p", "Avocado"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Berry Chicken":
			if(checkSaladIngredientAmounts(1, 1, 1, 1, 4, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Spinach") && ci("dressing", "Raspberry Walnut") && ci("cheeseSalad", "Feta") && ci("meatSalad", "Chicken") && ci("topping", ["Raspberry", "Candied Pecans", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Citrus":
			if(checkSaladIngredientAmounts(1, 1, 1, 1, 5, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Spring Mix") && ci("dressing", "Balsamic") && ci("cheeseSalad", "Parmesan") && ci("meatSalad", "Chicken") && ci("topping", ["Oranges", "Dried Cranberry", "Sunflower Seeds", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "Southwest BBQ":
			if(checkSaladIngredientAmounts(1, 2, 0, 1, 8, tempLettuceCount, tempDressingCount, tempCheeseCount, tempMeatCount, tempToppingCount)){
				if(ci("lettuce", "Romaine") && ci("dressing", ["Cotija Cil", "BBQ"]) && ci("meatSalad", "Chicken") && ci("topping", ["Cilantro", "Tomato", "Avocado", "Black Beans", "Corn", "Tortilla Strips", "Onion", "s&p"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "MT/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 2, 2, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				console.log("Made it");
				if(ci("name", "Mango Tango") && ci("juice", "Peach") && ci("icecream", "2 PS") && ci("fruit", "2 Mango")){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "GG/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 2, 3, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Going Guava") && ci("juice", "Guava") && ci("icecream", "2 PS") && ci("fruit", ["1 Mango", "1 Strawberry", "1 Banana"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "PC/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 2, 4, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Pink Pina Colada") && ci("juice", "Guava") && ci("icecream", "2 PS") && ci("fruit", ["1 CreamofCoconut", "2 Strawberry", "1 Banana"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "MS/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 2, 3, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Morning Sunshine") && ci("juice", "Orange") && ci("icecream", "2 VanYog") && ci("fruit", ["2 Strawberry", "1 Banana"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "RZ/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 3, 3, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Razzleberry") && ci("juice", "Apple") && ci("icecream", ["1 VanYog", "2 RaspSher"]) && ci("fruit", ["2 Raspberry", "1 Banana"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "ND/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 0, 4, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "No Dairy Berry") && ci("juice", "Guava") && ci("fruit", ["1 Peach", "2 Strawberry", "1 Banana"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "#5/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 3, 3, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Blueberry #5") && ci("juice", "Peach") && ci("icecream", ["1 VanYog", "2 RaspSher"]) && ci("fruit", ["1 Blueberry", "1 Raspberry", "1 Banana"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "TSU/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 2, 2, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Strawberry Tsunami") && ci("juice", "Cranberry") && ci("icecream", "2 PS") && ci("fruit", ["1 Peach", "1 Strawberry"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
		case "PP/SM":
			if(checkSmoothieIngredientAmounts(1, 1, 2, 2, tempNameCount, tempJuiceCount, tempIcecreamCount, tempFruitCount)){
				if(ci("name", "Planet Peaches") && ci("juice", "Peach") && ci("icecream", "2 VanYog") && ci("fruit", ["1 Mango", "1 Peach"])){
					alert("Good Job");
					changeFoodItem();
				}
			}
		break;
	}
}