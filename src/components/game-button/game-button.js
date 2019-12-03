const gameButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .button${store.buttonId} {
      width: 50px;
      height: 50px;
      font-family: "comfortaa", sans-serif;
      font-weight: bold;
      color: #f25a70;
      text-shadow: 0 0 2px black;  
      border: 2px solid #f25a70;
      box-sizing: content-box;
      border-radius: 50%;
      letter-spacing: 2px;
      cursor: pointer;
    }
    `;

    $head.insertBefore($style, null);
  };
  module.render = $component => {
    store.buttonId--;
    module._style();
    return `
        <button class="button${store.buttonId}">${$component}</button>
      `;
  };

  return {
    render: module.render
  };
})();
