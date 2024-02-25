const promienInput = document.getElementById("promien");
const polePowierzchniEl = document.getElementById("polePowierzchni");
const objętośćEl = document.getElementById("objętość");

function oblicz() {
  const promien = parseFloat(promienInput.value);

  if (isNaN(promien) || promien <= 0) {
    alert("Wprowadź poprawny promień!");
    return;
  }

  const polePowierzchni = 4 * Math.pow(Math.PI, 2) * Math.pow(promien, 2);
  const objętość = (4/3) * Math.pow(Math.PI, 3) * Math.pow(promien, 3);

  polePowierzchniEl.textContent = polePowierzchni.toFixed(2);
  objętośćEl.textContent = objętość.toFixed(2);
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  oblicz();
});

oblicz();

