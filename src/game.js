const grid = document.querySelector(".gridGame");

const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

function changeClass(alertbox, oldOne, newOne) {
  alertbox.classList.remove(oldOne);
  alertbox.classList.add(newOne);
}

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  const alertBox = document.querySelector(".invisible");

  if (disabledCards.length == 18) {
    changeClass(alertBox, "invisible", "visible");
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter == secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard == "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard == "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../src/image/${character}.svg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shufflyArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shufflyArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const btnReloader = document.querySelector("#btnReload");

btnReloader.addEventListener("click", () => {
  location.reload();
});

loadGame();
