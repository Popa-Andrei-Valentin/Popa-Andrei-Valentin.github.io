`use strict`;
const toggleBtn = document.getElementsByClassName(`toggle-btn`)[0];
const navbarLinks = document.getElementsByClassName(`navbar-links`)[0];

toggleBtn.addEventListener(`click`, () => {
  navbarLinks.classList.toggle(`active`);
});

// Copy email - click
let x;
const email = document.getElementById(`email`);
const notification = document.querySelector(`.notfication-contaier`);
console.log(notification);

console.log(email);

email.addEventListener(`click`, () => {
  clearTimeout(x);
  navigator.clipboard.writeText(`andrei_popa2009@icloud.com`);
  // alert(`Email copied to clipboard`);

  notification.style.opacity = "100%";
  x = setTimeout(() => {
    notification.style.opacity = "0%";
  }, 2000);
});

// Animation order - // DESKTOP VERSION //
// NAVIGATION (1  2  3)

function animationOrder(x) {
  if (x.matches) {
    document.querySelector(`.about`).classList.add(`animate-nav`);

    document.querySelector(`.about`).addEventListener(`animationend`, () => {
      document.querySelector(`.projects-nav`).classList.add(`animate-nav`);
    });

    document
      .querySelector(`.projects-nav`)
      .addEventListener(`animationend`, () => {
        document.querySelector(`.contact-nav`).classList.add(`animate-nav`);
      });

    // HERO ( 4 5 6 )
    const hero = document.querySelector(`.hero`);
    const heroText = hero.querySelector(`.hero-text`);
    console.log(hero);
    document
      .querySelector(`.contact-nav`)
      .addEventListener(`animationend`, () => {
        hero.classList.add(`animate-hero`);
      });

    hero.addEventListener(`animationend`, () => {
      document
        .querySelector(`.sticky-icons`)
        .classList.add(`animate-sticky-left`);
    });

    document
      .querySelector(`.sticky-icons`)
      .addEventListener(`animationend`, () => {
        document
          .querySelector(`.sticky-email`)
          .classList.add(`animate-sticky-right`);
      });
  } else {
    document.querySelector(`.projects-nav`).setAttribute(`href`, `#mobile`);
  }
}

const desktop = window.matchMedia(`(min-width:1100px)`);
animationOrder(desktop);
// desktop.addEventListener(desktop);

//  ! Trb optimizate animatiile pentru mobile
// Project section nu are titlu pt ca are acelasi nume ca un buton din nav probabil
