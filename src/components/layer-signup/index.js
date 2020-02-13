const layersignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .layer-background {
        max-width: 360px;
        height: 750px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        background-image: linear-gradient(180deg, #f25a70 0%, #3a4042)    
      }

      .title-login {
        width: 100%;
        display: inline-block;
        color: #3a4042;
        position: relative;
        bottom: 270px;
        text-align: center;

      }
      .wrapper-signup {
        width: 100%;
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        position: absolute;
        top: 35%;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $logoCollabLogin = logoCollab.render();
    const $signupForm = signupForm.render();
    const $signupButton = signupButton.render();

    return {
      logo: $logoCollabLogin,
      signup: $signupForm,
      button: $signupButton
    };
  };

  module.render = () => {
    module._style();
    return `
      <div class="layer-background">
        ${module._children().logo}
        <h1 class="title-login">Cadastrar</h1>
        <div class="wrapper-signup">
          ${module._children().signup}
          
        </div>
        ${module._children().button}        
      </div>
    `;
  };
  return {
    render: module.render
  };
})();
