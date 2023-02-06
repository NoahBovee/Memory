const cardArray = [
  {
    name: "Argentina",
    img: "./images/argentina_flag.jpg",
  },
  {
    name: "Brazil",
    img: "./images/2560px-Flag_of_Brazil.svg.png",
  },
  {
    name: "Belgium",
    img: "./images/belgium_flag.png",
  },
  {
    name: "USA",
    img: "./images/2560px-Flag_of_the_United_States.svg.png",
  },
  {
    name: "Denmark",
    img: "./images/Flag_of_Denmark.svg.png",
  },
  {
    name: "France",
    img: "./images/Flag_of_France.png",
  },
  {
    name: "Argentina",
    img: "./images/argentina_flag.jpg",
  },
  {
    name: "Brazil",
    img: "./images/2560px-Flag_of_Brazil.svg.png",
  },
  {
    name: "Belgium",
    img: "./images/belgium_flag.png",
  },
  {
    name: "USA",
    img: "./images/2560px-Flag_of_the_United_States.svg.png",
  },
  {
    name: "Denmark",
    img: "./images/Flag_of_Denmark.svg.png",
  },
  {
    name: "France",
    img: "./images/Flag_of_France.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card); // nu komt blank.png op scherm
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId == optionTwoId) {
    alert("you have clicked the same image");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "./images/white.jpg");
    cards[optionTwoId].setAttribute("src", "./images/white.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
