// назначаем обработчик событий (DOMContentLoaded) на страницу для того, 
// чтобы скрипты начинали работу только после загрузки DOM структуры страницы
window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	// классы show и hide прописаны в style.css, оперируя ими будем скрывать или показывать блоки

	// создаем функцию, которая скрывает все табы (контент)
	function hideTabContent(a) { // в аргумент 'a' будем передавать номер элемента, c которого начнется цикл
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show'); // удаляем класс show у всех элементов
			tabContent[i].classList.add('hide'); // добавляем к элементам класс hide
		}
	}
	// запускаем функцию и передаем аргумент a = 1 (будут скрыты все табы, кроме первого т.е. [0])
	hideTabContent(1);

	// создаем функцию, которая показывает необходимый контент
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	// назначаем обработчик событий на родителя(info) элементов('info-header-tab')  (делаем делигирование)
	info.addEventListener('click', function (event) {
		// event - это объект который мы в данный момент обрабатываем (кликаем, изменяем, проверяем и т.п.)
		// объект event имеет свои св-ва, одно из них - target
		let target = event.target; // переменная для удобства
		// если это таргет(проверка для надежности) и его класс содержит имя ...
		if (target && target.classList.contains('info-header-tab')) {
			// циклом перебираем табы и ищем совпадение
			for (let i = 0; i < tab.length; i++) {
				// (если то, куда нажали(target) == таб, который перебираем (tab[i]), то
				// hideTabContent(0) - функция с аргументом a=0 скроет все табы(контент)
				if (target == tab[i]) {
					hideTabContent(0);
					// перебираемый итератор (i), будет подставлятся в функцию showTabContent() в аргумент 'b'
					showTabContent(i); // отображаем совпавший с таргетом  таб(контент)
					break; // при совпадении останавливаем цикл
				}
			}
		}
	});

	// ======== TIMER ======== \\

	let deadline = '2020-03-13'; // конечная дата

	function getTimeRemaining(endtime) {
		// new Date() - выводит дату в текущий момент
		let t = Date.parse(endtime) - Date.parse(new Date()), // переменная t в которую помещаем разницу в датах (в милисекундах)
			// t/1000 - узнаем кол-во секунд, и с помощью %  узнаем остаток от целого числа секунд
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60), // остаток от целого числа минут 
			hours = Math.floor((t / (1000 * 60 * 60)) - 2); // (-2) - для корректировки Часового пояса
		// hours = Math.floor((t/1000/60/60) % 24), // остаток от целого числа часов
		// days = Math.floor((t/(1000*60*60*24))); // узнаем кол-во дней

		return { // создаем объект, который возвращаем в функции
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	// функция для вставки динимических данных в верстку
	// аргумент id - это то место, куда мы вставляем таймер в верстке
	// аргумент endtime - это переменная deadline с заданным временем окончания таймера
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'), // ищем класс внутри блока с таймером (первый элемент)
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000); // каждую секунду запускаем функцию updateClock

		// функция для обновления данных каждую секунду
		function updateClock() {
			let t = getTimeRemaining(endtime); //каждую сек обновляем данные, полученные из deadline
			function addZero(num) { // добавляем ноль ( '8:22:1' - будет в формате '08:22:01')
				if (num <= 9) {
					return '0' + num;
				} else {
					return num;
				}
			}
			// hours.textContent = t.hours; // - без добавления нуля (функции addZero)
			hours.textContent = addZero(t.hours); // получаем обновленное кол-во часов с объекта 't'
			minutes.textContent = addZero(t.minutes); // получаем обновленное кол-во минут с объекта 't'
			seconds.textContent = addZero(t.seconds); // получаем обновленное кол-во секунд с объекта 't'

			// условия для остановки таймера
			// (так же убираем отрицательные значения, если дата уже прошла)
			if (t.total <= 0) {
				clearInterval(timeInterval); // останавливаем таймер
				hours.textContent = '00'; // отрицательные значения и '0' в нули '00'
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}
	setClock('timer', deadline); // вызываем функцию с аргументами
});