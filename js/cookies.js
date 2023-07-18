
//COOKIES

let cookies = document.querySelector('.cookies');
let cookiesBtn = document.querySelector('.cookies__accept');

cookiesBtn.addEventListener('click', () => {
  cookies.classList.add('cookies_accepted');
})