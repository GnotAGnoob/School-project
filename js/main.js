//mobile nav toggler
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".site-header .navbar");
const navLinks = document.querySelectorAll(".site-header .navbar :is(.navbar_category,.navbar_subcategory)");

//hamburger activation
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    const active = navMenu.getAttribute("data-active");

    if(active==="false"){
        navMenu.setAttribute("data-active",true);
        hamburger.setAttribute("aria-expanded",true);
    }else if(active==="true"){
        navMenu.setAttribute("data-active",false);
        hamburger.setAttribute("aria-expanded",false);
    }
    
    //document.documentElement.classList.toggle("stop-scrolling");
}

//link deactivate mobile menu
navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navMenu.setAttribute("data-active",false);
    hamburger.setAttribute("aria-expanded",false);
    //document.documentElement.classList.remove("stop-scrolling");
}