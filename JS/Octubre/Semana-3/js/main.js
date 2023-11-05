const openModal = document.getElementById("singUp");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("btn-close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
