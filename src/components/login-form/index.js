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
    const $labelNome = label.render("Nome");
    const $inputNome = input.render({
      id: "name",
      type: "text",
      placeHolder: "CollabCode"
    });

    const $labelEmail = label.render("E-mail");
    const $inputEmail = input.render({
      id: "email",
      type: "e-mail",
      placeHolder: "collab@collabcode.com"
    });

    const $labelSenha = label.render("Senha");
    const $inputSenha = input.render({
      id: "password",
      type: "password",
      placeHolder: "Abcd@123"
    });

    const $labelRepetPassword = label.render("Repetir Senha");
    const $inputRepetPassword = input.render({
      id: "repetPassword",
      type: "password",
      placeHolder: "Abcd@123"
    });
    return {
      labelName: $labelNome,
      inputName: $inputNome,
      labelEmail: $labelEmail,
      inputEmail: $inputEmail,
      labelPassword: $labelSenha,
      inputPassword: $inputSenha,
      labelRepetPassword: $labelRepetPassword,
      inputRepetPassword: $inputRepetPassword
    };
  };

  module.render = () => {
    module._style();

    return `      
      <form class="login-form" action="" metod="" >
      ${module._children().labelEmail}
      ${module._children().inputEmail}
      ${module._children().labelPassword}
      ${module._children().inputPassword}        
      </form>
      
    `;
  };

  return {
    render: module.render
  };
})();
