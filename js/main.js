// const to get big carousel
const carouselBig = document.getElementById("carousel-big");
// const for arrows
const topArrow = document.getElementById("top-slider");
const bottomArrow = document.getElementById("bottom-slider");
// const to select carousel items
const carouselBigItem = document.getElementsByClassName("carousel-img");

// * const to create carousel
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// * for cycle to get elements

for (let object of images) {
  const gameInfo = [];
  for (let index in object) {
    gameInfo.push(object[index]);
  }
  carouselImage(gameInfo[0], gameInfo[1], gameInfo[2]);
}

// * showing first option

carouselBigItem[0].classList.remove("hidden");
carouselBigItem[0].classList.add("select");

// * function to genere carousel image

function carouselImage(img, title, description) {
  const carouselCard = document.createElement("div");
  carouselCard.classList.add("carousel-img", "hidden");
  carouselCard.innerHTML = ` 
  <h2>${title}</h2>
  <p>${description}</p>
    `;
  carouselCard.style.backgroundImage = ` url("/${img}") `;

  carouselBig.append(carouselCard);
}

// ! functions to make

topArrow.addEventListener("click", function () {});

bottomArrow.addEventListener("click", function () {});
