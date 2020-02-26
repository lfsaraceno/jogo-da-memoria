const status404 = () => {
  const $root = document.getElementById("root");
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    #root {
      width: 100%;
      background-image: url(./img/logo-collab-1.svg);
      background-color: white;
      
    }

    .status404 {
      position: relative;
      font-size: 30em;
      text-align: center;      
      top: 50%;
      transform: translateY(-50%);
      color: #f25a70;
    }
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    const h1 = $root.insertAdjacentHTML(
      "beforeend",
      `<h1 class="status404">404</h1>`
    );

    return `
      ${h1}
    `;
  };
  return {
    render: module.render()
  };
};
