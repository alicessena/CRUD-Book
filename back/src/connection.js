// Importa o módulo 'mysql2/promise' para trabalhar com o MySQL de maneira assíncrona
// 'mysql2/promise' permite que usemos funções assíncronas com 'async/await', facilitando a interação com o banco de dados
const mysql = require('mysql2/promise');

// Cria um pool de conexões com o banco de dados MySQL
// O pool permite que múltiplas conexões sejam gerenciadas de forma eficiente, sem precisar criar uma nova conexão a cada requisição
const connection = mysql.createPool({
    host: 'localhost',  // Define o host do banco de dados, no caso está usando o 'localhost', ou seja, o banco está rodando na mesma máquina
    port: 3306,         // A porta padrão do MySQL
    user: 'root',       // O nome de usuário utilizado para acessar o banco de dados
    password: 'root',   // A senha associada ao usuário
    database: 'teste_node',  // Nome do banco de dados a ser utilizado
});


module.exports = connection;
