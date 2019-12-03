const loginButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `

      .button${store.buttonId} {
        position: absolute;
        width: 90%;
        height: 50px;
        border-radius: 25px;
        border: 3px solid #f25a70;
        color: #f25a70;
        font-family: 'comfortaa', sans-sarif;
        top: 80%;
        left: 50%;
        letter-spacing: 5px;
        font-size:16px;
        background: transparent;
        transform: translateX(-50%);
      }
      
    
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    const logInButton = gameButton.render("Login");
    module._style();
    return `
    <div class="login-button">
    ${logInButton}
    </div>
    
    `;
  };
  return {
    render: module.render
  };
})();
