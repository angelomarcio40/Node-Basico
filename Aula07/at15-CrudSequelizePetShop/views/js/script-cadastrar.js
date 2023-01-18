// add evento de onclick no elemento
document.querySelector("#btn-cadastrar").addEventListener('click',()=>{

    alert('cadastrar')
    window.event.preventDefault()

    Let nome = document.getElementById('nome').value

    Let email = document.getElementById('email').value

    Let senha = document.getElementById('senha').value

    Let confirmar = document.getElementById('confirmar').value result = fetch('/cadastrar/usuarios',{
        method: "POST",
        body:`nome=${nome}&email=${email}&senha=${senha}`,
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        }
    })
    .then(response=>response.json())
    .then(result=>{
        // aquio temos a resposta do back end node

    })

})