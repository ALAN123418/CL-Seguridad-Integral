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


    sessionStorage.removeItem("mostrarBienvenida");
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
