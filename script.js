// navburger
const hamburger = document.querySelector(".navtoggler");
const navi = document.querySelector(".burger");

hamburger.addEventListener("click", togglenav);

function togglenav() {
  hamburger.classList.toggle("active");
  navi.classList.toggle("active");
}
// nav
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY < 120) {
    navbar.style.background = "#ffffff";
  } else if (window.scrollY > 120) {
    navbar.style.background = "none";
  }
});
// nav info
const navinfo = document.querySelector(".nav-livraison");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY < 120) {
    navinfo.style.right = 0;
  } else if (window.scrollY > 120) {
    navinfo.style.right = "-2000px";
  }
});

// gestion du Q&A
function toggleAnswer(questionNumber) {
  var answer = document.getElementById("answer" + questionNumber);
  var image = document.querySelector(
    ".question:nth-child(" + questionNumber + ") .question-img"
  );
  answer.classList.toggle("active");
  image.classList.toggle("rotate");
}

// test
const items = document.querySelectorAll(".card-slide");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

let count = 0;

function slideSuivant() {
  items[count].classList.remove("actives");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("actives");
}

suivant.addEventListener("click", slideSuivant);

function slidePrecedente() {
  items[count].classList.remove("actives");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("actives");
}

precedent.addEventListener("click", slidePrecedente);
