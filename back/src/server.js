const express = require('express'); // Importa o framework Express, que facilita a criação de servidores web em Node.js

// Importa o middleware CORS. CORS é um conjunto de regras que permite ou impede que seu site ou aplicativo acesse recursos de outro domínio. O middleware CORS ajuda a configurar essas permissões.
const cors = require('cors'); 

// Importa as funções que manipulam os dados (buscar, inserir, atualizar e excluir itens) de um arquivo separado chamado 'allItems'.
const { getAllItems, insertItem, updateItem, deleteItem } = require('./allItems');

// Cria uma instância do aplicativo Express, que representa o servidor web.
const app = express(); 

// Middleware para analisar o corpo da requisição e entender JSON (as requisições feitas no formato JSON serão convertidas para um formato que o Express consegue entender)
app.use(express.json()); 

// Middleware para permitir requisições de diferentes origens (domínios). Isso é útil quando o front-end e o back-end estão em domínios diferentes, por exemplo.
app.use(cors()); 

// Define a porta em que o servidor vai escutar. Nesse caso, o servidor vai escutar a porta 3003.
const PORT = 3003;

// Inicia o servidor na porta definida e imprime uma mensagem no console quando ele estiver rodando
app.listen(PORT, () => {
    console.log(`Funcionando na porta ${PORT}`);
});

// Rota para buscar todos os itens
app.get('/', async (req, res) => {
    try {
        const items = await getAllItems(); // Chama a função que busca todos os itens no banco de dados
        res.status(200).json(items); // Envia os itens como resposta com status 200 (OK) em formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message }); // Se ocorrer um erro, retorna uma mensagem de erro com status 500 (Erro Interno do Servidor)
    }
});

// Rota para inserir um novo item
app.post('/insertItem', async (req, res) => {
    const { title, author } = req.body; // Extrai as informações de título e autor do corpo da requisição (req.body)
    try {
        const result = await insertItem(title, author); // Chama a função que insere o item no banco de dados
        res.status(201).json(result); // Envia a resposta com o resultado da inserção e o status 201 (Criado)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Caso haja erro, retorna uma mensagem de erro com status 500
    }
});

// Rota para atualizar um item
app.put('/updateItem/:id', async (req, res) => {
    const { id } = req.params; // Extrai o ID do item a ser atualizado da URL da requisição
    const { title, author } = req.body; // Extrai o título e o autor do corpo da requisição

    try {
        // Chama a função que atualiza o item no banco de dados
        const result = await updateItem(id, title, author);
        res.status(200).json(result); // Envia a resposta com o resultado da atualização e status 200 (OK)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Caso ocorra um erro, retorna uma mensagem de erro com status 500
    }
});

// Rota para excluir um item
app.delete('/deleteItem/:id', async (req, res) => {
    const { id } = req.params; // Extrai o ID do item a ser excluído da URL da requisição

    try {
        // Chama a função que exclui o item no banco de dados
        const result = await deleteItem(id);
        res.status(200).json(result); // Envia a resposta com o resultado da exclusão e status 200 (OK)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Caso ocorra um erro, retorna uma mensagem de erro com status 500
    }
});
