function ValidarLogin() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    //console.log(JSON.stringify(Usuarios()));
    Usuarios().forEach(function (userLogin) {
        if (userLogin.usuario == usuario && userLogin.password == password) {

            console.log("El usuario es de Tipo " + userLogin.tipoUsuario);
            if (userLogin.tipoUsuario == 'admin') {
                document.location.href = "Principal_a.html";
            } else if (userLogin.tipoUsuario == 'user') {
                document.location.href = "Principal_p.html";
            }
        }
    });


}

function Usuarios() {
    const listaUsuarios =
        [
            {
                usuario: 'psicologo',
                password: 'itsa1234',
                tipoUsuario: 'admin'
            },
            {
                usuario: 'secretaria',
                password: 'itsa4321',
                tipoUsuario: 'auxiliar'
            },
            {
                usuario: 'paciente',
                password: 'itsa5678',
                tipoUsuario: 'user'
            }

        ]

    return listaUsuarios
}

