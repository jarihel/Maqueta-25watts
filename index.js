/* NAVBAR HOVER LINKS */
$(document).ready(function(){
$('.nav-item').hover(
    function(){
    $(this).addClass("nav-hover");
    }, function(){
    $(this).removeClass("nav-hover");
    });
// FONDO NAVBAR
$(window).scroll(function(){
    if($(".navbar").offset().top >100){
        $(".navbar").addClass("fondo")
    } else {
        $(".navbar").removeClass("fondo")
    }
})
//VALIDACION DEL FORM
let nombre = document.getElementById('name')
let numero = document.getElementById('phone')
let mensaje = document.getElementById('msg')
let error = document.getElementById('error')
error.style.color = "red"
function enviarformulario(){
    console.log('Enviando')
    let mensajeError = []
    if (nombre.value === null || nombre.value === '') {
        // Si no se cumple la condicion...
        mensajeError.push('[ERROR] El campo debe tener un valor en nombre')
        alert('[ERROR] El campo debe tener un valor en nombre');
    }
    error.innerHTML = mensajeError.join(',')
    return false
}
});



