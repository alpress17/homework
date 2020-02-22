"use strict";
let money = prompt("Ваш бюджет на месяц?", 35000),
	time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-23"),
	appData = {
		budget: money,
		timeData: time,
		expenses: {}, // объект с обязательными расходами
		optionalExpenses: {}, // объект с необязательными расходами
		incom: [], // массив данных с доп. доходом
		savings: false // св-во установленное как ЛОЖЬ
	},
	answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
	cost1 = prompt("Во сколько обойдется?"),
	answer2 = prompt("Введите обязательную статью расходов в этом месяце"),
	cost2 = prompt("Во сколько обойдется?");
appData.expenses[answer1] = cost1; // передали содержимое переменных как свойство и значение во внутрь объекта
appData.expenses[answer2] = cost2;
alert(`Ваш бюджет на день составляет: ${money / 30}`);
console.log(money);
console.log(time);
console.log(appData.expenses);
// console.log(appData);
