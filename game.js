function play() {
	var randomnumber = Math.floor(Math.random()*101)
	var input = prompt("Pick a Number?");
	howHot(input);
	}	

	function howHot(input) { 
		if (input == randomnumber){
			alert(input + " is the Winner!");
		}
		else if (input > randomnumber){
			alert(" too hot!");
			input = prompt("Pick a Number?");
			howHot(input);
		} 
		else if (input < randomnumber){
			alert("too cold!");
			input = prompt("Pick a Number?");
			howHot(input);
		}
		else
		{
			alert("bug!");
		}
	}
	
	
