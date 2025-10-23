// PAGINA DE INICIO DE SESION/BIENVENIDA


// MENSAJE DE BIENVENIDA 
window.addEventListener('DOMContentLoaded', () => {
  const mensaje = document.getElementById('mensaje-bienvenida');

  // ANIMACION DESDE CSS
  mensaje.classList.remove('oculto');

  // ESPERA
  setTimeout(() => {
    mensaje.classList.add('fade-out');
  }, 3000);

  // TIEMPO DE PRESENTACION
  mensaje.addEventListener('animationend', (e) => {
    if (e.animationName === 'fadeOut') {
      mensaje.style.display = 'none';
    }
  });
});

// INICIO DE SESION

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contrasena").value;

    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "12345";

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
      mensaje.style.color = "green";
      mensaje.textContent = "Inicio de sesión exitoso";

      setTimeout(() => {
        window.location.href = "pagina principal.html";
      }, 1500);
    } else {
      mensaje.style.color = "red";
      mensaje.textContent = "Usuario o contraseña incorrectos";
      document.getElementById("usuario").value = "";
      document.getElementById("contrasena").value = "";
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
window.addEventListener('load', actualizarReloj);

