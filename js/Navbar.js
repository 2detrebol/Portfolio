var navbar = document.querySelector("nav");
var logo = document.querySelector("nav div");
var burger = document.querySelector("nav div button span");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
    logo.classList.add("scrolled");
    burger.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("scrolled");
    burger.classList.remove("scrolled");
  }
};
