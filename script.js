/* Change Nav Color on Scroll */

const nav = document.querySelector('#navbar');

if (window.scrollY >= 10) {
    nav.classList.add('scrolled')
}

window.onscroll = () => {
  if (this.scrollY <= 10) {
    nav.classList.remove('scrolled')
    nav.classList.remove('theme-light')
    nav.classList.remove('navbar-light')
    nav.classList.add('navbar-dark')
    nav.classList.add('bg-dark')
  } else {
    nav.classList.add('scrolled')
    nav.classList.add('theme-light')
    nav.classList.add('navbar-light')
    nav.classList.remove('navbar-dark')
    nav.classList.remove('bg-dark')
  }
};


function scrollToNextSection() {
  let  currentSection = document.querySelector('.active-section');
  let  nextSection = currentSection.nextElementSibling;
  nextSection.scrollIntoView();
  console.log(currentSection)
  console.log(nextSection)
  // if (nextSection) {
  //   console.log("Scrolling to")
  //   console.log(nextSection)
  //   nextSection.scrollIntoView();

  //   //remove active-section class
  //   currentSection.classList.remove('active-section')

  //   //assign currentSection variable to nextSection element and then active-section class
  //   currentSection = nextSection
  //   currentSection.classList.add('active-section')

  // }
}