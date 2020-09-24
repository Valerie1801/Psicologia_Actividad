import {Personal} from './Personal.js'
document.getElementById('Login').addEventListener('click',ValidarLogin);
function ValidarLogin()
{
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
     
    //console.log(JSON.stringify(Usuarios()));
    Usuarios().forEach(function(userLogin) {       
        if (userLogin.usuario == usuario && userLogin.password == password ) {
          
          
            console.log("El usuario es de Tipo "+userLogin.tipoUsuario );          
          document.location.href="Principal_a.html";
        }
      
      });

    
}



export default ValidarLogin;