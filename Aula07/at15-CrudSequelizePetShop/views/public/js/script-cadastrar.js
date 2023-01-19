// add evento de onclick no elemento
document.querySelector("#btn-cadastrar").addEventListener('click',()=>{

    window.event.preventDefault()

    let nome = document.getElementById('nome').value

    let email = document.getElementById('email').value

    let senha = document.getElementById('senha').value

    let confirmar = document.getElementById('confirmar').value 
    
    result = fetch('/cadastrar/usuarios',{
        method: "POST",
        body:`nome=${nome}&email=${email}&senha=${senha}`,
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        }
    })
    .then(response=>response.json())
    .then(result=>{
        // aqui temos a resposta do back end node
        if(result.retorno == 'ok'){
            Swal.fire({
                icon: "sucess",
                title: "Sucesso",
                text: result.mensagem
            })
            // reseta o formulario
            document.getElementById('form-usuarios').reset()
        }else{
            Swal.fire({
                icon: "error",
                title: "Atenção",
                text: result.mensagem
            })
        }

    })

})