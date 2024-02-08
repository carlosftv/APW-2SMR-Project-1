// Globals vars
var current_theme = "";

// On document load
$(document).ready(function () {
  main();
});

function nav_bar_toggle() {
  $("#ShowNavBar").click(function () {
    $(".NavBar").slideToggle(250);
  });
}

function main() {
  nav_bar_toggle();

  const default_theme = "dark";
  var value = localStorage.getItem("theme");

  if (value) {
    current_theme = value;
    if (value == "dark") {
      $("#switch").prop("checked", true);
    }
  } else {
    current_theme = default_theme;
  }

  // Establecer el tema
  document.body.setAttribute('tema', current_theme);

  on_click_switch(current_theme);

  console.log(localStorage.getItem("theme"));
}

// Evento de clic para cambiar el tema
function on_click_switch(ct) {
  $("#switch").click(function () {
    if (this.checked) {
      document.body.setAttribute('tema', "dark");
      localStorage.setItem("theme","dark");
      current_theme = "dark"
      
    } else {
      document.body.setAttribute('tema', "light");
      localStorage.setItem("theme","light");
      current_theme = "light"
    }
  });
}
