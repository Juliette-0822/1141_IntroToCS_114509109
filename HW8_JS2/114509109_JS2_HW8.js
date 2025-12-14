function add(a, b){
	return a + b;
}

function subtract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function divide(a, b){
	if(b === 0){
		alert("Non Valid caculation!");
		return;
	} else {
		return a / b;
	}
}

function calculate(){
	const num1 = Number(document.getElementById("num1").value);
	const num2 = Number(document.getElementById("num2").value);
	const operateWay = document.getElementById("select").value;
	const resultText =document.getElementById("result")	

	if(isNaN(num1) || isNaN(num2)){
		alert("Please enter a valid score.");
		return;
	}

	let result;

	switch(operateWay){
		case "+":
			result = add(num1, num2);
			break;

		case "-":
			result = subtract(num1, num2);
			break;
		case "*":
			result = multiply(num1, num2);
			break;

		case "/":
			result = divide(num1, num2);
			break;
	}

	resultText.textContent = "Result = " + result;
}

document.addEventListener("DOMContentLoaded", function(){
	const button = document.getElementById("submitBtn");
	button.addEventListener("click", calculate)
});