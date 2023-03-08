function validarform() {
    
  if (document.form.nombre.value==0) {
    alert("Por favor, ingresá tu nombre");
    document.form.nombre.focus();
    return false;
  }

  if (document.form.apellido.value==0) {
    alert("Por favor, ingresá tu apellido");
    document.form.apellido.focus();
    return false;
  }
  
  if (document.form.email.value==0) {
    alert("Por favor, ingresá tu correo electrónico");
    document.form.email.focus();
    return false;
  }

  if (document.form.mensaje.value==0) {
    alert("Por favor, escribí tu mensaje");
    document.form.mensaje.focus();
    return false;
  }
   
  alert("¡Gracias por contactarme, " + document.form.nombre.value + "!");
  document.validarform.submit();
}



