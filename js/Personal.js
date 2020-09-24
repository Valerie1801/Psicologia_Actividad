export function Usuarios()
{
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