const nav = document.querySelector(".scroll-bar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  console.log(lastScrollY);
  if (lastScrollY > 120) {
    nav.classList.add("nav-hidden");
    console.log("going down");
  } else if (lastScrollY > window.scrollY) {
    nav.classList.remove("nav-hidden");
    console.log("going up");
  }

  lastScrollY = window.scrollY;
});

// const learnBtn = document.querySelector('.learn-button');

// const allArrowContainers = document.querySelectorAll('.arrow-container')
// allArrowContainers.forEach(el => el.querySelector())

// const arrow = document.querySelector('.arrow-container')
// const allDropDrownButtons = document.querySelectorAll('.has-dropdown')
// allDropDrownButtons.forEach (el => el.addEventListener('mouseover', learnDesktopDropdownShow))
// allDropDrownButtons.forEach (el => el.addEventListener('mouseout', learnDesktopDropdownHide))

// learnBtn.addEventListener('mouseover', learnDesktopDropdownShow)
// learnBtn.addEventListener('mouseout', learnDesktopDropdownHide)

// deskDrop.addEventListener('mouseover', learnDesktopDropdownHide)
// deskDrop.addEventListener('mouseout', learnDesktopDropdownShow)

// getinv.addEventListener('mouseover', learnDesktopDropdownShow)
// getinv.addEventListener('mouseover', learnDesktopDropdownShow)

function learnDesktopDropdownShow() {
  //  learnBtn.classList.add('open');
  arrow.classList.add("arrow-translate");
  arrow.classList.remove("reverse-arrow-translate");
  //  deskDrop.classList.remove('quick-transition');
}

function learnDesktopDropdownHide() {
  arrow.classList.add("reverse-arrow-translate");
  arrow.classList.remove("arrow-translate");
}

//     learnBtn.addEventListener('mouseout', learnDesktopDropdownxxx)
//     learnBtn.addEventListener('mouseover', learnDesktopDropdown)

//     function learnDesktopDropdown(){
//         if(!menuOpen) {
//             learnBtn.classList.add('open');
//             deskDrop.classList.remove('hidden')
//             deskDrop.classList.add('fade-in')
//             main.classList.add('repositioned')
//             // main.classList.add('ease-in')

//             menuOpen = true;
//         }else {
//             learnBtn.classList.remove('open');
//             deskDrop.classList.add('hidden')
//             main.classList.remove('repositioned')
//             menuOpen = false;
//         }
//     }

// function learnDesktopDropdownxxx(){
//             learnBtn.classList.remove('open');
//             deskDrop.classList.add('hidden')
//             main.classList.remove('repositioned')
//             menuOpen = false;
//         }
