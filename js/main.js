// реализация класса ibg для изображений
// для гибкого манипулирования изображением
function ibg(){
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
ibg();

const iconMenu = document.querySelector('.menu__icon');
const iconList = document.querySelector('.menu__list');
if (iconMenu) {  
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function(event) {
    console.log('click');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    iconList.classList.toggle('active');
  });
}


// убираем логотоп при скроле на мобильной версии
let logoElement = document.querySelector('.header__logo');
window.addEventListener('scroll', function() {
  if (this.pageYOffset > 10) {
    logoElement.classList.add('active');
  } else {
    logoElement.classList.remove('active');
  }  
});


// валидация формы
let buttonGo = document.querySelector('.subscribe__btn');

buttonGo.addEventListener('click', function(e) {
  e.preventDefault();
  let input = document.querySelector('.input');
  let inputValue = input.value;
  validateForm(inputValue);
  if (inputValue && !validateForm(inputValue)) {
    input.classList.add('error');    
  } else if (!inputValue) {
    input.classList.add('error');    
  } else {
    input.classList.remove('error');
    console.log('your email is valid!');
  }
  input.value = "";
});

function validateForm(inputValue) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(inputValue);
};


// карусель
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true
  });
});

