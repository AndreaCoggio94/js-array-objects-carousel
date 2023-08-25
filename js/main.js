// ** Global

// const to get big carousel
const carouselBig = document.getElementById("carousel-big");
// const to get small carousel alias thumbnail
const carouselSmall = document.getElementById("carousel-small");
// const for arrows
const topArrow = document.getElementById("top-slider");
const bottomArrow = document.getElementById("bottom-slider");
// const to select carousel items
const carouselBigItem = document.getElementsByClassName("carousel-img");
// const to select thumbnail items
const thumbnailItem = document.getElementsByClassName("small-thumbnail");

// * carousel Index

let carouselIndex = 0;

// * const to generate carousel from
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
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

// * function to add click event to the buttons

topArrow.addEventListener("click", function () {
  if (carouselIndex === 0) {
    removeCard(carouselIndex);
    carouselIndex = carouselBigItem.length - 1;
    changeCard(carouselIndex);
  } else {
    removeCard(carouselIndex);
    carouselIndex--;
    changeCard(carouselIndex);
  }
});

bottomArrow.addEventListener("click", function () {
  if (carouselIndex < carouselBigItem.length - 1) {
    removeCard(carouselIndex);
    carouselIndex++;
    changeCard(carouselIndex);
  } else {
    removeCard(carouselIndex);
    carouselIndex = 0;
    changeCard(carouselIndex);
  }
});

// function to remove card

function removeCard(index) {
  carouselBigItem[index].classList.remove("select");
  carouselBigItem[index].classList.add("hidden");
}

// function to change card

function changeCard(index) {
  carouselBigItem[index].classList.add("select");
  carouselBigItem[index].classList.remove("hidden");
}

// ** Thumbnails

for (let object of images) {
  createThumbnail(object.image);
}

function createThumbnail(img) {
  const Thumbnail = document.createElement("div");
  Thumbnail.classList.add("small-thumbnail");
  Thumbnail.style.backgroundImage = ` url("/${img}") `;

  this.addEventListener("click", function () {});

  carouselSmall.append(Thumbnail);
}

// * showing first option

carouselBigItem[0].classList.remove("hidden");
carouselBigItem[0].classList.add("select");
thumbnailItem[0].classList.add("bordered");
