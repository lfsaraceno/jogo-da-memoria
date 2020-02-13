const socialMedia = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .login-media {
        width: 230px;
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
    module._style();
    const $github = `<img class="login-social" src="img/icon-git.svg"/>`;
    const $facebook = `<img class="login-social" src="img/icon-face.svg"/>`;
    const $instagran = `<img class="login-social" src="img/icon-insta.svg"/>`;

    return {
      github: $github,
      facebook: $facebook,
      instagran: $instagran
    };
  };

  return {
    render: module.render
  };
})();
