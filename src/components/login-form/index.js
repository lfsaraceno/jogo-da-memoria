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
      `;
    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelEmail = label.render("E-mail");
    const $labelSenha = label.render("Senha");
    const $inputEmail = input.render({
      id: "email",
      type: "e-mail",
      placeHolder: "collab@collabcode.com"
    });
    const $inputSenha = input.render({
      id: "senha",
      type: "password",
      placeHolder: "Abcd@123"
    });
    return `
      ${$labelEmail}
      ${$inputEmail}
      ${$labelSenha}
      ${$inputSenha}
    
    `;
  };

  module.render = () => {
    module._style();

    return `      
      <form class="login-form" action="" metod="" >
      ${module._children()}        
      </form>
      
    `;
  };

  return {
    render: module.render
  };
})();
