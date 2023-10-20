const buttomElem = document.querySelector('#open-modal');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closeModal = event =>{
    const target = event.target;

    if(target === modalElem || target.closest('.close')) {
        modalElem.style.opacity = 0;

        setTimeout(()=> {
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

for(let anchor of anchors) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Шапка
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if(window.scrollY > 200) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}
