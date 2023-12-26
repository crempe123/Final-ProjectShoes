let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick =() => {
    menu.classList.toggle('active');
    menu.classList.toggle('active');
}

// hide menu and search box on scroll
window.onscroll =() => {
    menu.classList.remove('active');
    menu.classList.toggle('active');

}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classlist.remove('shadow' , window.scrollY> 0);
});
