const urlParams = new URLSearchParams(window.location.search);
const projectIndex = urlParams.get("project");

const btnUp = document.getElementById("btn-items-up");
const btnDown = document.getElementById("btn-items-down");
const projectImage = document.getElementById("project-image");
const projectName = document.getElementById("detail-name");
const projectDescription = document.getElementById("detail-description");
const projectStack = document.getElementById("detail-stack");
const btnView = document.getElementById("btn-view");
const itemsPosition = document.getElementById("items-position");

const images = [
  {
    name: "BDP MART",
    images: [
      "../img/projects/bdp-mart/img1.svg",
      "../img/projects/bdp-mart/img2.svg",
      "../img/projects/bdp-mart/img3.svg",
      "../img/projects/bdp-mart/img4.svg",
      "../img/projects/bdp-mart/img5.svg",
    ],
    description:
      "A web based simple cashier app. This app have many features, like authentication, admin panel, product store menu, print invoice & etc. This application was actually created as a practice tool for the business & marketing section at my school.",
    stack: [
      "../img/skills/html.svg",
      "../img/skills/bootstrap.png",
      "../img/skills/php-logo.svg",
      "../img/skills/js.png",
      "../img/skills/mysql8604.logowik.com.webp",
    ],
    url: "https://github.com/Hiddev666/bdpmart/",
  },
  {
    name: "Personal Portfolio",
    images: [
      "../img/projects/personal-portfolio/img1.svg",
      "../img/projects/personal-portfolio/img2.svg",
      "../img/projects/personal-portfolio/img3.svg",
    ],
    description:
      "My personal portfolio to be a medium to tell what I have done.",
    stack: [
      "../img/skills/html.svg",
      "../img/skills/css.png",
      "../img/skills/js.png",
    ],
    url: "https://github.com/Hiddev666/hiddev-portfolio",
  },
];

let projectSelected = images[projectIndex];

itemsPosition.innerHTML = `1 of ${projectSelected.images.length}`;
projectImage.src = projectSelected.images[0];
projectName.innerHTML = projectSelected.name;
projectDescription.innerHTML = projectSelected.description;
btnView.addEventListener("click", () => {
  window.location = projectSelected.url;
});

let stackList = projectSelected.stack;
stackList.forEach((element) => {
  const stackImage = document.createElement("img");
  stackImage.src = element;
  projectStack.appendChild(stackImage);
});

let position = 1;
btnUp.addEventListener("click", () => {
  console.log("Up Clicked!");
  let index = images[projectIndex];
  console.log(position);
  itemsPosition.innerHTML = `${position + 1} of ${projectSelected.images.length}`
  console.log(index.images[position]);
  projectImage.src = index.images[position];
  if (position === index.images.length - 1) {
    position = 0;
  } else {
    position++;
  }
});

btnDown.addEventListener("click", () => {
  console.log("Down Clicked!");
  let index = images[projectIndex];
  console.log(position);
  console.log(index.images[position]);
  itemsPosition.innerHTML = `${position + 1} of ${projectSelected.images.length}`
  projectImage.src = index.images[position];
  if (position === index.images.length - 1) {
    position = 0;
  } else {
    position++;
  }
});
