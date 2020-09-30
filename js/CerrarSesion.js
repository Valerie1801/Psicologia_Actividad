 export  function closeLogin(){
    let usuarioLogin =[{
        nombreUsuario: "",
        apellidoUsuario: "",
        generoUsuario:""
    }]
    localStorage.setItem("login", JSON.stringify(usuarioLogin));
    document.location.href = "index.html";    
}

