const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

function menu (){
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
    h1.classList.toggle('show');
}

hamburger.addEventListener('click',menu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});

