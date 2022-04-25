const CACHE_KEY = "calculator-history";

function putHistory(date) {
	if (checkForStorage()) {
		let historyData = null;
		if (localStorage.getItem(CACHE_KEY) === null) {
			historyData	= [];
		} else {
			historyData = JSON.parse(localStorage.getItem(CACHE_KEY);
		}

		historyData.unshift(data);

		if(historyData.lenght > 5) {
			historyData.pop();
		}

		localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
	}
}

function showHistory() {
	if (chechForStorage) {
		return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
	} else {
		return []
	}
}

function renderHistory() {
	const historyData = showHistory();
	lest historyList = document.querySelector("#historylist");
	historyList.innerHTML = "";

	for (let history of historyData) {
		let row = document .createElement('tr');
		row.innerHTML = "<td>" + history.firstNumber + "</td>";
		row.innerHTML += "<td>" + history.operator + "</td>";
		row.innerHTML += "<td>" + history.secondNumber + "</td>";
		row.innerHTML += "<td>" + history.result + "</td>";

		historylist.appendChild(row)
	}

}