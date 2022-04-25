const calculator = {
	displayNumber: '0',
	operator: null,
	firstnumber: null,
	waitingForSecondNumber: false
};

function updateDisplay() {
	document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
	calculator.displayNumber ='0';
	calculator.operator = null;
	calculator.firstnumber = null;
	calculator.waitingForSecondNumber = false;
}

function inputdigit(digit) {
	if (calculator.displayNumber === '0' {
		calculator.displayNumber = digit;
	} else {
		calculator.displayNumber += digit;
	}
}

function inverseNumber() {
	if (calculator.displayNumber === '0') {
		return;
	}
	calculator.displayNumber = calculator.displayNumber *-1;
}

function handleOperator(operator) {
	if (!calculator.waitingForSecondNumber) {
		calculator.operator = operator ;
		calculator.waitingForSecondNumber = true;
		calculator.firstnumber = calculator. displayNumber;
		Calculator.displayNumber = '0' ;
	} else {
		alert('operator sudah ditetpkan')
	}
}

function performCalculator() {
	if (calculator.firstnumber == null || calculator.operator == null) {
		alert("anda belum menempatkan operator");

	}

	let result = 0;
	if (calculator.operator === "+") {
		result = parseInt(calculator.firstnumber) + parseInt(calculator.displayNumber);
	} else {
		result = parseInt(calculator.firstnumber) - parseInt(calculator.displayNumber)
	}

	calculator.displayNumber = result;


const buttons = document.querySelectorAll('.button');
for(let button of buttons) {
	button.addEventListener('click', function (event) {

		// mendapatkan objek elemen yang diklik
		const target = event.target;

		if (target.classList.contains('clear')) {
			clearCalculator();
			updateDisplay();
			return
		}

		if (target.classList.contains ('negative')) {
			inverseNumber();
			updateDisplay();
			return;
		}

		if (target.classList.contains('equals'))
			performCalculator();
			updateDisplay();
			return;
		}

		if (target.classList.contains('operator')) {
			handleOperator(target.innerText);
			return;
		}

		inputdigit(target.innerText);
		updateDisplay()
	});
}



