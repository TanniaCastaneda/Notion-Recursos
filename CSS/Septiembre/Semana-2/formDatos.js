const addBtn = document.getElementById("clikeame");

addBtn.addEventListener("click", function (t) {
  t.preventDefault();
  let a, b, c, d, e, f, g, h;

  a = document.getElementById("firtName").value;
  b = document.getElementById("lastName").value;
  c = document.getElementById("streetAdrees").value;
  //   d = document.getElementById("twoCity").value;
  //   e = document.getElementById("city").value;
  f = document.getElementById("state").value;
  g = document.getElementById("postCode").value;
  h = document.getElementById("email").value;

  document.getElementById("nombre").innerHTML = `First Name ${a}`;
  document.getElementById("apellido").innerHTML = `Last Name ${b}`;
  document.getElementById("direccion").innerHTML = `Street adress ${c}`;
  //   document.getElementById("ciudadUno").innerHTML = `Two/City ${d}`;
  //   document.getElementById("ciudadDos").innerHTML = `Two/City ${e}`;
  document.getElementById("estado").innerHTML = `State ${f}`;
  document.getElementById("codigoPostal").innerHTML = `Postcode ${g}`;
  document.getElementById("emailDireccion").innerHTML = `Email addrees ${h}`;
});
