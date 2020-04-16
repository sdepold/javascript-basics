const storeUrl = "https://api.jsonbin.io/b/5e97f2c6435f5604bb426cfe";
const secretKey =
  "$2b$10$ILsJqiFiN7VCvDFLbEDJreDnrGsJ3OXpXN6H784IgA15muTrtjoDK";

const readData = () => {
  return fetch(`${storeUrl}/latest`, {
    headers: {
      "secret-key": secretKey,
    },
  }).then((res) => res.json());
};

const updateData = (data) => {
  return fetch(storeUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "secret-key": secretKey,
    },
  });
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  readData()
    .then((data) => {
      data.comments = data.comments || [];
      data.comments.push({
        username: document.querySelector("[name=username]").value,
        message: document.querySelector("[name=message]").value,
      });
      return data;
    })
    .then(updateData)
    .then(() => {
      document.cookie = "form=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
      window.location.reload();
    });
});

readData().then((data) => {
  const commentsDiv = document.querySelector("#comments");

  commentsDiv.innerHTML = "";

  (data.comments || []).forEach((comment) => {
    const div = document.createElement("div");
    const content = document.createTextNode(
      `${comment.username}: ${comment.message}`
    );

    div.appendChild(content);
    commentsDiv.appendChild(div);
  });
});
