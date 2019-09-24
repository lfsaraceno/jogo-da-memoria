cardBack();
cardBack();
cardFront();
cardFront();

const $cardJs = document.createElement("article");
const $cardJava = document.createElement("article");
const $cardC = document.createElement("article");
const $cardCabeca = document.createElement("article");
const $cardCelular = document.createElement("article");
const $cardPHP = document.createElement("article");
const $cardResponsive = document.createElement("article");
const $cardSettings = document.createElement("article");
const $cardWoman = document.createElement("article");

const $cardJs1 = document.createElement("article");
const $cardJava1 = document.createElement("article");
const $cardC1 = document.createElement("article");
const $cardCabeca1 = document.createElement("article");
const $cardCelular1 = document.createElement("article");
const $cardPHP1 = document.createElement("article");
const $cardResponsive1 = document.createElement("article");
const $cardSettings1 = document.createElement("article");
const $cardWoman1 = document.createElement("article");

const $iconJs = `<img
  src= "img/icon-js.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconJava = `<img
  src= "img/icon-java.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconC = `<img
  src= "img/icon-c.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconCabeca = `<img
  src= "img/icon-cabeca.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconCelular = `<img
  src= "img/icon-celular.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconPHP = `<img
  src= "img/icon-php.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconResponsive = `<img
  src= "img/icon-responsivo.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconSettings = `<img
  src= "img/icon-settings.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

const $iconWoman = `<img
  src= "img/icon-Woman.svg"
  alt= "Icone Javascript"
  class= "icon"
  />`;

$cardJava.classList.add("card");
$cardC.classList.add("card");
$cardCabeca.classList.add("card");
$cardCelular.classList.add("card");
$cardPHP.classList.add("card");
$cardResponsive.classList.add("card");
$cardSettings.classList.add("card");
$cardWoman.classList.add("card");

$cardJava1.classList.add("card");
$cardC1.classList.add("card");
$cardCabeca1.classList.add("card");
$cardCelular1.classList.add("card");
$cardPHP1.classList.add("card");
$cardResponsive1.classList.add("card");
$cardSettings1.classList.add("card");
$cardWoman1.classList.add("card");

$wrapCards.insertBefore($cardJava, null);
$wrapCards.insertBefore($cardC, null);
$wrapCards.insertBefore($cardCabeca, null);
$wrapCards.insertBefore($cardCelular, null);
$wrapCards.insertBefore($cardPHP, null);
$wrapCards.insertBefore($cardResponsive, null);
$wrapCards.insertBefore($cardSettings, null);
$wrapCards.insertBefore($cardWoman, null);

$wrapCards.insertBefore($cardJava1, null);
$wrapCards.insertBefore($cardC1, null);
$wrapCards.insertBefore($cardCabeca1, null);
$wrapCards.insertBefore($cardCelular1, null);
$wrapCards.insertBefore($cardPHP1, null);
$wrapCards.insertBefore($cardResponsive1, null);
$wrapCards.insertBefore($cardSettings1, null);
$wrapCards.insertBefore($cardWoman1, null);

$cardJava.insertAdjacentHTML("beforeend", $iconJava);
$cardC.insertAdjacentHTML("beforeend", $iconC);
$cardCabeca.insertAdjacentHTML("beforeend", $iconCabeca);
$cardCelular.insertAdjacentHTML("beforeend", $iconCelular);
$cardPHP.insertAdjacentHTML("beforeend", $iconPHP);
$cardResponsive.insertAdjacentHTML("beforeend", $iconResponsive);
$cardSettings.insertAdjacentHTML("beforeend", $iconSettings);
$cardWoman.insertAdjacentHTML("beforeend", $iconWoman);

$cardJava1.insertAdjacentHTML("beforeend", $iconJava);
$cardC1.insertAdjacentHTML("beforeend", $iconC);
$cardCabeca1.insertAdjacentHTML("beforeend", $iconCabeca);
$cardCelular1.insertAdjacentHTML("beforeend", $iconCelular);
$cardPHP1.insertAdjacentHTML("beforeend", $iconPHP);
$cardResponsive1.insertAdjacentHTML("beforeend", $iconResponsive);
$cardSettings1.insertAdjacentHTML("beforeend", $iconSettings);
$cardWoman1.insertAdjacentHTML("beforeend", $iconWoman);

const $clickCardBack = document.querySelector(".card");
$clickCardBack.addEventListener("click", event => {
  console.log("ae");
});
