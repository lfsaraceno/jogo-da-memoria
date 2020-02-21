const eyePassword = (function() {
  module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .eye-password {
      width: 24px;
      height: 15px;
      display: block;
      text-indent: -9999px;
      background: url(img/icon-eye.svg) no-repeat center;
      background-size: cover;
      cursor: pointer;
      position: relative;
      top: -20%;
      left: 90%;
    }
    `;
    $head.insertBefore($style, null);
  };

  module.handleClick = () => {
    console.log("ae!");
  };

  module.render = attrFor => {
    module._style();
    return `
      <label 
        for=${attrFor}
        class="eye-password" 
        onClick="eyePassword.handleClick()">Mostrar Senha</label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
