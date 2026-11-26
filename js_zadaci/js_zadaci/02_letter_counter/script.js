const input  = document.getElementById("textInput");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  // broji sve znakove osim razmaka
  const count = input.value.replace(/\s/g, "").length;
  result.textContent = `Letter Count: ${count}`;
});
