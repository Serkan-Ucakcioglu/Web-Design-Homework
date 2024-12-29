// Dropdown'ları seç
const dropdowns = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.querySelector(".icon");

// Her bir dropdown için olay dinleyicileri ekle
dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  // Hover veya tıklama ile menüyü aç
  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("open");
  });

  // Fare menü dışına çıkarsa menüyü kapat
  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("open");
  });

  // Menü dışında bir yere tıklandığında menüyü kapat
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});
