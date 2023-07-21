let sidebar = document.querySelectorAll('.list-with-sidebar__sidebar'); //сайдбар
let sidebarContainer = document.querySelectorAll('.list-with-sidebar__sidebar-inner-container'); //Контейнер сайдбара
let header = document.querySelector('.header')
let headerStyles = window.getComputedStyle(header);
let headerHeight = 0; //Высота хедера

if (headerStyles.position == 'fixed') {
  headerHeight = header.offsetHeight
} else {
  headerHeight = 0
}


for (let j = 0; j <= sidebar.length; j++) {

  if (sidebarContainer[j]) {
    window.addEventListener('scroll', () => {
      let sidebarHeight = sidebar[j].offsetHeight; //высота сайдбара
      let sidebarContainerHeight = sidebarContainer[j].offsetHeight; //высота контейнера 
      let neededDistance = (sidebarHeight - sidebarContainerHeight - headerHeight); //Расстояние, которое надо пройти, чтобы контейнер остановился

      //Если хедер статичен, то меняем значение headerHeight на 0!!!!

      let distanceForTop = sidebar[j].getBoundingClientRect().top
      if (distanceForTop <= headerHeight && distanceForTop >= -neededDistance) {
        sidebarContainer[j].style.position = 'fixed';
        sidebarContainer[j].style.top = `${headerHeight}px`;
        sidebarContainer[j].style.bottom = 'auto'
      } else if (distanceForTop <= -neededDistance) {
        sidebarContainer[j].style.position = 'absolute';
        sidebarContainer[j].style.bottom = '0'
        sidebarContainer[j].style.top = 'auto'
      } else {
        sidebarContainer[j].style.position = 'absolute';
        sidebarContainer[j].style.bottom = 'auto'
        sidebarContainer[j].style.top = '0'
      }
    })
  }
}



let boxes = document.querySelectorAll('.list-with-sidebar__box'); // Основные элементы списка 
let sidebarItems = document.querySelectorAll('.list-with-sidebar__sidebar-item'); //Элементы сайдбара
let boxStyles = window.getComputedStyle(boxes[0]);
let boxesMarginBottom = +boxStyles.marginBottom.slice(0, boxStyles.marginBottom.length - 2);


window.addEventListener('scroll', () => {
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i]; //один контейнер
    let sidebarItem = sidebarItems[i]; // Один элемент списка 
    let boxDistanceForTop = box.getBoundingClientRect().top - boxesMarginBottom; //Расстояние до верха при котором должны загораться элементы списка
    let boxHeight = box.offsetHeight; //Высота коробки


    if (boxDistanceForTop <= headerHeight && boxDistanceForTop >= -boxHeight) {
      sidebarItem.classList.add('list-with-sidebar__sidebar-item_active');
    } else if (boxDistanceForTop <= -boxHeight || boxDistanceForTop >= headerHeight) {
      sidebarItem.classList.remove('list-with-sidebar__sidebar-item_active');
    }
  }
})


let boxTops = document.querySelectorAll('.list-with-sidebar__box-top'); // Заголовок контейтера с номерм 
let boxTexts = document.querySelectorAll('.list-with-sidebar__box-text');



function init() {
  var screenWidth = window.innerWidth;
  for (let i = 0; i < boxTops.length; i++) {
    let boxTop = boxTops[i];
    let boxText = boxTexts[i];
    let box = boxes[i];
    let boxSummaryHeight = `${boxTop.offsetHeight + boxText.offsetHeight + 20}px`;

    if (screenWidth < 768) {
      box.classList.add('list-with-sidebar__box_unactive');

      if (box.classList.contains('list-with-sidebar__box_unactive')) {
        box.style.maxHeight = `${boxTop.offsetHeight}px`
      }

      boxTop.addEventListener('click', () => {
        box.classList.toggle('list-with-sidebar__box_unactive')
        if (box.classList.contains('list-with-sidebar__box_unactive')) {
          box.style.maxHeight = `${boxTop.offsetHeight}px`
        } else {
          box.style.maxHeight = boxSummaryHeight;
        }

      })
    } else {
      box.style.maxHeight = `fit-content`
    }

  }
}

$(document).ready(function () {
  init();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  init();
}); //Запуск функции при изменении размера




for(let b = 0; b<sidebarItems.length; b++){
  let link = sidebarItems[b];
  let id = `lws-${b+1}`;
  link.href = `#${id}`;
  let box = boxes[b];
  box.id = id;

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
}