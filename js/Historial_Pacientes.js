function llenarTabla() {
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
    let listaUsers = JSON.parse(localStorage.getItem("Pacientes")),
        tbody = document.querySelector('#tablaPersonal tbody');

    for (let i = 0; i < listaUsers.length; i++) {

        let fila = document.createElement('tr'),
            nombre = document.createElement('td'),
            apellido = document.createElement('td'),
            cargo = document.createElement('td');

        nombre.innerHTML = listaUsers[i].nombre;
        apellido.innerHTML = listaUsers[i].apellido;
        cargo.innerHTML = listaUsers[i].cargo;

        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(cargo);

        tbody.appendChild(fila);
    }
}

mostrarTabla();
//llenarTabla();