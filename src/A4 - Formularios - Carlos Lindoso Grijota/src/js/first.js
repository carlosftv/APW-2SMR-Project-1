

//  DESPLIEGUE DE BARRA DE NAVEGACIÓN  //


$(document).ready(function () {

    $("#ShowNavBar").click(function () {
        $(".NavBar").slideToggle(250);
        console.log("test");
    });
});