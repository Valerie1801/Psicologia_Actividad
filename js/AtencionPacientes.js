import { closeLogin } from './CerrarSesion.js'
import {mostrarNombre} from './NombreLogin.js'



// Consultar paciente para la atencion
function findPaciente() {
    let usuarioDocumento = document.getElementById("findDocumento").value;
   

    let listaUsers = JSON.parse(localStorage.getItem("Pacientes"));
    let cont = 0;
    listaUsers.forEach(function (userLogin) {
        if (userLogin.correo == usuariomail && userLogin.password == password) {
            console.log("El usuario es de Tipo " + userLogin.tipoUsuario + userLogin.correo);
            if (userLogin.tipoUsuario == 'admin') { 
                document.location.href = "registro_Per.html";                
                alert("Bienvenido Sr(a) " + userLogin.nombre + "" + userLogin.apellido);
                addLoginName(userLogin.nombre,userLogin.apellido,userLogin.genero);

                cont += 1;
            } else if (userLogin.tipoUsuario == 'medico') {
                document.location.href = "registro_Pac.html";
                alert("Bienvenido Sr(a) " + userLogin.nombre + "" + userLogin.apellido);
                addLoginName(userLogin.nombre,userLogin.apellido,userLogin.genero);
                cont += 1;
            }
        }
    })
    if (cont == 0) {
        alert("Por Favor Revise su Usuario y Contraseña");
    }
}





mostrarNombre();
//ejecutar el evento Onsubmit del formulario para agregar personas ---------------     
document.getElementById("closeLogin").onclick = function () {
    console.log("Limpia el local Storage");
    closeLogin();
    event.preventDefault();
};
