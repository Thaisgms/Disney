function gostei(id_filme) {
    console.log('Cheguei na funcao gostar');
    var id_filme = id_filme;
    console.log(id_filme);

    var id_usuario = sessionStorage.ID_USUARIO;
    console.log(id_usuario);
    // Busca
    fetch("/gostei/cadastrar",{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            id_filme : id_filme,
            id_usuario : id_usuario 
        })
        // após buscar (então)
    }).then(resposta => resposta.json())
    .then(
        resposta =>
        console.log(resposta)
    );
}