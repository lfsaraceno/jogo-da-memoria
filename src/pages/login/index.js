(function() {
  const $root = document.querySelector("#root");
  const $layerBackground = layerBackground.render();

  $root.insertAdjacentHTML("beforeend", $layerBackground);
})();
