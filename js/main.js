const splash = document.getElementById("splash");

// if (!window.sessionStorage.getItem("isExecuted")) {
//     splash.style.visibility = "visible"
//     setTimeout(() => {
//         splash.style.visibility = "hidden"
//     }, 3000)
//     window.sessionStorage.setItem("isExecuted", true);
// }

const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const btnHamburger = document.getElementById("btn-hamburger");
const listHamburger = document.getElementById("list-hamburger");
const loader = document.getElementById("loader");
const showContent = document.getElementById("content");
const btnMenuHref = document.getElementById("btn-menu-href");
listHamburger.style.display = "none";


setTimeout(() => {
  loader.style.animation = "1s fadeIn";
  setTimeout(() => {
    loader.style.visibility = "hidden";
  }, 1000);
}, 2000);

const beforeMovePage = (href) => {
  loader.style.animation = "1.2s fadeOut forwards"
  setTimeout(() => {
    window.location = href
  }, 1200)
}

btnHamburger.addEventListener("click", () => {
  btnHamburger.style.content = `url("../img/cross-small-svgrepo-com.svg")`;
  if (listHamburger.style.display === "none") {
    listHamburger.style.display = "flex";
    listHamburger.style.animation = "1s hamburgerShow";
    setTimeout(() => {
      listHamburger.style.animation = ".5s hamburgerGap";
    }, 1000);
  } else {
    btnHamburger.style.content = `url("../img/hamburger-menu-svgrepo-com.svg")`;
    console.log("hide");
    listHamburger.style.animation = ".5s hamburgerHideGap";
    setTimeout(() => {
      listHamburger.style.animation = "1s hamburgerHide";
    }, 500);
    setTimeout(() => {
      listHamburger.style.display = "none";
    }, 1500);
  }
});

let greetings = [
  {
    img: "img/greeting-hiddev.svg",
  },
  {
    img: "img/greeting-wahid.svg",
  },
];

let count = greetings.length;
let index = 0;

setInterval(() => {
  change(index);
  index += 1;
  if (index >= count) {
    index = 0;
  }
}, 5000);

function change(index) {
  greeting.src = greetings[index]["img"];
  greeting.style.animation = "2s greeting"
  setTimeout(() => {
    greeting.style.animation = "none"
  }, 2000)
}

const skill = document.getElementById("skill-row");
setInterval(() => {
  skill.style.flexDirection = "row-reverse";
  setTimeout(() => {
    skill.style.flexDirection = "row";
  }, 5000);
}, 10000);

const popup = document.getElementById("popup");
const certificate = document.getElementById("certificate");

function showCertificate(img) {
  if (popup.style.visibility == "visible") {
    popup.style.visibility = "hidden";
  } else {
    certificate.src = img;
    popup.style.visibility = "visible";
  }
}
