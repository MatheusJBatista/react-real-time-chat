import { createContext } from 'react'
import PropTypes from 'prop-types'

import RoomActions from '@redux/socket/room-message/room-message-actions'
import RoomEffects from '@redux/socket/room-message/room-message-effects'

import useSocketIo from '@customHooks/socket-configuration'
import { useDispatch } from 'react-redux'

const SocketContext = createContext('SocketContext')

const SocketProvider = ({ children }) => {
  const dispatch = useDispatch()
  const socket = useSocketIo()

  const roomActions = RoomActions(socket, RoomEffects)

  socket.on('spread-message', message => dispatch(roomActions.receiveMessage(message, dispatch)))

  return <SocketContext.Provider value={{ roomActions, socket }}>{children}</SocketContext.Provider>
}

export { SocketContext }
export default SocketProvider

SocketProvider.propTypes = {
  children: PropTypes.func,
}
