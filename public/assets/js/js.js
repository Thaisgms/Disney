const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active')
    })
})

var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    autoplay: {
        delay: 4000,
    },
});