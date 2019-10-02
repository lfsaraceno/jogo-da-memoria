const creatingCard = (src, alt, nameClass) => `
  <article class="card ${nameClass}">
    <img
    src= ${src}
    alt=${alt}
    class='icon'
    onClick="clickCard()"
    />
  </artcle>  
  `;

const clickCard = () => {
  const $getCard = document.querySelector(".card");
  $getCard.classList.toggle("-back");
};
