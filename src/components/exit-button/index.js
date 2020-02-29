const exitButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    
    .button${store.buttonId} {
      position: absolute;
      border-radius: 30px;
      border: 3px solid #f25a70;
      color: #fffcee;
      font-family: 'comfortaa', sans-sarif;
      top: 7%;
      left: 5%;
      letter-spacing: 0.1em;
      font-size: 0.7em;
      background: #3a4042;
    }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $buttonExit = gameButton.render("exit");
    module._style();

    return `
      <div class="exitbutton" 
        onClick="exitButton.handleClick()">
          ${$buttonExit}
      </div>
    
    `;
  };

  module.handleClick = () => {
    location.hash = "#/login";
    location.reload();
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
