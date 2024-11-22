# CRUD-Book

Este projeto consiste em uma aplicação CRUD (Create, Read, Update, Delete) para gerenciamento de livros. O sistema permite que os usuários realizem operações básicas de manipulação de dados de livros, como adicionar, editar, visualizar e excluir informações de livros em uma base de dados MySQL.

## Requisitos

Para rodar esse projeto, você precisará dos seguintes requisitos:

1. **Node.js** - Ambiente de execução JavaScript para o back-end e front-end do projeto.
2. **XAMPP** - Pacote que inclui Apache e MySQL, usado para fornecer o servidor local e o banco de dados.
3. **MySQL Workbench** - Ferramenta para gerenciamento visual do banco de dados MySQL.

### Antes de rodar o app, execute os seguintes passos:

#### 1. **Executar os Scripts SQL**:
   No diretório `./services/src/sql/`, há dois arquivos SQL importantes:
   - `create_db.sql`: Este script cria o banco de dados necessário para o aplicativo.
   - `populate.sql`: Este script é opcional, mas pode ser executado para popular o banco de dados com dados iniciais de exemplo.

   Para executar esses scripts, você pode usar o MySQL Workbench ou o terminal do MySQL. Certifique-se de que o MySQL esteja rodando no XAMPP e de que você tenha acesso ao banco de dados.

#### 2. **Instalar as Dependências**:
   No diretório `./front/` (front-end) e `./services/` (back-end), execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm i
   ```

   Isso vai instalar todas as dependências necessárias para rodar tanto o front-end quanto o back-end da aplicação.

### Rodar o Projeto:
   Após instalar as dependências, inicie o servidor de desenvolvimento para o front-end e back-end:

   Separadamente abra um terminal nos diretórios `./front/` e `./services/`, execute:

   ```bash
   npm run dev
   ```

   Isso irá iniciar ambos os servidores de desenvolvimento. O front-end estará disponível em `http://localhost:5173` e o back-end em `http://localhost:3003` (ou conforme configurado).
