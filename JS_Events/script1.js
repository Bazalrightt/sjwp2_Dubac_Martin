const unos = document.getElementById("unos");
const poruka = document.getElementById("poruka");
const tipka = document.getElementById("tipka");

document.addEventListener("keydown", function (event) {
  // Ispis naziva pritisnute tipke
  tipka.textContent = event.key;

  // Ako je pritisnut Enter
  if (event.key === "Enter") {
    poruka.textContent = "Potvrđeno";
  }

  // Ako je pritisnut Escape
  if (event.key === "Escape") {
    unos.value = "";
    poruka.textContent = "";
  }
});
