/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')


const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.home__subtitle' ,{delay:200, origin:'top'})
sr.reveal('.home__title' ,{delay:200, origin:'top'})
sr.reveal('.home__description' ,{delay:200, origin:'top'})
sr.reveal('.home__button' ,{delay:200, origin:'top'})
sr.reveal('.home__img-2' ,{delay:200, origin:'bottom'})
sr.reveal('.home__img-3' ,{delay:600, origin:'bottom'})
sr.reveal('.home__img-4' ,{delay:1300, origin:'righ'})
sr.reveal('.home__img-1' ,{delay:1000, origin:'bottom'})
sr.reveal('.home__bird-1' ,{delay:300, origin:'left'})
sr.reveal('.home__bird-2' ,{delay:300, origin:'right'})