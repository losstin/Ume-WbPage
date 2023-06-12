// var navbar = document.querySelector(".navbar");
// var bars = document.querySelector('.fa-bars')
//     function showMenu(params) {
//         // navbar.style.right = "0";

//     }
//     function hideMenu(params) {
//         // middle-nav.style.right = "-200px";
//         bars.style.backgroundColor  = 'maroon';
//     }

// var bars = document.querySelector('.fa-bars')
// var subcon = document.querySelector('.sub-container')
// var top = document.querySelector('.top-nav')
// var middle = document.querySelector('.middle-nav')
// var mleft = document.querySelector('.middle-left')
// var mlefta = document.querySelector('.middle-left a')
// var mcenter = document.querySelector('.middle-center')
// var mright = document.querySelector('.middle-right')
// var sub = document.querySelector('.sub-nav')

// bars.addEventListener('click', dropMenu)

// function dropMenu(){
//     subcon.classList.add('flexcol')
//     middle.classList.add('flexcol')
//     mleft.classList.add('flexcol')
//     mcenter.classList.add('flexcol')
//     mright.classList.add('flexcol')
//     mlefta.classList.toggle('remove')
//     mright.classList.add('show')
//     sub.classList.add('show')
// }
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-responsive");
console.log("navMenu", navMenu)
console.log("hamburger", hamburger)


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("mobileMenu")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}