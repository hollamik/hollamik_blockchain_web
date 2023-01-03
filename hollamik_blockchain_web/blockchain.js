const menu=document.querySelector('#mobile-menu')
const menuLink=document.querySelector('.navigation-menu')
const logo=document.querySelector('#navigation-logo')
const body=document.querySelector('body')
// this part will display mobile menu.
const mobileMenu=()=>{
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
    body.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)