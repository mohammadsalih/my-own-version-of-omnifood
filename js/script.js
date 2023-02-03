// this function is to set the copy right year to the corrent year
function set_year() {
  const year_element = document.querySelector(".year");
  year_element.textContent = new Date().getFullYear();
}
// this function is to toggle the classes thet we need to make the navbar funcionable
function open_nav() {
  const nav_icon = document.getElementsByClassName("menu-icon");
  const nav = document.getElementsByClassName("main-nav");

  for (i = 0; i < nav_icon.length; i++) {
    nav_icon[i].classList.toggle("icon-hide");
  }
  nav[0].classList.toggle("open-nav");
}

// /////////////////////
// calling the functions
set_year();
