function getCookies() {
  return document.cookie
    .split(";")
    .filter((frag) => !!frag)
    .reduce((acc, item) => {
      const split = item.split("=");
      return { ...acc, [split[0].trim()]: split[1] };
    }, {});
}

function getImageComment(imageId) {
  return decodeURIComponent(getCookies()[`image-${imageId}`] || "");
}

function persistImageComment(imageId, comment) {
  document.cookie = `image-${imageId}=${encodeURIComponent(comment)}`;
}

window.addEventListener("load", function () {
  const form = document.querySelector(".create-comment form");
  const textarea = form.querySelector("#comment-content");

  if (!textarea) {
    return;
  }

  const imageId = Number(textarea.getAttribute("data-image-id"));

  textarea.value = getImageComment(imageId);
  textarea.addEventListener("keyup", (e) => {
    persistImageComment(imageId, e.target.value);
  });

  form.addEventListener("submit", () => {
    persistImageComment(imageId, "");
  });
});
