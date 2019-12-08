const input = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .input {
        width: 100%;
        display: block;
        padding: 5px;
        border-bottom: 2px solid #fffcee;
        color: #fffcee;
        background: transparent;
        margin: 5px;
        margin-bottom: 20px;
    }
    `;
    $head.insertBefore($style, null);
  };

  module.render = ({
    id: id,
    type: type = "text",
    name: name,
    placeHolder: placeHolder
  }) => {
    module._style();

    return `
      <input class="input" id=${id} type=${type} name=${name} placeHolder=${placeHolder}>
    
    `;
  };

  return {
    render: module.render
  };
})();
