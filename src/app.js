window.onload = function() {

  //generate randomness for suit and number
  const suits = ['♦', '♥', '♠', '♣'];
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];
  console.log(randomSuit);

  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomValue = values[randomValueIndex];
  console.log(randomValue);

  //select rows and insert icons / value
  const topRow = document.querySelector(".top-row");
  const topRowElement = document.createElement("p");
  topRowElement.classList.add("top-icon");
  const topTextNode = document.createTextNode(randomSuit);
  topRowElement.appendChild(topTextNode);
  topRow.appendChild(topRowElement);
  
  const middleRow = document.querySelector(".middle-row");
  const middleRowElement = document.createElement("p");
  const middleTextNode = document.createTextNode(randomValue);
  middleRowElement.appendChild(middleTextNode);
  middleRow.appendChild(middleRowElement);
  
  const bottomRow = document.querySelector(".bottom-row");
  const bottomRowElement = document.createElement("p");
  bottomRowElement.classList.add("bottom-icon");
  const bottomTextNode = document.createTextNode(randomSuit);
  bottomRowElement.appendChild(bottomTextNode);
  bottomRow.appendChild(bottomRowElement);

  if (randomSuit === '♦' || randomSuit === '♥') {
    bottomRowElement.classList.add("red-text");
    topRowElement.classList.add("red-text");
    middleRowElement.classList.add("red-text");
  }
}