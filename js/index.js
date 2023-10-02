function mostrarToast(){
var miToast = document.getElementById('miToast');
  var cartel = new bootstrap.Toast(miToast);
  cartel.show();
}


document.addEventListener('DOMContentLoaded',()=>{
    mostrarToast();
})