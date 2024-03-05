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
});

// Here you are selecting a single element, so no need to use forEach
document.querySelector(".nav-menu").addEventListener("click", () => {
  // When clicking the nav menu, remove the 'active' class from both hamburger menu and nav menu
  hamburger_menu.classList.remove('active');
  navMenu.classList.remove('active');
});



const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_tox677s';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      // Reset the form after successful submission
      form.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

