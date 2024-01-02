
$(document).ready(function () {

  $("#ShowNavBar").click(function () {
    $(".NavBar").slideToggle(250);
    console.log("test");
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('switch');
  const body = document.body;

  // Establecer el tema por defecto
  body.setAttribute('tema', 'light');

  // Función para cambiar el tema
  function cambiarTema(tema) {
    body.setAttribute('tema', tema);
  }

  // Evento de clic para cambiar el tema
  toggleBtn.addEventListener('click', function () {
    const currentTheme = body.getAttribute('tema');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    cambiarTema(newTheme);
  });
});