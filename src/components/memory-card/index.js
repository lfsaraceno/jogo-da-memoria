function cardBack() {
  const $cardBack = document.createElement("article");

  const $iconGeio = `<img
   src='img/icon-collabcode.svg'
   alt='Geio mascote da CollabCode'
   class='icon'
  />`;

  $cardBack.classList.add("card", "-back");
  $wrapCards.insertBefore($cardBack, null);
  $cardBack.insertAdjacentHTML("afterbegin", $iconGeio);
}

function cardFront() {
  const $cardJs = document.createElement("article");

  const $iconJs = `<img
  src= "img/icon-js.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;
  $cardJs.classList.add("card");
  $wrapCards.insertBefore($cardJs, null);
  $cardJs.insertAdjacentHTML("afterbegin", $iconJs);
}
