// validar el acceso de usuarios
function ValidarLogin() {
    let usuariomail = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    let listaUsers = JSON.parse(localStorage.getItem("Usuario"));
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


function addLoginName(loginName,loginLastName,loginGenero){
    let usuarioLogin =[{
        nombreUsuario: loginName,
        apellidoUsuario: loginLastName,
        generoUsuario: loginGenero
    }]
    localStorage.setItem("login", JSON.stringify(usuarioLogin));
}








