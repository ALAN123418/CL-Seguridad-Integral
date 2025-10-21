window.onload = function() {
  const popup = document.getElementById("popup-bienvenida");

  // Mostrar el popup
  popup.classList.add("mostrar");

  // Ocultarlo automáticamente después de 3.5 segundos
  setTimeout(() => {
    popup.classList.remove("mostrar");
  }, 3500);
};