function consultarDocumento() {
    let documentoPaciente = document.getElementById("documentoPaciente").value;
    let historicoPaciente;


    let listaUsers = JSON.parse(localStorage.getItem("Paciente"));
    if (listaUsers != null) {
        let cont = 0;
        listaUsers.forEach(function (paciente) {
            if (paciente.cedula == documentoPaciente) {
                historicoPaciente = [{
                    nombre: paciente.nombre,
                    apellido: paciente.apellido,
                    correo: paciente.correo,
                    descripcion: paciente.descripcion,
                    fechaNextCita: paciente.fechaNextCita,
                    genero: paciente.genero,
                    medicinas: paciente.medicinas

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


function llenarTabla() {
    if (consultarDocumento() != nul) {


    }
    let listaUsers = JSON.parse(localStorage.getItem("Pacientes"));
    console.log(listaUsers)
    listaUsers.forEach(function (userLogin) {
        document.getElementById("cedula").textContent = userLogin.nombre;
        document.getElementById("nombre").textContent = userLogin.apellido;
        document.getElementById("apellido").textContent = userLogin.cargo;
        document.getElementById("correo").textContent = userLogin.cargo;
        document.getElementById("genero").textContent = userLogin.cargo;
        document.getElementById("fechaNextCita").textContent = userLogin.cargo;
        document.getElementById("descripcion").textContent = userLogin.cargo;
        document.getElementById("medicinas").textContent = userLogin.cargo;
        console.log(userLogin)
    })
}

function mostrarTabla() {


    let listaUsers = consultarDocumento(),
        tbody = document.querySelector('#t_paciente tbody');

    for (let i = 0; i < listaUsers.length; i++) {

        let fila = document.createElement('tr'),
            nombre = document.createElement('td'),
            apellido = document.createElement('td'),
            correo = document.createElement('td'),
            genero = document.createElement('td'),
            descripcion = document.createElement('td'),
            medicinas = document.createElement('td'),
            fechaNextCita = document.createElement('td');

        nombre.innerHTML = listaUsers[i].nombre;
        apellido.innerHTML = listaUsers[i].apellido;
        correo.innerHTML = listaUsers[i].correo;
        genero.innerHTML = listaUsers[i].genero;
        descripcion.innerHTML = listaUsers[i].descripcion;
        medicinas.innerHTML = listaUsers[i].medicinas;
        fechaNextCita.innerHTML = listaUsers[i].fechaNextCita;




        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(correo);
        fila.appendChild(genero);
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