const $root = document.querySelector("#root");

const $wrapperCard = createCardWrapper();
const $memoryCardBack = creatingCard(
  "img/icon-collabcode.svg",
  "Geio mascote da CollabCode",
  "-back"
);
const $memoryCardJava = creatingCard(
  "img/icon-java.svg ",
  "Icone Java",
  "card"
);
const $memoryCardC = creatingCard("img/icon-c.svg ", "Icone C", "card");
const $memoryCardJS = creatingCard("img/icon-js.svg ", "Icone JS", "card");
const $memoryCardCabeca = creatingCard(
  "img/icon-cabeca.svg ",
  "Icone Cabeça",
  "card"
);

$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardBack);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardBack);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJava);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJava);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardCabeca);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardCabeca);

$root.insertAdjacentElement("beforeend", $wrapperCard);

// const $iconJs = `<img
//   src= "img/icon-js.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconJava = `<img
//   src= "img/icon-java.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconC = `<img
//   src= "img/icon-c.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconCabeca = `<img
//   src= "img/icon-cabeca.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconCelular = `<img
//   src= "img/icon-celular.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconPHP = `<img
//   src= "img/icon-php.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconResponsive = `<img
//   src= "img/icon-responsivo.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconSettings = `<img
//   src= "img/icon-settings.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconWoman = `<img
//   src= "img/icon-Woman.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;
