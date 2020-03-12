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
});