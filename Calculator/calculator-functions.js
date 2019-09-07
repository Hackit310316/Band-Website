// This function will clear the display when its called

function clearDisplay(){
	document.getElementById("result").value = "";
}

// We need a function to display the values
function display(val){
	document.getElementById("result").value += val;

}

//Function to evaluate the digit and return the results
function solve(){
	let x = document.getElementById("result").value
	let y = eval(x);
	document.getElementById("result").value = y;
}