import { closeLogin } from './CerrarSesion.js'
import { mostrarNombre } from './NombreLogin.js'


function consultarDocumento() {
    let documentoPaciente = document.getElementById("documentoPaciente").value;
    let historicoPaciente;

    let listaUsers = JSON.parse(localStorage.getItem("Paciente"));
    if (listaUsers != null) {
        let cont = 0;
        listaUsers.forEach(function (paciente) {
            if (paciente.cedula == documentoPaciente) {
                historicoPaciente = [{
                    cedula: paciente.cedula,
                    nombre: paciente.nombre,
                    apellido: paciente.apellido,
                    correo: paciente.correo,
                    genero: paciente.genero

                }]
                cont++;
            }
        })
        if (cont == 0) {
            alert("El paciente no se encontró en el sistema");
        }
    }

    return historicoPaciente;
}


// Consultar paciente para la atencion

function registrarAtencion() {

    let txtcedula = document.getElementById("documentoPaciente").value;
    let txtNextCita = document.getElementById("fechaNextCita").value;
    let txtDescripcion = document.getElementById("descripcion").value;
    let txtMedicinas = document.getElementById("medicinas").value;
    let listaPacientes = JSON.parse(localStorage.getItem("Historial"));
    let idAtencionCita;
    if (listaPacientes != null) {
        idAtencionCita = listaPacientes.length;
    } else {
        idAtencionCita = 0;
    }


    let newPaciente = {
        idAtencion: idAtencionCita,
        cedula: txtcedula,
        fechaNextCita: txtNextCita,
        descripcion: txtDescripcion,
        medicinas: txtMedicinas
    }


    //si el Array tiene algo lo validamos    
    if (listaPacientes != null) {
        listaPacientes.push(newPaciente);
        localStorage.setItem("Historial", JSON.stringify(listaPacientes));
        document.location.href = "Atencion_Pacientes.html";
        alert("El paciente fue registrado correctamente!");
    } else {
        let newPaciente = [{
            idAtencion: idAtencionCita,
            cedula: txtcedula,
            fechaNextCita: txtNextCita,
            descripcion: txtDescripcion,
            medicinas: txtMedicinas
        }]
        //Si el array esta vacio, entonces ingresamos el primero           
        localStorage.setItem("Historial", JSON.stringify(newPaciente));
        document.location.href = "Atencion_Pacientes.html";
        alert("El paciente fue registrado correctamente!");
    }
}




mostrarNombre();
//ejecutar el evento Onsubmit del formulario para agregar personas ---------------     
document.getElementById("closeLogin").onclick = function () {
    console.log("Limpia el local Storage");
    closeLogin();
    event.preventDefault();
};

document.getElementById("findPaciente").onclick = function () {
    console.log("entro aqui     ");
    let paciente = consultarDocumento();
    if (paciente != null) {
        document.getElementById("nombrePaciente").textContent = paciente[0].nombre + " " + paciente[0].apellido;
        document.getElementById("formularioAtencion").style.display = "block";
    }
    event.preventDefault();
};

document.getElementById("registrarAtencion").onclick = function () {
    console.log("Limpia el local Storage");
    registrarAtencion();
    event.preventDefault();
};

document.getElementById("formularioAtencion").style.display = "none";