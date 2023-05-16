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