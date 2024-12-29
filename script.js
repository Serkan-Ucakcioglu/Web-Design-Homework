const hamburgerBtn = document.querySelector(".icon");
const dropdowns = document.querySelectorAll(".dropdown");
const closeNavbar = document.querySelector(".close");
const responsiveNavBar = document.querySelector(".responsive-navbar");
const responsiveDropDown = document.querySelector(".dropdown-menu2");
const responsiveDrop = document.querySelector(".dropdown-responsive");
const caret = document.querySelector(".caret");

// Hamburger butonuna tıklanınca navbar'ı aç
hamburgerBtn.addEventListener("click", () => {
  responsiveNavBar.classList.add("open");
});

// Navbar'ı kapatma butonuna tıklanınca navbar'ı kapat
closeNavbar.addEventListener("click", () => {
  responsiveNavBar.classList.remove("open");
});

// Dropdown menüsünün tıklanabilir olmasını sağla
responsiveDrop.addEventListener("click", (e) => {
  e.preventDefault(); // Linkin varsayılan davranışını engelle
  responsiveDropDown.classList.toggle("toggle");

  // İkonun dönüşmesini sağla
  caret.classList.toggle("rotate");
});
