import axios from 'axios' // Importando a biblioteca 'axios' para realização de requisições HTTP

const api = axios.create({
    // Definindo a URL base para todas as requisições feitas
    // Isso permite que você faça requisições com apenas o caminho 
    baseURL: 'http://localhost:3003/' //configurada a URL base da API
})

export default api;