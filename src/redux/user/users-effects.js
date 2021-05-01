import chatApi from '@api/chat-api'
import environment from '@environment'

const userRoutes = environment.chatApi.routes.user

const createUser = async payload => await chatApi.post(userRoutes.create, payload)
const getUserById = async id => await chatApi.get(userRoutes.getById.replace(':id', id))

export { createUser, getUserById }
