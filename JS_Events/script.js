let broj = 0;

const prikazBroja = document.getElementById("broj");
const poruka = document.getElementById("poruka");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

// Povećavanje broja
plus.addEventListener("click", function () {
  broj++;
  prikaziBroj();
});

// Smanjivanje broja
minus.addEventListener("click", function () {
  broj--;
  prikaziBroj();
});

// Resetiranje broja
reset.addEventListener("click", function () {
  broj = 0;
  prikaziBroj();
});

// Prikaz broja i poruke
function prikaziBroj() {
  prikazBroja.textContent = broj;

  if (broj < 0) {
    poruka.textContent = "Broj je negativan!";
  } else {
    poruka.textContent = "";
  }
}
