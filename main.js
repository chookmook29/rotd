var step = 0;
transit_encounter = ["Mines", "None", "None", "None", "None", "None", "None", "None", "None", "None", "Ship"];
bi_encounter = ["Submarine Net", "None", "None", "None", "None", "None", "None", "Ship", "2 Ships", "Capitol Ship", "None"];
loc_array = ["Port", "Transit", "Transit", "British Isles", "British Isles", "British Isles", "Transit", "Transit", "Refit"];
random_event = false;

function start(){
	step += 1;
	dice_roll = dice();
	if (dice_roll == 12 && random_event == false){
		random_event =  true;
		document.getElementById("text").innerHTML = step + ". Random Event!";
	}
	else {
		if (loc_array[step] == "Transit"){
		var encounter = transit_encounter[Math.floor(Math.random()*transit_encounter.length)];
		}
		else if (loc_array[step] == "British Isles"){
			var encounter = bi_encounter[Math.floor(Math.random()*bi_encounter.length)];
		}
		else {
			var encounter = "";
		}
		
		if (encounter == "Ship") {
			document.getElementById("text").innerHTML = step + ". " + loc_array[step] + " " + sizeFreighter() + " " + timeDay();
		}
		else if (encounter == "2 Ships"){
			document.getElementById("text").innerHTML = step + ". " + loc_array[step] + " " + sizeFreighter() + ", " + sizeFreighter() + " " + timeDay();
		}
		else if (encounter == "None"){
			document.getElementById("text").innerHTML = step + ". " + loc_array[step] + " " + timeDay();
		}
		else if (encounter == ""){
			document.getElementById("text").innerHTML = step + ". " + loc_array[step];
		}
		else {
			document.getElementById("text").innerHTML = step + ". " + loc_array[step] + " " + encounter + " " + timeDay();
		}
		document.getElementById("text2").innerHTML = "...";
		document.getElementById("text3").innerHTML = "...";
		if (step == 8){
			step = 0;
			random_event = false;
		}
	}
	
}

function addRoundT(){
			escort = ["Escort", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
			var result = escort[Math.floor(Math.random()*escort.length)];
			document.getElementById("text2").innerHTML = result;
		}

function addRoundB(){
			escort = ["Escort", "Escort", "Escort", "Escort", "None", "None", "None", "None", "None", "None", "None"];
			var result = escort[Math.floor(Math.random()*escort.length)];
			document.getElementById("text3").innerHTML = result;
		}

function timeDay(){
			time = ["Day", "Day", "Day", "Night", "Night", "Night"];
			return time[Math.floor(Math.random()*time.length)];
		}

function sizeFreighter(){
			size = ["Small Ship", "Small Ship", "Small Ship", "Small Ship", "Small Ship", "Large Ship"];
			return size[Math.floor(Math.random()*size.length)];
		}

function dice() {
		dice_a = [1, 2, 3, 4, 5, 6];
		dice_b = [1, 2, 3, 4, 5, 6];
		return dice_a[Math.floor(Math.random()*dice_a.length)] + dice_b[Math.floor(Math.random()*dice_b.length)];
	}