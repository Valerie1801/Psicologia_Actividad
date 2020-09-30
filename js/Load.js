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
    genero: "Masculino",
    tipoUsuario: "admin",
    password: "1234"
},
{
    cedula: "67890",
    nombre: "Valerie",
    apellido: "Olivares",
    correo: "ValerieOlivares@mail.com",
    cargo: "Sistemas",
    genero: "Femenino",
    tipoUsuario: "admin",
    password: "5678"
}
]
let listaUsers = JSON.parse(localStorage.getItem("Usuario"));
if (listaUsers != null) {

}
else {
    administrador.AddAdmin(usuario);
}


function ValidarEmpleado(listaUsers, cedula) {
    let valor = 0;
    console.log(cedula);
    if (listaUsers != null) {
        listaUsers.forEach(function (userLogin) {
            if (userLogin.cedula === cedula) {
                valor = 1;
            }
        })
    }
    return valor
}