const hamburger = document.querySelector('#menu');
const nav = document.getElementById('animateme');
const h1 = document.querySelector('h1');

function menu (){
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    h1.classList.toggle('open');
}

hamburger.addEventListener('click',menu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});

