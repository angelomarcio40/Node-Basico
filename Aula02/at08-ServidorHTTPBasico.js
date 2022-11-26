// importação do modulo HTTP
const http = require('http')

// cria servidor
const servidor = http.createServer((req,res)=>{
    // seta o header da resposta
    // retorna  HTML
    res.setHeader('Content-type','text/html')
    // htmlque será retornado para renderizar no navegador
    res.end(`
    <h1>Olá Mundo</h1>
    `)
})
// listen do servidor
servidor.listen('3000',()=>{
    console.log(`Servidor: http://localhost:3000`)
})