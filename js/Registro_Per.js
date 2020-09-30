// Funcion para registrar personal de la clinica.. Por Default Medicos

//const { event } = require("jquery");



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

let datoLogin = JSON.parse(localStorage.getItem("login"));
document.getElementById("loginName").textContent= datoLogin[0].nombreUsuario+" "+datoLogin[0].apellidoUsuario;
console.log(datoLogin);
document.getElementById("addPersons").onsubmit = function() {
    AddPersonal();
    event.preventDefault();};

// validar registro empleado en el LocalStorage
function ValidarEmpleado(listaUsers, cedula) {
    let valor = 0;
    console.log(listaUsers)
    if (listaUsers != null) {
        listaUsers.forEach( function (userLogin) {
            console.log("En validacion " + cedula + " " + userLogin.cedula);
            if (userLogin.cedula === cedula) {
                console.log(cedula);
                valor = 1;
            }
        })
    }
    return valor
}


