import axios from "axios"

const clientsAPI = axios.create({ baseURL: 'http://localhost:8000/clients' })

async function getClients() {
    const response = await clientsAPI.get('/')
    return response.data
}

async function getClient(id) {
    const response = await clientsAPI.get(`/${id}`)
    return response.data
}

async function postClient(client) {
    const response = await clientsAPI.post('/', client)
    return response.data
}

async function patchClient(id, client) {
    const response = await clientsAPI.patch(`/${id}`, client)
    return response.data
}

async function deleteClient(id) {
    const response = await clientsAPI.delete(`/${id}`)
    return response.data
}

export {
    getClients,
    getClient,
    postClient,
    patchClient,
    deleteClient
}