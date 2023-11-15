const buttomElem = document.querySelector('#open-modal');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.close')) {
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
}

buttomElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);


// Прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        nav.classList.remove('show');
    })
}

// Шапка
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.scrollY > 200) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

// Burger 

let navToggle = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');
navToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('show');
})

// Крестик при открытии меню
const burgerItem = document.querySelector('.burger__item');
burgerItem.addEventListener('click', function () {
    burgerItem.classList.toggle('active');
});

// Удаление классов при использовании burgerMenu

let menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('show');
        burgerItem.classList.remove('active')
    });
});
