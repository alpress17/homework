'use strict';

let startBtn = document.querySelector('#start'),
	budgetValue,
	button = document.getElementsByTagName('button'),
	expItemBtn = button[0],
	optExpBtn = button[1],
	countBudgBtn = button[2],

	optExpItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	savings = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let divValue = document.querySelectorAll('.result-table')[0].children;
for (let i = 0; i < divValue.length; i++) {
	let x = divValue[i].getAttribute('class'); // узнаем имя класса у div (дочернего блока .result-table)
	if (x.includes('value')) {
		// console.log(x);
		// console.log(divValue[i]);
	}

}
let expInput = document.querySelectorAll('.expenses-item');
// let sumExpInput = +(expInput[1].value + expInput[3].value);
// console.log(sumExpInput);
/* for (let i = 0; i < expInput.length; i++) {
	let inpValue = expInput[i].value = i + 1;
	// console.log(inpValue);
	
}
console.log(expInput); */

let money, time;
let notActive = document.querySelector('.disable');


expItemBtn.disabled = true; // де-активируем кнопки расчета
optExpBtn.disabled = true;
countBudgBtn.disabled = true;
expItemBtn.style.backgroundImage = '#ddd';

startBtn.addEventListener('click', function () {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', 50000); // prompt всегда возвращает данные в string. унарный плюс переводит в числа

	while (isNaN(money) || money == null || money == '') {
		money = +prompt('Ваш бюджет на месяц?', 50000);
	}
	appData.budget = money;
	appData.timeData = time;
	divValue[1].textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear(); // metod Date.parse - пересчитывает миллисекунды из переменной time и потом new Date создает новую дату, потом получаем год.
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // getMonth() - метод для получения месяца из даты(+1 - т.к. январь - это 0)
	dayValue.value = new Date(Date.parse(time)).getDate(); // getDate - метод получает день из даты
	expItemBtn.disabled = false; // активируем кнопки расчета
	optExpBtn.disabled = false;
	countBudgBtn.disabled = false;
});


expItemBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expInput.length; i++) { // Цикл FOR (начало; условие; шаг) {тело цикла}
		let a = expInput[i].value,
			b = expInput[++i].value;
		if (
			typeof a === 'string' && // необязательная проверка т.к. prompt всегда возвращает строку
			!isNaN(b) && // проверка на число, если число - TRUE
			typeof a != null && // провепка на ОТМЕНУ действия
			typeof b != null &&
			a != '' && // проверка на пустую строку
			b != '' &&
			a.length < 50 // длинна строки < 50
		) {
			console.log('done'); // выводим в консоль, чтобы понять отрабатывается ли условия
			appData.expenses[a] = b; // записываем в массив 'a' как св-во, и 'b' - как его значение
			sum += +b; // sum = (sum + (+b)) (+b - возвращает число)
		} else {
			console.log('bad result');
			i--; // i=i-1 вернуться на цикл обратно, если предыдущие условия FALSE
		}
	}
	divValue[7].textContent = sum;
});


optExpBtn.addEventListener('click', function () {
	for (let i = 0; i < optExpItem.length; i++) {
		let a = optExpItem[i].value;
		if (
			typeof a === 'string' &&
			a != '' &&
			typeof a != null &&
			a.length < 50
		) {
			console.log('done OptExp'); // выводим в консоль, чтобы понять отрабатывается ли условия
			appData.optionalExpenses[i] = a; // записываем в массив 'a' как св-во, и 'b' - как его значение
			divValue[9].textContent += appData.optionalExpenses[i] + ' ';
		} else {
			console.log('bad result OptExp');
			i--; // вернуться на цикл обратно, если предыдущие условия FALSE
		}
	}
});


countBudgBtn.addEventListener('click', function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - divValue[7].textContent) / 30).toFixed(); // метод .toFixed() - округляет и возвращает СТРОКОВОЕ значение
		divValue[3].textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			divValue[5].textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			divValue[5].textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			divValue[5].textContent = "Высокий уровень достатка";
		} else {
			divValue[5].textContent = "Произошла ошибка";
		}
	} else {
		divValue[3].textContent = "Произошла ошибка";
	}
});

chooseIncome.addEventListener('input', function () { // событие input - перехват input значения;
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	divValue[11].textContent = appData.income; //   вывод перехваченного значения в другой блок
});

savings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;
		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		divValue[13].textContent = appData.monthIncome.toFixed(1); // округляем после точки до 1 цифры
		divValue[15].textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;
		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		divValue[13].textContent = appData.monthIncome.toFixed(1); // округляем после точки до 1 цифры
		divValue[15].textContent = appData.yearIncome.toFixed(1);
	}
});


let appData = {
	budget: money,
	timeData: time,
	expenses: {}, // объект с обязательными расходами
	optionalExpenses: {}, // объект с необязательными расходами
	income: [], // массив данных с доп. доходом
	savings: false, // есть ли сбережения? - TRUE/FALSE

	detectDayBudget: function () { // расчет дневного бюджета
		alert('Ежедневный бюджет:' + appData.moneyPerDay);
	},

	checkSavings: function () { // расчет ежемесячного дохода от накоплений
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');

			appData.monthIncome = save / 100 / 12 * percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	},

	/* chooseIncome: function () {
		let items = prompt('Что принесет дополнительный доход(перечислить через запятую)', '');
		if (
			typeof (items) === 'string' &&
			isNaN(items) &&
			items != '' &&
			typeof (items) != null
		) {
			appData.income = items.split(', '); // помещаем данные от пользоваиеля в массив (', ' - разделитель элем.масс.)
			appData.income.push(prompt('Может что-то еще?', '')); // методом push добавляем новый эл. в масс. income 
			appData.income.sort(); // метод sort - отсортирует эл.масс. income по алфавиту
		} else {
			console.log("Вы ввели некорректные данные или не ввели их вовсе");
		}
		appData.income.forEach(function (itemmassive, i) {
			alert(`Способы доп. заработка: ${i+1}. ${itemmassive}`);
		});
	} */
};