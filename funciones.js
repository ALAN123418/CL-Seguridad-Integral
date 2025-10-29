// MENSAJE DE BIENVENIDA
window.addEventListener('DOMContentLoaded', () => {
  const mensaje = document.getElementById('mensaje-bienvenida');

  if (mensaje) {
    mensaje.classList.remove('oculto');

    setTimeout(() => {
      mensaje.classList.add('fade-out');
    }, 3000);

    mensaje.addEventListener('animationend', (e) => {
      if (e.animationName === 'fadeOut') {
        mensaje.style.display = 'none';
      }
    });
  }
});

// INICIO DE SESIÓN
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contrasena").value.trim();

    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "12345";

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
      mensaje.style.color = "green";
      mensaje.textContent = "Inicio de sesión exitoso";

      // Guardar sesión si lo necesitas
      sessionStorage.setItem("usuarioActivo", usuario);

      setTimeout(() => {
        window.location.href = "pagina principal.html";
      }, 1500);
    } else {
      mensaje.style.color = "red";
      mensaje.textContent = "Usuario o contraseña incorrectos";
      form.reset();
    }
  });

  // Limpia los campos si se regresa con el botón "Atrás"
  window.addEventListener("pageshow", function (event) {
    if (event.persisted || performance.navigation.type === 2) {
      form.reset();
      mensaje.textContent = "";
    }
  });
});

/* RELOJ FUNCIONAL */
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

setInterval(actualizarReloj, 1000);
window.addEventListener('load', 
