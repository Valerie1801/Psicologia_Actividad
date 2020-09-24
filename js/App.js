class UsersAdmin {
    constructor(cedula, nombre, correo, cargo, tipoUsuario, password) {

        this.nombre = nombre;
        this.cedula = cedula;
        this.correo = correo;
        this.cargo = cargo;
        this.tipoUsuario = tipoUsuario;
        this.password = password;
    }
    AddAdmin(administrador) {
        localStorage.setItem("Usuario", JSON.stringify(administrador));
    }

}
// --------------- asignar los usuarios administradores por default ---------------- 
let administrador = new UsersAdmin();
let usuario = [{
    cedula: "12345",
    nombre: "Juan Ruiz",
    correo: "JuanRuiz@mail.com",
    cargo: "Sistemas",
    tipoUsuario: "admin",
    password: "1234"
},
{
    cedula: "67890",
    nombre: "Valerie Olivares",
    correo: "ValerieOlivares@mail.com",
    cargo: "Sistemas",
    tipoUsuario: "admin",
    password: "5678"
}
]
administrador.AddAdmin(usuario);
