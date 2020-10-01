import { closeLogin } from './CerrarSesion.js'
import { mostrarNombre } from './NombreLogin.js'

// funcion para insertar los Pacientes 
function AddPacientes() {

    let txtcedula = document.getElementById("cedula").value;
    let txtnombre = document.getElementById("nombre").value;
    let txtapellido = document.getElementById("apellido").value;
    let txtcorreo = document.getElementById("correo").value;
    let txtGenero = document.getElementById("genero").value;

    let newPaciente = {
        cedula: txtcedula,
        nombre: txtnombre,
        apellido: txtapellido,
        correo: txtcorreo,
        genero: txtGenero
 
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
        let newPaciente = [{
            cedula: txtcedula,
            nombre: txtnombre,
            apellido: txtapellido,
            correo: txtcorreo,
            genero: txtGenero
         
        }]
        //Si el array esta vacio, entonces ingresamos el primero           
        localStorage.setItem("Paciente", JSON.stringify(newPaciente));
        document.location.href = "registro_Pac.html";
        alert("El paciente fue registrado correctamente!");
    }
}

// validar registro Pacientes en el LocalStorage
function ValidarPacientes(listaPacientes, cedula) {
    let valor = 0;
    console.log(listaPacientes + " " + cedula)
    if (listaPacientes != null) {

        listaPacientes.forEach(function (idPaciente) {
            console.log("En validacion " + cedula + " " + idPaciente.cedula);
            if (idPaciente.cedula === cedula) {
                console.log(cedula);
                valor = 1;
            }

        })
    }
    return valor
}


// ejecuciones


mostrarNombre();
//ejecutar el evento Onsubmit del formulario para agregar personas ---------------
document.getElementById("addPacientes").onsubmit = function () {
    AddPacientes();
    event.preventDefault();
};

//ejecutar el evento Onsubmit del formulario para agregar personas ---------------     
document.getElementById("closeLogin").onclick = function () {
    console.log("Limpia el local Storage");
    closeLogin();
    event.preventDefault();
};


