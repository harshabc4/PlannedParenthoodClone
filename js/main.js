const nav = document.querySelector(".scroll-bar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // console.log(lastScrollY);
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
    // console.log("going down");
    console.log(window.scrollY);
  } else if (lastScrollY > window.scrollY) {
    nav.classList.remove("nav-hidden");
    console.log("going up");
  }

  lastScrollY = window.scrollY;
});
