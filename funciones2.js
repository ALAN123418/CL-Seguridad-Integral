window.onload = function () {
  // Verificar si el usuario está autenticado
  const usuarioActivo = sessionStorage.getItem("usuarioActivo");
  if (!usuarioActivo) {
    window.location.href = "index.html";
    return;
  }

  // Actualizar título del navegador
  document.title = `Área de trabajo - ${usuarioActivo}`;

  // Mostrar el nombre del usuario en el menú
  const usuarioElemento = document.querySelector(".usuario");
  if (usuarioElemento) {
    usuarioElemento.innerHTML = `<i class="fas fa-user"></i> ${usuarioActivo}`;
  }

  // Mostrar saludo en el contenido principal
  const saludo = document.getElementById("saludo-usuario");
  if (saludo) {
    saludo.textContent = `Hola, ${usuarioActivo}. ¡Nos alegra verte de nuevo!`;
  }

  // Mostrar el popup solo si viene del login
  if (sessionStorage.getItem("mostrarBienvenida") === "true") {
    const popup = document.getElementById("popup-bienvenida");
    const titulo = document.getElementById("titulo-bienvenida");

    if (popup && titulo) {
      titulo.textContent = `¡Bienvenido, ${usuarioActivo}!`;
      popup.classList.remove("oculto");
      popup.classList.add("mostrar");
      popup.setAttribute("aria-hidden", "false");

      setTimeout(() => {
        popup.classList.remove("mostrar");
        popup.classList.add("oculto");
        popup.setAttribute("aria-hidden", "true");
      }, 3500);
    }

    sessionStorage.removeItem("mostrarBienvenida");
  }
  

  // Menu superior

  const botonPersonal = document.getElementById("ventana-personal");
  if (botonPersonal) {
    botonCerrar.addEventListener("click", function (e) {
      window.location.href = "Personal.html";
    });
  }

  const botonAsistencia = document.getElementById("ventana-asistencia");
  if (botonPersonal) {
    botonCerrar.addEventListener("click", function (e) {
      window.location.href = "Asistencia.html";
    });
  }

  const botonUniformes = document.getElementById("ventana-uniformes");
  if (botonPersonal) {
    botonCerrar.addEventListener("click", function (e) {
      window.location.href = "Uniformes.html";
    });
  }
  // Cierre de sesión
  const botonCerrar = document.getElementById("cerrar-sesion");
  if (botonCerrar) {
    botonCerrar.addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.clear();
      window.location.href = "index.html";
    });
  }
};
