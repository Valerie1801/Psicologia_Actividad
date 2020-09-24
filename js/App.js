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
administrador.AddAdmin(usuario);

// validar el acceso de usuarios
function ValidarLogin() {

    let usuariomail = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    let listaUsers = JSON.parse(localStorage.getItem("Usuario"));
    listaUsers.forEach(function (userLogin) {

        if (userLogin.correo == usuariomail && userLogin.password == password) {
            console.log("El usuario es de Tipo " + userLogin.tipoUsuario);
            if (userLogin.tipoUsuario == 'admin') {
                document.location.href = "registro_Per.html";
                alert("Bienvenido Sr(a) " + userLogin.nombre);
            } else if (userLogin.tipoUsuario == 'user') {
                document.location.href = "registro_Pac.html";
            }
        }

    })
}


