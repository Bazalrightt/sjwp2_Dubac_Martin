const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

function addItem() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;          // textContent sprječava ubacivanje HTML-a

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => li.remove());

  li.append(span, removeBtn);
  list.appendChild(li);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItem();
});
