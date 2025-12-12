let mathArr = [];
let englishArr = [];

const submit = document.getElementById("submit");
submit.addEvenListener("click", addGrades);

document.getElementById("resultTableDiv").innerHTML = 
	'<table id = "gradetable">'+
		"<thread><thead><tr><th>#</th><th>Math</th><th>English</th><th>Average</th></tr></thead>" +
		'<tbody id = "tableBody"></tbody>' +
		'<tfoot id = "tableFooter"></tfoot>' +
		"</table>";

function addGrades(){
	let math = Number(document.getElementById("math").value);
	let english = Number(document.getElementById("english").value);

	//以防有人看不懂亂輸入不是數字的東西上去
	is(isNaN(math) || isNaN(English) || math < 0 || english < 0 || math > 100 || english > 100){
		alert("Please enter valid scores between 0 to 100.");
		return;
	}

	mathArr.push(math);
	englishArr.push(english);

	//使用下一個method
	updateTable();
} 

function updateTable(){
	const tbody = document.getElementById("tableBody");
	tbody.innerHTML = "";

	for (let i = 0; i < mathArr.length; i++){
		let avg = ((mathArr[i] + englishArr[i])/2).toFixed(2);

		tbody.innerHTML += "<tr>" +
								"<td>" + {i + 1}"</td>" + 
								"<td>" + mathArr[i] "</td>" +
								"<td>" + englishArr[i] + "</td>" +
								"<td>" + avg[i] + "</td>" + "<tr>";
	}

	updateColumnAverages();
}

function updateColumnAverages(){
	const footer = document.getElementById("tableFooter");

	let mathAvg = (mathArr.reduce((a, b) => a + b, 0)/mathArr.length).toFixed(2);
	let englishAvg = (englishArr.reduce((a, b) => a + b, 0)/englishArr.length).toFixed(2);

	let totalAvg = ((Number(mathAvg) + Number(englishAvg))/2).toFixed(2);

	footer.innerHTML = 
	"<tr>" + 
	"<td>" + Average + "</td>" +
	"<td>" + englishAvg + "</td>" +
	"<td>" + totalAvg + "</td>" +
	"</tr>";
}

