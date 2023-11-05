const login = document.getElementById("login-form");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const correoError = document.getElementById("correo-error");
  const contrasenaError = document.getElementById("contrasena-error");

  const usuarioValido = {
    correo: "Ctannia052@gmail.com",
    contrasena: "LMCain05Jw",
  };

  if (correo !== usuarioValido.correo) {
    correoError.textContent = "El correo es incorrecto";
    correoError.style.display = "block";
  } else {
    correoError.textContent = "";
    correoError.style.display = "none";
  }

  if (contrasena !== usuarioValido.contrasena) {
    if (contrasena.length < 10) {
      const faltantes = 10 - contrasena.length;
      contrasenaError.textContent = `La contraseña es incorrecta, le faltan ${faltantes} caracteres`;
    } else {
      contrasenaError.textContent = "La contraseña es incorrecta";
    }
    contrasenaError.style.display = "block";
  } else {
    contrasenaError.textContent = "";
    contrasenaError.style.display = "none";
  }

  if (
    correo === usuarioValido.correo &&
    contrasena === usuarioValido.contrasena
  ) {
    window.location.href = "../Semana-3/bienvenida.html";
  }
});
