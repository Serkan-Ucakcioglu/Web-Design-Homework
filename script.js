// Dropdown'ları seç
const dropdowns = document.querySelectorAll(".dropdown");

// Her bir dropdown için olay dinleyicileri ekle
dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  // Tıklama ile menüyü aç/kapat
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("open");
      }
    });
    dropdown.classList.toggle("open");
  });
});

// Menü dışında bir yere tıklandığında tüm menüleri kapat
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});
