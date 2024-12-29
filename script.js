const hamburgerBtn = document.querySelector(".icon");
const dropdowns = document.querySelectorAll(".dropdown");
const closeNavbar = document.querySelector(".close");
const responsiveNavBar = document.querySelector(".responsive-navbar");
const responsiveDropDown = document.querySelector(".dropdown-menu2");
const responsiveDrop = document.querySelector(".dropdown-responsive");
const caret = document.querySelector(".caret");

hamburgerBtn.addEventListener("click", () => {
  responsiveNavBar.classList.add("open");
});
closeNavbar.addEventListener("click", () => {
  responsiveNavBar.classList.remove("open");
});

dropdowns.forEach((dropdown) => {
  const menu = dropdown.querySelector(".dropdown-menu");

  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("open");
  });

  dropdown.addEventListener("mouseleave", (e) => {
    if (e.relatedTarget && dropdown.contains(e.relatedTarget)) return;
    dropdown.classList.remove("open");
  });
});

responsiveDrop.addEventListener("click", () => {
  responsiveDropDown.classList.toggle("toggle");
  caret.classList.toggle("rotate");
});
