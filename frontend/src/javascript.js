function toggleMenu() {
  const MenuToggle = document.querySelector(".toggle");
  const banner = document.querySelector(".banner");

  MenuToggle.classList.toggle("active");
  banner.classList.toggle("active");
}
