'use strict';

let btnStart = document.querySelector('#start');
// resTb = document.querySelectorAll('.result-table > div');
console.log(btnStart);
// console.log(resTb);

// let val = document.getElementsByTagName("value");
// console.log(val);

// let classValue = document.querySelectorAll("[class$='value']");
/* for (let i = 0; i < resTb.length; i++) {
	let classValue = document.querySelectorAll("[class$='value']");
	if (

		resTb.classValue == "[class$ = 'value']"
	) {
		console.log(classValue);
	}
} */

/* let allValues = document.querySelectorAll('.result-table div:nth-child(2n)'),
	valueBtn = document.querySelectorAll('[class *= "value"]');
console.log(allValues);
console.log(valueBtn); */

let valueDiv = document.querySelectorAll('.result-table')[0].children;
for (let i = 0; i < valueDiv.length; i++) {
	let x = valueDiv[i].getAttribute('class'); // узнаем имяя класса у div (дочернего блока .result-table)
	if (x.includes('value')) {

		// console.log(x);
		console.log(valueDiv[i]);
	}
}

/* let resultTable = document.body.querySelector(".result-table").children,
	resultTableValues = {};
for (let i = 0; i < resultTable.length; i++) {
	let nameClass = resultTable[i].className,
		nameSplit = nameClass.split("-");
	if (nameSplit[1] == "value") {
		resultTableValues[nameClass] = resultTable[i];
	}

};
console.log(resultTableValues); */

let inp = document.querySelectorAll('.expenses-item');
for (let i = 0; i < inp.length; i++) {
	let inpValue = inp[i].value = i + 1;
	console.log(inpValue);
};
console.log(inp);

let button = document.getElementsByTagName('button'),
	expItemBtn = button[0],
	optExpBtn = button[1],
	countBudgBtn = button[2];

console.log(expItemBtn);
console.log(optExpBtn);
console.log(countBudgBtn);

let optExpItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelectorAll('.choose-income')[0],
	savings = document.querySelectorAll('#savings')[0],
	chooseSum = document.querySelectorAll('.choose-sum')[0],
	choosePercent = document.querySelectorAll('.choose-percent')[0],


	yearValue = document.querySelectorAll('.year-value')[0],
	monthValue = document.querySelectorAll('.month-value')[0],
	dayValue = document.querySelectorAll('.day-value')[0];

console.log(optExpItem[0]);
console.log(optExpItem[1]);
console.log(optExpItem[2]);

console.log(chooseIncome);
console.log(savings);
console.log(chooseSum);
console.log(choosePercent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);

let titleFs = document.querySelector('.title');
titleFs.style.fontSize = '16px';