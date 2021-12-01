const navBtn = document.querySelector("#nav-btn");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#close-btn");
const navbar = document.querySelector("#nav");
const date = document.querySelector("#date");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

date.innerHTML = new Date().getFullYear();
