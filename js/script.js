function open_nav() {
  const nav_icon = document.getElementsByClassName("menu-icon");
  const nav = document.getElementsByClassName("main-nav-container");

  for (i = 0; i < nav_icon.length; i++) {
    nav_icon[i].classList.toggle("icon-hide");
  }
  nav[0].classList.toggle("open-nav");
}
