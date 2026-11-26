const colors = ["#ff4545", "#0fa3b1", "#f5a623", "#7b61ff", "#2ecc71", "#ff6fb5"];
let index = 0;

const btn = document.getElementById("changeBtn");

btn.addEventListener("click", () => {
  index = (index + 1) % colors.length;
  document.body.style.backgroundColor = colors[index];
});
