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
  let  nextSection
  //if currentSection is last section, set nextSection to landing section.
  if(currentSection.id === "contact"){
      nextSection = document.querySelector("#landing")
  } else {
      nextSection = currentSection.nextElementSibling;
  }

  console.log(currentSection)
  console.log(nextSection)

  if (nextSection) {
    nextSection.scrollIntoView();

    setTimeout(() => {
      nextSection.scrollIntoView({ block: 'center' });

      //remove active-section class from currentSection, and
      // reassign currentSection variable with nextSection element
      console.log(currentSection)
      currentSection.classList.remove('active-section')
      currentSection = nextSection
      currentSection.classList.add('active-section')
      console.log(currentSection)

    }, 0);

  }
}