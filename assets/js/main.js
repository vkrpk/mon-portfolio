const menuOpen = document.getElementById("menu-open");
const menuNotOpen = document.getElementById("menu-not-open");
const nav = document.getElementById("nav");
const menu = document.getElementsByClassName("menu")[0];
const btnMenu = document.getElementsByClassName("btn-hamburger")

function vueMenu() {
  if (nav.classList.contains("nav-open")) {
    nav.classList.remove("nav-open");
    menuOpen.style.display = "none"
    menuNotOpen.style.display = "flex"
  } else {
    nav.classList.add("nav-open")
    menuOpen.style.display = "flex"
    menuNotOpen.style.display = "none"
  }
}
for (let i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", vueMenu);
}

function handle() {
  if (window.onresize) {
    for (let i = 0; i < btnMenu.length; i++) {
      if (window.innerWidth >= 991) {
        btnMenu[i].style.display = "none";
      } else btnMenu[i].style.display = "";
    }
    return true;
  }
}
window.onresize = handle;

const liensMenu = document.getElementsByClassName("lien-menu")

function cacherMenu() {
  if (nav.classList.contains("nav-open")) {
    nav.classList.remove("nav-open")
    menuOpen.style.display = "none"
    menuNotOpen.style.display = "flex"
  }
}
for (let i = 0; i < liensMenu.length; i++) {
  liensMenu[i].addEventListener("click", cacherMenu)
}


