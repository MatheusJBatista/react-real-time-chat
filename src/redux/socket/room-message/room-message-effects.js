import environment from '@environment'
import chatApi from '@api/chat-api'

const messageRoutes = environment.chatApi.routes.message

const RoomMessageEffects = (socket, receiveMessageCallback, dispatch) => {
  const enterRoom = room => socket.emit('enter-room', room)
  const sendMessage = message => socket.emit('message', message)
  const leaveRoom = room => socket.leave(room)

  const getMessagesByRoom = async room => {
    const response = await chatApi.get(messageRoutes.getByRoom.replace(':room', room))
    return response.data
  }

  return { sendMessage, enterRoom, leaveRoom, getMessagesByRoom }
}

export default RoomMessageEffects
