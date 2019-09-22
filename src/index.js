const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $card = document.createElement("article");
const $circleBack = document.createElement("div");

const $iconGeio = `<img
   src='img/icon-collabcode.svg'
   alt='Geio mascote da CollabCode'
   class='icon'
  />`;
const $icon = `<img
  src= "img/icon-js.png"
  alt= "Icone Javascript"
  class= "icon"
  />`;

$memoryCard.classList.add("memory-card");
$card.classList.add("card");
$circleBack.classList.add("circle-back");

$root.insertBefore($memoryCard, null);
$root.insertBefore($card, null);
$memoryCard.insertAdjacentHTML("afterbegin", $iconGeio);
$card.insertAdjacentElement("afterbegin", $circleBack);
$circleBack.insertAdjacentHTML("afterbegin", $icon);
