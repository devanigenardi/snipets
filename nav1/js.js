
const navSlide = () => {

    const burger = document.querySelector('.burger-container');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // burger menu lines

    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    burger.addEventListener('click', () => {

        // burger menu lines
        line2.classList.toggle('toggle-burger-middle');
        line1.classList.toggle('toggle-burger-top');
        line3.classList.toggle('toggle-burger-bottom');

        nav.classList.toggle('nav-links-active');
        navLinks.forEach((link) => {
            link.classList.toggle('nav-links-fade')
        })
    })

}

const app = () => {
    navSlide();
}

app();