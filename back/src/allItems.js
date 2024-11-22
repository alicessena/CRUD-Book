// Importando a conexão com o banco de dados do arquivo 'connection.js'
// A conexão será utilizada para interagir com o banco de dados
const connection = require('./connection')

// Função assíncrona para buscar todos os itens da tabela 'book' no banco de dados
const getAllItems = async () => {
    try {
        // Realiza uma consulta SQL para pegar todos os dados da tabela 'book'
        // A resposta é armazenada na variável 'query'
        const[query] = await connection.execute('SELECT * FROM teste_node.book')
        
        // Retorna os dados encontrados
        return query
    } catch (error) {
        // Se houver um erro, lança uma exceção com uma mensagem de erro
        throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
}

// Função assíncrona para inserir um novo livro na tabela 'book'
async function insertItem(title, author){
    try{
        // A consulta SQL que será executada para inserir um livro
        const insertQuery = "INSERT INTO book (title, author) VALUES (?, ?)"
        
        // Os valores a serem inseridos são passados como um array
        const values = [title, author]

        // A consulta é executada, e o resultado é armazenado na variável 'result'
        const[result] = await connection.execute(insertQuery, values)
        
        // Retorna o resultado da inserção (geralmente um identificador do novo item)
        return result
    } catch(error){
        // Se houver um erro, lança uma exceção com uma mensagem de erro
        throw new Error(`Erro ao inserir item: ${error.message}` )
    }
}

// Função assíncrona para atualizar um livro existente na tabela 'book'
const updateItem = async (id, title, author) => {
    try {
        // A consulta SQL para atualizar os dados de um livro específico
        const updateQuery = "UPDATE book SET title = ?, author = ? WHERE id = ?";
        
        // Os valores a serem atualizados são passados como um array
        const values = [title, author, id];

        // A consulta é executada, e o resultado é armazenado na variável 'result'
        const [result] = await connection.execute(updateQuery, values);
        
        // Retorna o resultado da atualização
        return result;
    } catch (error) {
        // Se houver um erro, lança uma exceção com uma mensagem de erro
        throw new Error(`Erro ao atualizar item: ${error.message}`);
    }
};

// Função assíncrona para deletar um livro da tabela 'book'
const deleteItem = async (id) => {
    try {
        // A consulta SQL para deletar um livro específico
        const deleteQuery = "DELETE FROM book WHERE id = ?";

        // O valor do ID a ser deletado é passado como um array
        const values = [id];

        // A consulta é executada, e o resultado é armazenado na variável 'result'
        const [result] = await connection.execute(deleteQuery, values);
        
        // Retorna o resultado da exclusão
        return result;
    } catch (error) {
        // Se houver um erro, lança uma exceção com uma mensagem de erro
        throw new Error(`Erro ao excluir item: ${error.message}`);
    }
};

// Exporta as funções para que possam ser utilizadas em outras partes do sistema
module.exports = { getAllItems, insertItem, updateItem, deleteItem };
