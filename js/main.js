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
const deskDrop = document.querySelector('.learn-desktop-dropdown')
const arrow = document.querySelector('.get-inv-arr')
const getinv = document.querySelector('.get-involved-buttonzzz')



// learnBtn.addEventListener('mouseover', learnDesktopDropdownHide)
// learnBtn.addEventListener('mouseout', learnDesktopDropdownShow)
// deskDrop.addEventListener('mouseover', learnDesktopDropdownHide)
// deskDrop.addEventListener('mouseout', learnDesktopDropdownShow)


// getinv.addEventListener('mouseover', learnDesktopDropdownShow)
// getinv.addEventListener('mouseover', learnDesktopDropdownShow)

function learnDesktopDropdownShow(){

   //  learnBtn.classList.add('open');
    arrow.classList.add('active');
   //  deskDrop.classList.remove('quick-transition');
}


function learnDesktopDropdownHide(){
   arrow.classList.add('active');
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