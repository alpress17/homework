'use strict';
let money = +prompt('Ваш бюджет на месяц?', 35000), // prompt всегда возвращает данные в string. унарный плюс переводит в числа
	time = prompt('Введите дату в формате YYYY-MM-DD', '2020-02-23');

let appData = {
	budget: money,
	timeData: time,
	expenses: {}, // объект с обязательными расходами
	optionalExpenses: {}, // объект с необязательными расходами
	incom: [], // массив данных с доп. доходом
	savings: false // св-во установленное как ЛОЖЬ
};

// let	answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
// 	cost1 = prompt("Во сколько обойдется?"),
// 	answer2 = prompt("Введите обязательную статью расходов в этом месяце"),
// 	cost2 = prompt("Во сколько обойдется?");
// appData.expenses[answer1] = cost1; // передали содержимое переменных как свойство и значение во внутрь объекта
// appData.expenses[answer2] = cost2;

// Цикл FOR (начало; условие; шаг) {тело цикла}
for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', 'dinner'),
		b = +prompt('Во сколько обойдется?', 1000);
	if (
		typeof a === 'string' && // необязательная проверка т.к. prompt всегда возвращает строку
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

/* let i = 0;               // USE - WIHILE(условие){тело цикла}
while (i < 2) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = +prompt('Во сколько обойдется?', '');
	if (typeof a === 'string' && typeof a != null && typeof b != null && a != '' && b != '' && a.length < 50) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		console.log('bad result');
		i--;
	}
	i++;
} */

/* let i = 0;                  USE - DO{тело цикла} WHILE(условие)
do {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = +prompt('Во сколько обойдется?', '');
	if (typeof a === 'string' && typeof a != null && typeof b != null && a != '' && b != '' && a.length < 50) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		console.log('bad result');
		i--;
	}
	i++;
} while (i < 2); */

appData.moneyPerDay = appData.budget / 30;
alert(`Ваш бюджет на день составляет: ${money / 30} руб.`);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}

console.log(appData.expenses);
console.log(appData);