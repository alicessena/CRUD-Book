# Tratar erro do MySql
Ao tentar fazer a conexão com o banco pela primeira vez, pode ocorrer um erro. Nesse caso, abre o gerenciador de banco de dados
E execute a seguinte linha:

ALTER USER 'seuUsuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'suaSenha';

FLUSH PRIVILEGES;



# Passos para Configuração do Projeto Node.js
## 1. Inicializar um novo projeto Node.js

```bash
npm init -y
```

## 2. Instalar o Express
Instala o Express, um framework para Node.js que lida com solicitações HTTP e cria rotas:
```bash
npm i express
```

## 3. Instalar o MySQL2
Instala o mysql2, um módulo do Node.js para conexão com MySQL:
```bash
npm i mysql2
```

## 4. Instalar o Nodemon
Instala o nodemon, uma ferramenta que reinicia automaticamente a aplicação do Node quando detecta alterações de arquivo no diretório:
```bash
npm i nodemon
```

## 5. Instalar o CORS
Instala o CORS, uma maneira de permitir que um site acesse recursos de outro site, mesmo que estejam em domínios diferentes. Isso é útil, por exemplo, quando você tem um site que precisa acessar uma API em um domínio diferente:
```bash
npm i cors
```

## 6. Adicionar um script 'dev' ao package.json
Adiciona um script 'dev' ao `package.json` que inicia o servidor com o nodemon:
```json
"scripts": {
  "dev": "nodemon src/server.js"
}
```
```
