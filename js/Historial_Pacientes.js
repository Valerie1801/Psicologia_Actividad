

export function consultarDocumento() {
    let documentoPaciente = document.getElementById("documentoPaciente").value;
    let historicoPaciente;
    let listaHistoricos;

    let listaUsers = JSON.parse(localStorage.getItem("Historial"));
    if (listaUsers != null) {
        let cont = 0;
        listaUsers.forEach(function (paciente) {
            if (paciente.cedula == documentoPaciente) {
                if (listaHistoricos != null) {
                    historicoPaciente = {
                        idAtencion: paciente.idAtencion,
                        descripcion: paciente.descripcion,
                        fechaNextCita: paciente.fechaNextCita,
                        medicinas: paciente.medicinas
                    };
                    listaHistoricos.push(historicoPaciente);
                    cont++;
                } else {
                    historicoPaciente = [{
                        idAtencion: paciente.idAtencion,
                        descripcion: paciente.descripcion,
                        fechaNextCita: paciente.fechaNextCita,
                        medicinas: paciente.medicinas
                    }];
                    listaHistoricos = historicoPaciente;
                    cont++;
                }
            }
        })
        if (cont == 0) {
            alert("El paciente no se encontró en el sistema");
        }
    }

    return listaHistoricos;
}


function mostrarTabla() {


    let listaUsers = consultarDocumento(),
        tbody = document.querySelector('#t_paciente tbody');

    for (let i = 0; i < listaUsers.length; i++) {

        let fila = document.createElement('tr'),
            idAtencion = document.createElement('td'),
            descripcion = document.createElement('td'),
            medicinas = document.createElement('td'),
            fechaNextCita = document.createElement('td');

        idAtencion.innerHTML = listaUsers[i].idAtencion;
        descripcion.innerHTML = listaUsers[i].descripcion;
        medicinas.innerHTML = listaUsers[i].medicinas;
        fechaNextCita.innerHTML = listaUsers[i].fechaNextCita;

        fila.appendChild(idAtencion);
        fila.appendChild(descripcion);
        fila.appendChild(medicinas);
        fila.appendChild(fechaNextCita);
        tbody.appendChild(fila);
    }
}

document.getElementById("findPaciente").onclick = function () {
    console.log("Limpia el local Storage");
    mostrarTabla()
    event.preventDefault();
};
//llenarTabla();