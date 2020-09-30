 export  function closeLogin(){
    let usuarioLogin =[{
        nombreUsuario: "",
        apellidoUsuario: ""
    }]
    localStorage.setItem("login", JSON.stringify(usuarioLogin));
    document.location.href = "index.html";    
}

