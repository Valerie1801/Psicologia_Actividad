function llenarTabla() {
    let listaUsers = JSON.parse(localStorage.getItem("Usuario"));
    let cont = 0;
    console.log(listaUsers)
    listaUsers.forEach(function (userLogin) {
        document.getElementById("nombre").textContent = userLogin.nombre;
        document.getElementById("apellido").textContent = userLogin.apellido;
        document.getElementById("cargo").textContent = userLogin.cargo;
        console.log(userLogin)
    })
}

function mostrarTabla() {
    let listaUsers = JSON.parse(localStorage.getItem("Usuario")),
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