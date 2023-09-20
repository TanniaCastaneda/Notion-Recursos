const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const countElement = document.getElementById("count");

let contador = 0;

function addClick() {
  contador++;
  countElement.textContent = contador;
}

addBtn.addEventListener("click", addClick);

function removeClick() {
  if (contador > 0) {
    contador--;
    countElement.textContent = contador;
  }
}

removeBtn.addEventListener("click", removeClick);
