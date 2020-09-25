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
            } else if (userLogin.tipoUsuario == 'medico') {
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
// validar registro Pacientes en el LocalStorage
function ValidarPacientes(listaPacientes, cedula) {
    let valor = 0;
    console.log(listaPacientes +" "+cedula)
    if (listaPacientes != null) {
       
        listaPacientes.forEach( function (idPaciente) {
            console.log("En validacion " + cedula + " " + idPaciente.cedula);
            if (idPaciente.cedula === cedula) {
                console.log(cedula);
                valor = 1;
            }

        })
    }
    return valor
}



// Funcion para registrar personal de la clinica.. Por Default Medicos
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


// funcion para insertar los Pacientes 
function AddPacientes() {

    let txtcedula = document.getElementById("cedula").value;
    let txtnombre = document.getElementById("nombre").value;
    let txtapellido = document.getElementById("apellido").value;
    let txtcorreo = document.getElementById("correo").value;

    newPaciente = {
        cedula: txtcedula,
        nombre: txtnombre,
        apellido: txtapellido,
        correo: txtcorreo,
    }

   
    let listaPacientes = JSON.parse(localStorage.getItem("Paciente"));
    //si el Array tiene algo lo validamos    
        if (listaPacientes != null) {
            if (ValidarPacientes(listaPacientes, newPaciente.cedula) > 0) {
                alert("El documento del paciente ya existe!");
            }
            else {
                listaPacientes.push(newPaciente);
                localStorage.setItem("Paciente", JSON.stringify(listaPacientes));
                document.location.href = "registro_Pac.html";
                alert("El paciente fue registrado correctamente!");
            }
        } else { 
            newPaciente = [{
                cedula: txtcedula,
                nombre: txtnombre,
                apellido: txtapellido,
                correo: txtcorreo,
            }]  
      //Si el array esta vacio, entonces ingresamos el primero           
            localStorage.setItem("Paciente", JSON.stringify(newPaciente));
            document.location.href = "registro_Pac.html";
            alert("El paciente fue registrado correctamente!");
        }
 

}
