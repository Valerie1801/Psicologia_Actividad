import { closeLogin } from './CerrarSesion.js'
// Poner el nombre de la persona que se logueo---
export function mostrarNombre() {

    if (localStorage.getItem("login") != null) {
        let datoLogin = JSON.parse(localStorage.getItem("login"));
        if (datoLogin[0].generoUsuario == "Masculino") {
            if (datoLogin[0].tipoUsuario == "medico") {
                document.getElementById("loginName").textContent = "Bienvenido Doctor : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            } else if (datoLogin[0].tipoUsuario == "admin") {
                document.getElementById("loginName").textContent = "Bienvenido Señor : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            } else if (datoLogin[0].tipoUsuario == "auxiliar") {
                document.getElementById("loginName").textContent = "Bienvenido Señor : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
                crearBtn();
            }
            else {
                document.getElementById("loginName").textContent = "";
            }

        } else if (datoLogin[0].generoUsuario == "Femenino") {
            if (datoLogin[0].tipoUsuario == "medico") {
                document.getElementById("loginName").textContent = "Bienvenida Doctora : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            } else if (datoLogin[0].tipoUsuario == "admin") {
                document.getElementById("loginName").textContent = "Bienvenida Señora : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            } else if (datoLogin[0].tipoUsuario == "auxiliar") {
                document.getElementById("loginName").textContent = "Bienvenida Señora : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
                crearBtn()  
            } else {
                document.getElementById("loginName").textContent = "";
            }

        }

        /*
                    div = document.querySelector('#loginName div');
                    button = document.createElement('button');
                    div.appendChild(button);
        */

        console.log(datoLogin);
    }
}

function crearBtn() {
    var newDiv = document.createElement("input");
    newDiv.className = "btn btn-outline-light my-2 my-sm-0";
    newDiv.id = "closeLogin";
    newDiv.type = "submit";
    newDiv.value = "CERRAR SESION";
    newDiv.onclick = closeLogin;
    var currentDiv = document.getElementById("iniciarSesion");
    currentDiv.appendChild(newDiv);
}