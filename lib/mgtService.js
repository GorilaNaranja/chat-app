import mgtClient from '@/lib/mgtClient'

// Users
const login = async (user) => {
  const response = await mgtClient.post(`/login`, user)
  return response
}

const createUser = async (user) => {
  const response = await mgtClient.post(`/user`, user)
  return response
}

const getUsers = async () => {
  const response = await mgtClient.get(`/users`)
  return response
}

const getUser = async (userId) => {
  const response = await mgtClient.get(`/user/${userId}`)
  return response
}

const deleteUser = async (userId) => {
  const response = await mgtClient.delete(`/user/${userId}`)
  return response
}

export default {
  login,
  createUser,
  getUsers,
  getUser,
  deleteUser
}
