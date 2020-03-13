const appReload = function() {
  if (localStorage) {
    if (!localStorage.getItem("firstLoad")) {
      localStorage["firstLoad"] = true;
      location.reload();
      return;
    } else localStorage.removeItem("firstLoad");
  }
};
