class UsersAdmin {
    constructor(cedula, nombre, apellido, correo, cargo, tipoUsuario, password) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.correo = correo;
        this.cargo = cargo;
        this.tipoUsuario = tipoUsuario;
        this.password = password;
    }
    AddAdmin(administrador) {
        localStorage.setItem("Usuario", JSON.stringify(administrador));
    }

    getLocalStorage = (Usuario) => {
        let data
        if (this.stogare.getItem(Usuario) === null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(Usuario))
        }
        return data
    }


    findAll = () => this.getLocalStorage(this.name)

}
// --------------- asignar los usuarios administradores por default ---------------- 
let administrador = new UsersAdmin();
let usuario = [{
    cedula: "12345",
    nombre: "Juan",
    apellido: "Ruiz",
    correo: "JuanRuiz@mail.com",
    cargo: "Sistemas",
    tipoUsuario: "admin",
    password: "1234"
},
{
    cedula: "67890",
    nombre: "Valerie",
    apellido: "Olivares",
    correo: "ValerieOlivares@mail.com",
    cargo: "Sistemas",
    tipoUsuario: "admin",
    password: "5678"
}
]
let listaUsers = JSON.parse(localStorage.getItem("Usuario"));
console.log(listaUsers);
if (ValidarEmpleado(listaUsers, usuario.cedula) > 0) {
    alert("El documento del empleado ya existe!");
}
else {
    administrador.AddAdmin(usuario);
}



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
    if (listaUsers != null) {
        listaUsers.forEach(function (userLogin) {
            if (userLogin.cedula == cedula) {
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
