/* Change Nav Color on Scroll */

const nav = document.querySelector("#navbar");

if (window.scrollY >= 10) {
  nav.classList.add("scrolled");
}

window.onscroll = () => {
  if (this.scrollY <= 10) {
    nav.classList.remove("scrolled");
    nav.classList.remove("theme-light");
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
    nav.classList.add("theme-dark");
  } else {
    nav.classList.add("scrolled");
    nav.classList.add("theme-light");
    nav.classList.add("navbar-light");
    nav.classList.remove("navbar-dark");
    nav.classList.remove("theme-dark");
  }
};

let currentSection = document.querySelector(".active-section");
let nextSection = null;

function scrollToNextSection() {
  //if currentSection is last section, set nextSection to landing section.
  if (currentSection.id === "contact") {
    nextSection = document.querySelector("#landing");
  } else {
    nextSection = currentSection.nextElementSibling;
  }

  if (nextSection) {
    //scrollIntoView works properly inside setTimeout o_O ?
    setTimeout(() => {
      nextSection.scrollIntoView({ block: "start" });

      //remove active-section class from currentSection, and
      // reassign currentSection variable with nextSection element
      currentSection.classList.remove("active-section");
      currentSection = nextSection;
      currentSection.classList.add("active-section");
    }, 0);
  }
}

function setCurrentSection(id) {
  currentSection.classList.remove("active-section");
  console.log(document.getElementById(id));
  currentSection = document.getElementById(id);
  currentSection.classList.add("active-section");

  nextSection = currentSection.nextElementSibling;
}
