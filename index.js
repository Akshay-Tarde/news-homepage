const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const nav = document.querySelector('nav'); 
// console.log(openMenuBtn);
// console.log(closeMenuBtn);
// console.log(nav);

function handleOpen() {
    nav.classList.add('open-nav');
    document.querySelector('body').classList.add('body-bg');
}
openMenuBtn.addEventListener('click', handleOpen);

function handleClose() {
    nav.classList.remove('open-nav');
    document.querySelector('body').classList.remove('body-bg');
}
closeMenuBtn.addEventListener('click', handleClose);