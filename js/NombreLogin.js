// Poner el nombre de la persona que se logueo---
export function mostrarNombre() {

    if (localStorage.getItem("login") != null) {    
        let datoLogin = JSON.parse(localStorage.getItem("login"));
        if (datoLogin[0].generoUsuario == "Masculino") {
            if (datoLogin[0].tipoUsuario == "medico") {
                document.getElementById("loginName").textContent = "Bienvenido Doctor : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            } else {
                document.getElementById("loginName").textContent = "Bienvenido Señor : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            }
        } else if (datoLogin[0].generoUsuario == "Femenino") {
            if (datoLogin[0].tipoUsuario == "medico") {
                document.getElementById("loginName").textContent = "Bienvenido Doctora : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            } else {
                document.getElementById("loginName").textContent = "Bienvenido Señora : " + datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
            }
        } else {
            document.getElementById("loginName").textContent = " ";
        }
        console.log(datoLogin);
    }
}

