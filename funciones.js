import { supabase } from './supabaseClient.js';

document.addEventListener("DOMContentLoaded", () => {
  // ========== REDIRECCIÓN SI YA HAY SESIÓN ==========
  if (sessionStorage.getItem("usuarioActivo")) {
    window.location.href = "pagina principal.html";
    return;
  }

  // ========== INICIO DE SESIÓN CON SUPABASE ==========
  const form = document.getElementById("form-login");
  const mensaje = document.getElementById("mensaje");

  form.reset(); // Limpia campos al cargar

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const correo = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("contraseña").value.trim();

    mensaje.classList.remove("exito", "error");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: correo,
      password: clave,
    });

    if (error) {
      mensaje.classList.add("error");
      mensaje.textContent = "Usuario o contraseña incorrectos";
      form.reset();
      return;
    }

    // Consulta perfil en tabla usuarios
    const { data: perfil, error: errorPerfil } = await supabase
      .from('usuarios')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (errorPerfil || !perfil) {
      mensaje.classList.add("error");
      mensaje.textContent = "No se encontró el perfil del usuario";
      return;
    }

    mensaje.classList.add("exito");
    mensaje.textContent = "Inicio de sesión exitoso";

    sessionStorage.setItem("usuarioActivo", perfil.nombre || correo);
    sessionStorage.setItem("mostrarBienvenida", "true");

    setTimeout(() => {
      window.location.href = "pagina principal.html";
    }, 1500);
  });

  // ========== LIMPIEZA AL VOLVER ==========
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

  actualizarReloj();
  setInterval(actualizarReloj, 1000);
});
