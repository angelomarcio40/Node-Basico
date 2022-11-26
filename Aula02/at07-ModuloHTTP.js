// importação do modulo HTTP
const http = require('http')

// cria objeto servidro
// req = request
// res = response
http.createServer((req,res) =>{
    res.write('Olá Mundo!')
    res.end()
}).listen(3000)