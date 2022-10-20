import axios from 'axios'

const api = axios.create({
  baseURL: 'https://estagio.geopostenergy.com',
  headers: {
    'git-user': 'Nickolassilvaa',
  },
})

export default api
