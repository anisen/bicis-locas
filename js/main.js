function validateForm(){
	/* Escribe tú código aquí */
 var nombre= document.getElementById("name").value;
 var apellido=document.getElementById("lastname").value;
 var contrasena=document.getElementById("input-password").value;
 var mail=document.getElementById("input-email").value;

 //validacion de nombre y apellido
  if (nombre===""||nombre.length===0||nombre===undefined||apellido===""||apellido.length===0||apellido===undefined) {
  	alert("Debe ingrese su Nombre y Apellido");
  }else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()||apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
    alert("La primera letra debe ser mayuscula");
  }else if(/[0-9]/.test(nombre)||/[0-9]/.test(apellido)){
   alert("No puede llevar numeros");
  }else{
  	console.log("Has escrito super bien tu nombre "+nombre+" "+apellido);
  }

  //validacion correo electronico
  if (mail===undefined||mail.length===0|| /^\s+$/.test(mail)) {
    alert("Debe ingresar su Correo Electronico")
  }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)) {
    alert("Debes ingresar un Email correcto");
  }else{
     console.log("El email esta super duper")  
  }

   
 //validacion contraseña
 if (contrasena===""||contrasena.length===0||contrasena===undefined) {
 	alert("Ingrese su contraseña");
 }else if(contrasena.length<6) {
 	alert("debe tener almenos 6 caracteres")
 }//else if (cotrasena=="password"||contrasena=="123456"||contrasena=="098754"){
 	//alert("No puedes ocupar esta contraseña");
 //}
  }



