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
                cont += 1;
            } else if (userLogin.tipoUsuario == 'user') {
                document.location.href = "registro_Pac.html";
                alert("Bienvenido Sr(a) " + userLogin.nombre + "" + userLogin.apellido);
                cont += 1;
            }
        }

    })
    if (cont == 0) {
        alert("Por Favor Revise su Usuario y Contraseña");
    }
}

function ValidarEmpleado(listaUsers, cedula) {
    let valor = 0;
    console.log(listaUsers)
    if (listaUsers != null) {

        listaUsers.forEach(function (userLogin) {
            console.log("En validacion " + cedula + " " + userLogin.cedula);
            if (userLogin.cedula === cedula) {

                console.log(cedula);
                valor = 1;
            }

        })
    }
    return valor
}

function AddPersonal() {
    let txtcedula = document.getElementById("cedula").value;
    let txtnombre = document.getElementById("nombre").value;
    let txtapellido = document.getElementById("apellido").value;
    let txtcargo = document.getElementById("cargo").value;
    let txtcorreo = document.getElementById("correo").value;

    newPersonal = {
        cedula: txtcedula,
        nombre: txtnombre,
        apellido: txtapellido,
        correo: txtcorreo,
        cargo: txtcargo,
        tipoUsuario: "medico",
        password: "1234"
    }

    let listaUsers = JSON.parse(localStorage.getItem("Usuario"));
    if (listaUsers != null) {
        if (ValidarEmpleado(listaUsers, newPersonal.cedula) > 0) {
            alert("El documento del empleado ya existe!");
        }
        else {
            listaUsers.push(newPersonal);
            localStorage.setItem("Usuario", JSON.stringify(listaUsers));
             document.location.href = "registro_Per.html";
            alert("Empleado registrado correctamente!");
        }
    }



}
