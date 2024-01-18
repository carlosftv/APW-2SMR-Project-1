

//  ALERTA DATOS ENVIADOS  //


document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".viewAlerta");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("¡Datos correctamente enviados!");
        });
    });
});
