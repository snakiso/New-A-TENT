let sidebarContainer = document.querySelector('.list-with-sidebar__sidebar-inner-container'); //Контейнер сайдбара
let sidebar = document.querySelector('.list-with-sidebar__sidebar'); //сайдбар



window.addEventListener('scroll', () => {
  let sidebarHeight = sidebar.offsetHeight; //высота сайдбара
  let sidebarContainerHeight = sidebarContainer.offsetHeight; //высота контейнера 
  let neededDistance = sidebarHeight - sidebarContainerHeight; //Расстояние, которое надо пройти, чтобы контейнер остановился
 
  console.log(neededDistance)

  let distanceForTop = sidebar.getBoundingClientRect().top
  if (distanceForTop <= 0 && distanceForTop >= -neededDistance) {
    sidebarContainer.style.position = 'fixed';
    sidebarContainer.style.top = '0';
    sidebarContainer.style.bottom = 'auto'
  } else if (distanceForTop <= -neededDistance) {
    sidebarContainer.style.position = 'absolute';
    sidebarContainer.style.bottom = '0'
    sidebarContainer.style.top = 'auto'
  } else {
    sidebarContainer.style.position = 'absolute';
    sidebarContainer.style.bottom = 'auto'
    sidebarContainer.style.top = '0'
  }
})

let boxes = document.querySelectorAll('.list-with-sidebar__box'); // Основные элементы списка 
let sidebarItems = document.querySelectorAll('.list-with-sidebar__sidebar-item'); //Элементы сайдбара


window.addEventListener('scroll', () => {
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i]; //один контейнер
    let sidebarItem = sidebarItems[i]; // Один элемент списка 
    let boxDistanceForTop = box.getBoundingClientRect().top - 90; //Расстояние до верха при котором должны загораться элементы списка
    let boxHeight = box.offsetHeight; //Высота коробки


    if (boxDistanceForTop <= 0 && boxDistanceForTop >= -boxHeight) {
      sidebarItem.classList.add('list-with-sidebar__sidebar-item_active');
    } else if (boxDistanceForTop <= -boxHeight || boxDistanceForTop >= 0) {
      sidebarItem.classList.remove('list-with-sidebar__sidebar-item_active');
    }
  }
})


let boxTops = document.querySelectorAll('.list-with-sidebar__box-top'); // Заголовок контейтера с номерм 
let boxTexts = document.querySelectorAll('.list-with-sidebar__box-text');

function init() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    for (let i = 0; i < boxTops.length; i++) {

      let boxTop = boxTops[i];
      let boxText = boxTexts[i];
      let box = boxes[i];
      let boxSummaryHeight = `${boxTop.offsetHeight + boxText.offsetHeight}px`;

      box.classList.add('list-with-sidebar__box_unactive');

      if (box.classList.contains('list-with-sidebar__box_unactive')) {
        box.style.maxHeight = `${boxTop.offsetHeight}px`
      } else {
        box.style.maxHeight = boxSummaryHeight
      }





      boxTop.addEventListener('click', () => {
        box.classList.toggle('list-with-sidebar__box_unactive')
        if (box.classList.contains('list-with-sidebar__box_unactive')) {
          box.style.maxHeight = `${boxTop.offsetHeight}px`
        } else {
          box.style.maxHeight = boxSummaryHeight;
        }

      })
    }
  }
}

$(document).ready(function () {
  init();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  init();
}); //Запуск функции при изменении размера