function getCookies() {
  return document.cookie
    .split(";")
    .filter((frag) => !!frag)
    .reduce((acc, item) => {
      const split = item.split("=");
      return { ...acc, [split[0].trim()]: split[1] };
    }, {});
}

window.addEventListener("load", function () {
  
});
