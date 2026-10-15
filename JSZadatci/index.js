//console.log("ovo radi");
//let temperature = [18, 20, 22, 21];

//console.log(temperature[0]); // 18

//console.log(temperature[2]); // 22

//console.log(temperature.length); // 4

//let gradovi = ["Zagreb", "Split", "Osijek"];

//console.log(gradovi[1]); // Split

/* let ocjene = [3, 4, 5];

ocjene[0] = 4;

ocjene.push(5);

et zadnja = ocjene.pop();

console.log(ocjene); // [4, 4, 5]

console.log(zadnja); // 5

console.log(ocjene.length); // 3
Zad1
for (let i = 0; i < 11; i++) {
}
 */
/* let n = prompt("Unesi broj:");
let broj = Number(n);
let zbroj = 0;
for (let i = 0; i < broj; i++) {
  zbroj = zbroj + i;
}
console.log(zbroj); */
/* 
let Polje = [2, 3, 4, 5];
let zbroj = 0;
for (let i = 0; i < Polje.length; i++) {
  zbroj = zbroj + i;
}
let prosjek = zbroj / Polje.length;

console.log(prosjek); */

/* let n = prompt("Unesi broj:");
let broj = Number(n);
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i + " – paran");
  } else {
    console.log(i + " – neparan");
  }
}
 */
/* let Polje = [12, 7, 25, 4, 19];
let NajEl = Polje[0];

for (let i = 0; i < Polje.length; i++) {
  if (NajEl < Polje[i]) {
    NajEl = Polje[i];
  }
}
console.log(NajEl); */
/* let Polje = [12, 7, 25, 4, 19];
let n = prompt("Unesi broj:");

for (let i = 0; i < Polje.length; i++) {
  if (n == Polje[i]) {
    console.log("Broj je isti");
  } else {
    console.log("Broj nije isti");
  }
} */
/* function jePrijestupna(godina) {
  if (godina % 400 === 0) {
    return true;
  } else if (godina % 4 === 0 && godina % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

let godina = Number(prompt("Unesi godinu:"));

if (jePrijestupna(godina)) {
  console.log(godina + ". godina je prijestupna.");
} else {
  console.log(godina + ". godina nije prijestupna.");
}
 */
/* let tekst = prompt("Unesi neki tekst:");
tekst = tekst.toLowerCase();

let samoglasnici = ["a", "e", "i", "o", "u"];
let brojac = 0;

for (let i = 0; i < tekst.length; i++) {
    if (samoglasnici.includes(tekst[i])) {
        brojac++;
    }
}

console.log("Broj svih znakova: " + tekst.length);
console.log("Broj samoglasnika: " + brojac); */
/* let a = Number(prompt("Unesi prvi broj:"));
let b = Number(prompt("Unesi drugi broj:"));

function zbroji(a, b) {
    return a + b;
}

function oduzmi(a, b) {
    return a - b;
}

function pomnozi(a, b) {
    return a * b;
}

function podijeli(a, b) {
    if (b === 0) {
        return "Dijeljenje s nulom nije dozvoljeno!";
    }
    return a / b;
}

function potencija(a, b) {
    return a ** b;
}

console.log("Zbrajanje: " + zbroji(a, b));
console.log("Oduzimanje: " + oduzmi(a, b));
console.log("Množenje: " + pomnozi(a, b));
console.log("Dijeljenje: " + podijeli(a, b));
console.log("Potencija: " + potencija(a, b));
 */
let masa = Number(prompt("Unesi masu u kilogramima:"));
let visina = Number(prompt("Unesi visinu u metrima:"));

function izracunajBMI(masa, visina) {
  return masa / (visina * visina);
}

if (
  masa > 0 &&
  visina > 0 &&
  Number.isFinite(masa) &&
  Number.isFinite(visina)
) {
  let bmi = izracunajBMI(masa, visina);
  console.log("Tvoj BMI je: " + bmi.toFixed(2));

  if (bmi < 18.5) {
    console.log("Kategorija: pothranjenost");
  } else if (bmi < 25) {
    console.log("Kategorija: normalna tjelesna masa");
  } else if (bmi < 30) {
    console.log("Kategorija: prekomjerna tjelesna masa");
  } else {
    console.log("Kategorija: pretilost");
  }

  console.log("BMI je samo orijentacijska procjena za odrasle.");
} else {
  console.log("masa i visina moraju biti pozitivni brojevi.");
}
