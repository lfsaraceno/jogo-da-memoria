const signupButton = (function() {
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

      .button${store.buttonId}:hover {
        text-shadow: 0 0 5px #f25a70;
        box-shadow: inset 0 0 12px #f25a70;


      }
      
    
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    const $signupButton = gameButton.render("Sign Up");
    module._style();
    return `
    <div class="login-button">
    ${$signupButton}
    </div>
    
    `;
  };
  return {
    render: module.render
  };
})();
