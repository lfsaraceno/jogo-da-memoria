const loginForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .login-form {
        width: 310px;
        height: 210px;
        position: relative;
        left: 50%;
        top: 7%;
        transform: translateX(-50%);
        overflow: hidden;
      }

      .login-label {
        font-family: 'comfortaa', sans-sarif;
        color: #fffcee;
        margin: 5px;
      }

      .login-input {
        width: 100%;
        display: inline-block;
        padding: 5px;
        border: none;
        border-bottom: 2px solid #fffcee;
        font-family: 'comfortaa', sans-sarif;
        color: #fffcee;
        background: transparent;
        margin: 5px;
        margin-bottom: 20px;

      }
    
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <div class="login-form" >
        <form>
          <label class="login-label" for="login-email">E-mail</label>
          <input class="login-input" id="login-email" type="text" name="name" placeHolder="user@collab.com">
          <label class="login-label" for="login-password">Senha</label>
          <input class="login-input" ig="login-password" type="password" name="passwoed" placeHolder="Abcd@123456">
        </form>
      </div> 
    `;
  };

  return {
    render: module.render
  };
})();
