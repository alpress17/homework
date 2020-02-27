'use strict';

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', 50000); // prompt всегда возвращает данные в string. унарный плюс переводит в числа
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == null || money == '') {
		money = +prompt('Ваш бюджет на месяц?', 50000);
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {}, // объект с обязательными расходами
	optionalExpenses: {}, // объект с необязательными расходами
	incom: [], // массив данных с доп. доходом
	savings: true // если есть сбережения - TRUE
};

function chooseExpenses() {
	// Цикл FOR (начало; условие; шаг) {тело цикла}
	for (let i = 0; i < 2; i++) {
		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
			b = +prompt('Во сколько обойдется?', '');
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
		} else {
			console.log('bad result');
			i--; // вернуться на цикл обратно, если предыдущие условия FALSE
		}
	}
}
chooseExpenses();

let moneyPerDay;

function detectDayBudget() { // расчет дневного бюджета
	appData.moneyPerDay = (appData.budget / 30).toFixed(); // метод .toFixed() - округляет и возвращает СТРОКОВОЕ значение
	alert('Ежедневный бюджет:' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() { // расчет уровня достатка
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

function checkSavings() { // расчет ежемесячного дохода от накоплений
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?'),
			percent = +prompt('Под какой процент?');

		appData.monthIncome = save / 100 / 12 * percent;
		alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
	}
}
checkSavings();

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let a = prompt('Введите статью необезательных расходов', '');
		// b=prompt('Во сколько обойдется?', '');
		if (
			typeof a === 'string' &&
			// !isNaN(b) &&
			a != '' &&
			// b != '' &&
			typeof a != null &&
			// typeof b != null &&
			a.length < 50
		) {
			console.log('done OptExp'); // выводим в консоль, чтобы понять отрабатывается ли условия
			appData.optionalExpenses[i] = a; // записываем в массив 'a' как св-во, и 'b' - как его значение
		} else {
			console.log('bad result');
			i--; // вернуться на цикл обратно, если предыдущие условия FALSE
		}
	}
}
chooseOptExpenses();

console.log(appData.expenses);
console.log(appData);
console.log(appData.optionalExpenses);