// const to get big carousel
const carouselBig = document.getElementById("carousel-big");

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

let card = carouselImage();
console.log(card);
carouselBig.append(card);

function carouselImage() {
  const carouselCard = document.createElement("div");
  carouselCard.classList.add("carousel-img", "d-flex");
  carouselCard.innerHTML = `
  
  <h2>Lorem ipsum dolor sit.</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem eveniet
    animi reiciendis impedit consequuntur cum asperiores natus ratione? Alias
    nemo voluptatibus nisi magnam vitae quis, sapiente minima ab amet?
  </p>

    `;
  carouselCard.style.backgroundImage = ` url("/img/01.webp") `;
  return carouselCard;
}
