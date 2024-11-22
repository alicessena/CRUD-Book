import { useState, useEffect } from "react"; 
import api from "../../api"; // Importação do arquivo de API 
import "./styles.css"; 

function Home() {

    // Definição dos estados para controlar o formulário e a lista de livros
    const [title, setTitle] = useState(''); // Armazena o título do livro
    const [author, setAuthor] = useState(''); // Armazena o autor do livro
    const [books, setBooks] = useState([]); // Armazena a lista de livros
    const [editing, setEditing] = useState(null); // Estado para controlar se um item está sendo editado

    // useEffect: Executa uma ação (busca de livros) assim que o componente é montado
    useEffect(() => {
        fetchBooks();  // Chama a função para buscar os dados da API de livros
    }, []); // Array vazio que garante que a função será executada apenas uma vez 

    // Função para buscar a lista de livros da API
    const fetchBooks = async () => { 
        // A função é assíncrona (async) porque estamos fazendo uma requisição HTTP, que é uma operação assíncrona.
        try {
            const response = await api.get('/'); // Realiza uma requisição GET para a API
            console.log(response); // Verifique a resposta da API no console para garantir que está retornando os dados corretamente
            setBooks(response.data); // Atualiza o estado com os dados recebidos. Certifique-se de que a API retorna um array em response.data
        } catch (error) {
            console.error(`Error ao buscar dados: ${error}`); // Exibe erros no console caso a requisição falhe
        }
    };

    // Função para enviar novos dados ao banco 
    async function handleSubmit(e) {
        e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

        try {
            if (editing) {
                // Se estiver editando um item existente:
                await api.put(`updateItem/${editing.id}`, {
                    title,  // Novo título
                    author,  // Novo autor
                });
                setEditing(null); // Limpa o estado de edição após atualizar
            } else {
                // Se não estiver editando, adiciona um novo item:
                await api.post('/insertItem', {
                    title,
                    author,
                });
            }

            // Limpa os campos de título e autor após enviar os dados
            setTitle('');
            setAuthor('');
            fetchBooks(); // Atualiza a lista de livros

        } catch (error) {
            console.error('Erro ao inserir/atualizar dados: ', error); // Exibe erros de requisição no console
        }
    }

    // Função para iniciar a edição de um item
    const handleEdit = (book) => {
        setTitle(book.title); // Preenche o campo de título com o valor do item selecionado
        setAuthor(book.author); // Preenche o campo de autor com o valor do item selecionado
        setEditing(book); // Define o item que está sendo editado
    };

    // Função para excluir um item
    const handleDelete = async (id) => {
        console.log(id); // Verifique se o ID está sendo passado corretamente
        try {
            await api.delete(`/deleteItem/${id}`); // Envia uma requisição DELETE para a API
            fetchBooks(); // Atualiza a lista de livros após exclusão
        } catch (error) {
            console.error('Erro ao excluir dados: ', error); // Exibe erros de requisição no console
        }
    };

    return (
        <div>
            <h1>{editing ? 'Editar Item' : 'Inserir Novo Item'}</h1> 
            {/* Exibe 'Editar Item' se estiver em modo de edição, ou 'Inserir Novo Item' se estiver inserindo um novo item */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {/* Campo de texto para o título. O valor do campo é controlado pelo estado 'title' */}
                </div>
                <div>
                    <label>Autor: </label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {/* Campo de texto para o autor. O valor do campo é controlado pelo estado 'author' */}
                </div>
                <button type="submit">{editing ? 'Atualizar' : 'Inserir'}</button>
                {/* O botão de envio muda dependendo se estamos em modo de edição ou inserção */}
                {editing && <button type="button" onClick={() => setEditing(null)}>Cancelar</button>}
                {/* Exibe o botão 'Cancelar' somente quando um item está sendo editado */}
            </form>

            <h1>Tabela de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <button onClick={() => handleEdit(book)}>Editar</button>
                                {/* Quando o botão Editar é clicado, o estado de edição é ativado e o formulário é preenchido */}
                                <button onClick={() => handleDelete(book.id)}>Excluir</button>
                                {/* Quando o botão Excluir é clicado, o livro é excluído da lista */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
