const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const countElement = document.getElementById("count");
const addCart = document.querySelector(".add-to-cart");

let contador = 0;

countElement.textContent = contador;

addBtn.addEventListener("click", function () {
  contador++;
  countElement.textContent = contador;
});

removeBtn.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    countElement.textContent = contador;
  } else alert("Añada un Suede trainers");
});

addCart.addEventListener("click", () => {
  if (contador > 0) alert(`Has añadido ${contador} Suede trianers al carrito`);
  else alert("No hay productos en el carrito");
});
