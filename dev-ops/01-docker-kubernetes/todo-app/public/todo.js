document.querySelector(".add-todo a").addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.querySelector("form");

  form.classList.toggle("hidden");
});

document.querySelector("#create-task-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.querySelector("form");

  const task = {
    title: form.querySelector('[name="title"]').value,
    description: form.querySelector('[name="description"]').value,
  };

  createItem(task).then(() => {
    form.reset();
  });
});

function renderTask(task) {
  return `
    <li class="task ${task.status}" data-task-id=${task.id}>
        <span class="title">
            <i class="far fa-circle complete"></i>
            ${task.title}
        </span>
        <i class="far fa-trash-alt delete-task"></i>
        <i class="far fa-file-alt toggle-description"></i>
        <p class="description hidden">${task.description}</p>
    </li>
`;
}

function createItem(data) {
  return fetch("http://localhost:5000/tasks", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.ok && fetchItems().then(renderItems));
}

function fetchItems() {
  return fetch("http://localhost:5000/tasks").then((res) => res.json());
}

function renderItems(items) {
  const parent = document.querySelector("#todos");

  parent.innerHTML = "";

  const ul = document.createElement("ul");

  ul.innerHTML = items.map(renderTask).join("");
  parent.appendChild(ul);

  attachListeners();
}

function attachListeners() {
  document.querySelectorAll(".task").forEach((task) => {
    const title = task.querySelector(".toggle-description");
    const description = task.querySelector(".description");
    const deleteButton = task.querySelector(".delete-task");
    const completeButton = task.querySelector(".complete");

    title.addEventListener("click", () => {
      description.classList.toggle("hidden");
    });

    deleteButton.addEventListener("click", () => {
      console.log("hello");
      fetch(`http://localhost:5000/tasks/${task.dataset.taskId}`, {
        method: "DELETE",
      }).then(() => task.remove());
    });

    completeButton.addEventListener("click", () => {
      fetch(`http://localhost:5000/tasks/${task.dataset.taskId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "completed" }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => res.ok && fetchItems().then(renderItems));
    });
  });
}

fetchItems().then(renderItems);
