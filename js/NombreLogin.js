// Poner el nombre de la persona que se logueo---
export function mostrarNombre() {
    let datoLogin = JSON.parse(localStorage.getItem("login"));
    if (datoLogin[0].generoUsuario == "Masculino") {
        document.getElementById("loginName").textContent = "Bienvenido Señor : "+datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
    } else {
        document.getElementById("loginName").textContent = "Bienvenido Señora : "+datoLogin[0].nombreUsuario + " " + datoLogin[0].apellidoUsuario;
    }
    
    console.log(datoLogin);
}
