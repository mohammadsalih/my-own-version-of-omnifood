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
// this function is to remove the navigation when the user click on one of the links
function close_nav() {
  const all_nav_links = document.querySelectorAll(".main-nav-link");

  all_nav_links.forEach(function (link) {
    link.addEventListener("click", open_nav);
  });
}
// this funcion is to make the navigatation stick to the top
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(sectionHeroEl);

// /////////////////////
// calling the functions
set_year();
close_nav();
