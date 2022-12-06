// função que cadastra login
const cadastrarLogin = () =>{
    // captura os campos do form
    let nome = $('#nome').val()
    let email = $('#email').val()
    let senha = $('#senha').val()
    let confirmar = $('#confirmar').val()

    const result = fetch(`/cadastrar/login`,{
        method: 'POST',
        body: `nome=${nome}&email=${email}&senha=${senha}&confirmar=${confirmar}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((response) => response.json())
    .then((result)=>{
        if(result.retorno == 'ok'){
            Swal.fire({
                "icon": 'sucess',
                "title": 'sucesso!',
                "text": result.mensagem
            })
        }
    })
}