const toggle_open = document.getElementById('toggle_open');
const toggle_close = document.getElementById('toggle_close');

const navbar = document.getElementById('navbar');

toggle_open.addEventListener('click', () => {
    navbar.style.top = "0";
});


toggle_close.addEventListener('click', () => {
    navbar.style.top = "-100vh";
});