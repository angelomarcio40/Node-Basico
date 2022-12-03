// importação do modulo mysql2
// npm i mysql2 --save
const mysql2 = require('mysql2')

// importante que no futuro não fiquem esses dados em formato de texto
// pesquisar e usar arquivo .env
module.exports = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_sistema_node"
})