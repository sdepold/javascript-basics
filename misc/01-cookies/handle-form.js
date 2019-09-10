const jsonId = "10ryor";

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch(`https://api.myjson.com/bins/${jsonId}`)
    .then(res => res.json())
    .then(data => {
      data.comments = data.comments || [];
      data.comments.push({
        username: document.querySelector("[name=username]").value,
        message: document.querySelector("[name=message]").value
      });
      return data;
    })
    .then(data =>
      fetch(`https://api.myjson.com/bins/${jsonId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
    )
    .then(() => {
      document.cookie = "form=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
      window.location.reload();
    });
});

fetch(`https://api.myjson.com/bins/${jsonId}`)
  .then(res => res.json())
  .then(data => {
    const commentsDiv = document.querySelector("#comments");

    commentsDiv.innerHTML = "";

    (data.comments || []).forEach(comment => {
      const div = document.createElement("div");
      const content = document.createTextNode(
        `${comment.username}: ${comment.message}`
      );

      div.appendChild(content);
      commentsDiv.appendChild(div);
    });
  });

