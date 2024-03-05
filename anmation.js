var typed = new Typed(".name",{
  strings: ["Dondon Bautista", " A Programmer"],
  typeSpeed : 150,
  backSpeed : 100,
  loop : true
})

const hamburger_menu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
hamburger_menu.addEventListener("click", () => {
  hamburger_menu.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".header-icon").forEach(n => n.
  addEventListener("click", ()=>{
    hamburger_menu.classList.remove('active');
  }))

