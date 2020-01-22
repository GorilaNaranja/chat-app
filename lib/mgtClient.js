import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
  timeout: 120000,
  headers: { 'Content-Type': 'application/json' }
})

client.interceptors.response.use(
  (response) => handleResponse(null, response),
  (err) => handleResponse(err, err.response)
)

function handleResponse(error, response) {
  if (error || !response) {
    const formatedError = generateError(error, response)
    return Promise.reject(formatedError)
  }

  return response.data
}

function generateError(error, response) {
  return (error && error.response && error.response.data) || error
}

export default client
