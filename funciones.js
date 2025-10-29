if (sessionStorage.getItem("usuarioActivo")) {
  window.location.href = "pagina principal.html";
}

document.addEventListener("DOMContentLoaded", () => {
  // ========== INICIO DE SESIÓN ==========
  const form = document.getElementById("form-login");
  const mensaje = document.getElementById("mensaje");

  form.reset(); // Limpia campos al cargar

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contrasena").value.trim();

    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "12345";

    mensaje.classList.remove("exito", "error");

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
      mensaje.classList.add("exito");
      mensaje.textContent = "Inicio de sesión exitoso";

      sessionStorage.setItem("usuarioActivo", usuario);
      sessionStorage.setItem("mostrarBienvenida", "true"); // Bandera para mostrar bienvenida

      setTimeout(() => {
        window.location.href = "pagina principal.html";
      }, 1500);
    } else {
      mensaje.classList.add("error");
      mensaje.textContent = "Usuario o contraseña incorrectos";
      form.reset();
    }
  });

  window.addEventListener("pageshow", function (event) {
    if (event.persisted || performance.navigation.type === 2) {
      form.reset();
      mensaje.textContent = "";
      mensaje.classList.remove("exito", "error");
    }
  });

  // ========== RELOJ FUNCIONAL ==========
  function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    if (!reloj) return;

    const ahora = new Date();
    const opciones = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };

    const formato = ahora.toLocaleString('es-MX', opciones);
    reloj.textContent = `${formato}`;
  }

  actualizarReloj(); // Inicializa al cargar
  setInterval(actualizarReloj, 1000);
});
