const nav = document.querySelector('.scroll-bar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
   console.log(lastScrollY)
   if (lastScrollY > 120){
      nav.classList.add('nav-hidden')
      console.log('going down')
   }else if(lastScrollY > window.scrollY){
      nav.classList.remove('nav-hidden')
      console.log('going up')
   }

   lastScrollY = window.scrollY;
})

const learnBtn = document.querySelector('.learn-button');
const deskDrop = document.querySelector('#LearnDesktopDropdown')
let menuOpen = false;
learnBtn.addEventListener('mouseover', () => {
    if(!menuOpen) {
        learnBtn.classList.add('open');
        deskDrop.classList.remove('hidden')
        deskDrop.classList.add('fade-in')
        main.classList.add('repositioned')
        // main.classList.add('ease-in')

        menuOpen = true;
    }else {
        learnBtn.classList.remove('open');
        deskDrop.classList.add('hidden')
        main.classList.remove('repositioned')
        menuOpen = false;
    }
})
