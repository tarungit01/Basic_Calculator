let preValue = "";
let newValue = "";
let resultValue = "";
let mathOperator = "";
let decimal = false;
let valueStored = "";


function btnpress(n) {
	if(resultValue){
		newValue = n;
		resultValue = "";
	} else {
		if(n === '.'){
			if(decimal != true){
				newValue += n;
				decimal = true;
				}
			} else {
				newValue += n;
		}
	}
	document.getElementById('output').value = newValue;
}

function mathbtnpress(operator) {
	if(!resultValue){
		preValue = newValue;
	} else{
		preValue = resultValue;
		}
		newValue = "";
		decimal = false;
		mathOperator = operator;
		resultValue = "";
	document.getElementById('output').value = "";
}

function math_equalbtnpress(n) {
	decimal = false;
	preValue = parseFloat(preValue);
	newValue = parseFloat(newValue);


	switch(mathOperator){
		case '+':
		resultValue = preValue + newValue;
		break;

		case '-':
		resultValue = preValue - newValue;
		break;

		case '*':
		resultValue = preValue * newValue;
		break;

		case '/':
		resultValue = preValue / newValue;
		break;

		default:
		resultValue = newValue;
	
	}

	preValue = newValue;
	document.getElementById('output').value = resultValue;
}

function allclearbtnpress() {
	preValue = "";
	newValue = "";
	resultValue = "";
	mathOperator = "";
	decimal = false;
	valueStored = "";
	document.getElementById('output').value = '0';
}

function copybtnpress(n) {
	valueStored = document.getElementById('output').value;

}

function pastebtnpress(n) {
	if(valueStored){
	document.getElementById('output').value = valueStored;
	newValue = valueStored;
	
	}

}