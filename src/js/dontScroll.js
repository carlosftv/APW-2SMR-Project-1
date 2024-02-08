document.addEventListener("DOMContentLoaded", myFunction);

function myFunction(e) {
    button = document.getElementById("ShowNavBar");

    button.addEventListener("click", onClick)
}
function onClick(e) {
    body = document.getElementsByTagName("body")[0];


    body.classList.toggle("DontScroll");
}