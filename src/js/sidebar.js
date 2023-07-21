let sidebar = document.querySelector('.list-with-sidebar__sidebar'); //сайдбар
let sidebarContainer = sidebar.querySelector('.list-with-sidebar__sidebar-inner-container'); //Контейнер сайдбара

if (sidebar) {
  window.addEventListener('scroll', () => {
    let headerHeight = document.querySelector('.header').offsetHeight; //Высота хедера
    let sidebarHeight = sidebar.offsetHeight; //высота сайдбара
    let sidebarContainerHeight = sidebarContainer.offsetHeight; //высота контейнера 
    let neededDistance = (sidebarHeight - sidebarContainerHeight - headerHeight); //Расстояние, которое надо пройти, чтобы контейнер остановился

    //Если хедер статичен, то меняем значение headerHeight на 0!!!!

    let distanceForTop = sidebar.getBoundingClientRect().top
    if (distanceForTop <= headerHeight && distanceForTop >= -neededDistance) {
      sidebarContainer.style.position = 'fixed';
      sidebarContainer.style.top = `${headerHeight}px`;
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
}


let boxes = document.querySelectorAll('.list-with-sidebar__box'); // Основные элементы списка 
let sidebarItems = document.querySelectorAll('.list-with-sidebar__sidebar-item'); //Элементы сайдбара


window.addEventListener('scroll', () => {
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i]; //один контейнер
    let sidebarItem = sidebarItems[i]; // Один элемент списка 
    let boxDistanceForTop = box.getBoundingClientRect().top - 90; //Расстояние до верха при котором должны загораться элементы списка
    let boxHeight = box.offsetHeight; //Высота коробки


    if (boxDistanceForTop <= 100 && boxDistanceForTop >= -boxHeight) {
      sidebarItem.classList.add('list-with-sidebar__sidebar-item_active');
    } else if (boxDistanceForTop <= -boxHeight || boxDistanceForTop >= 100) {
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



sidebarItems.forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 100;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }



  )

})