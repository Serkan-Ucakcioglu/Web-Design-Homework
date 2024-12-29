const hamburgerBtn = document.querySelector(".icon");
const dropdowns = document.querySelectorAll(".dropdown");

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
