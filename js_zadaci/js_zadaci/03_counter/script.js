let count = 0;

const display = document.getElementById("count");
const plus    = document.getElementById("increase");
const minus   = document.getElementById("decrease");

function render() {
  display.textContent = count;
}

plus.addEventListener("click", () => {
  count++;
  render();
});

minus.addEventListener("click", () => {
  count--;
  render();
});
