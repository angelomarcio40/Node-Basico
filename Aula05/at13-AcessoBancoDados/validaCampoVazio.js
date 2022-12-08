// função que validancampo vazio
const validaCampoVazio = (campo, nome) => {
    if (campo == '') {
        return res.jason({
            "retorno": "erro",
            "mensagem": `Campo ${nome} não foi preenchido!`
        })
    }
}


module.export = {
    validaCampoVazio
}