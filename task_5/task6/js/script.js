let nav = document.querySelector('.menu'); // назначили menu
console.log(nav);
let btn = document.querySelectorAll('li'); // назначили li
console.log(btn[2]);
let newLi = document.createElement('li');
nav.insertBefore(newLi, btn[1]); // добавили новый li перед вторым
nav.replaceChild(btn[2], newLi); // поменяли местами третий и добавленный li
nav.appendChild(newLi); // добавили в конец новый li
btn[4] = newLi.innerHTML = 'Пятый пункт'; // задали 5-му эл. текст 
btn[4] = newLi.classList.add('menu-item'); // назначили 5-му эл. класс
// btn.forEach(el => el.classList.add('menu-item1'));
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat'; // замена фона у body
let title = document.querySelector('#title'); // назначили title
title.innerHTML = ""; // очистка значения в title
title.insertAdjacentText('afterbegin', 'Мы продаем только подлинную технику Apple'); // вставка нового текста
let adv = document.querySelector('.adv'); // назначили adv
adv.style.display = 'none'; // скрытие блока с рекламой
let answer = prompt('Как Вы относитесь к технике Apple?'); // вопрос
let answerResult = document.querySelector('#prompt'); // куда вставить ответ
answerResult.insertAdjacentText('afterbegin', answer); // вставка ответа пользователя в блок 'prompt'
console.log(document.querySelectorAll('li'));