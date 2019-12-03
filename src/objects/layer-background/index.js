const layerBackground = (function() {
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
      .wrapper-login {
        width: 100%;
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        position: absolute;
        top: 35%;
      }

      .singup-link,
      .forget-link  {
        position: absolute;
        font-size: 14px;
        font-family: 'Roboto Mono', monospace;
        text-decoration: none;
        color: #fffcee;
        letter-spacing: 3px;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%)
      }

      .forget-link {
        width: 145px;
        height: 20px;
        top: 155px;
        letter-spacing: 1px;
        left: 70%;
      }

      .login-media {
        width: 180px;
        position: relative;
        display: flex;
        justify-content: space-around;
        left: 50%;
        transform: translateX(-50%);
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    const $logoCollabLogin = logoCollab.render();
    const $loginForm = loginForm.render();
    const $loginButton = loginButton.render();
    module._style();
    return `
      <div class="layer-background">
        ${$logoCollabLogin}
        <div class="wrapper-login">
          ${$loginForm}
          <a href="#" class="forget-link">Recuperar Senha</a>
          <div class="login-media">
            <img class="login-social" src="img/icon-git.svg"/>
            <img class="login-social" src="img/icon-face.svg"/>
            <img class="login-social" src="img/icon-insta.svg"/>
          </div>
        </div>
        ${$loginButton}        
        <a href="#" class="singup-link">Cadastrar</a>
        </div>
        `;
  };
  return {
    render: module.render
  };
})();
