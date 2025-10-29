window.onload = function () {
  // Verificar si el usuario está autenticado
  if (!sessionStorage.getItem("usuarioActivo")) {
    window.location.href = "index.html";
    return;
  }

  // Mostrar el popup de bienvenida
  const popup = document.getElementById("popup-bienvenida");
  if (popup) {
    popup.classList.remove("oculto");
    popup.classList.add("mostrar");

    setTimeout(() => {
      popup.classList.remove("mostrar");
      popup.classList.add("oculto");
    }, 3500);
  }

  // Cerrar sesión
  const botonCerrar = document.getElementById("cerrar-sesion");
  if (botonCerrar) {
    botonCerrar.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("usuarioActivo");
      window.location.href = "index.html";
    });
  }
};
