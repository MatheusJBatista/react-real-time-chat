import { user } from '@selectors/user-selectors/user-selector'
import * as ActionUtility from '@utilities/action-utility'

const ENTER_ROOM = 'RealTimeChat.socket.room-message.ENTER_ROOM'
const LEAVE_ROOM = 'RealTimeChat.socket.room-message.LEAVE_ROOM'
const SEND_MESSAGE = 'RealTimeChat.socket.room-message.SEND_MESSAGE'
const RECEIVE_MESSAGE = 'RealTimeChat.socket.room-message.RECEIVE_MESSAGE'

const RoomMessageActions = (socket, romMessageEffects) => {
  const effects = romMessageEffects(socket)

  const enterRoom = room => {
    return async dispatch => {
      effects.enterRoom(room)

      const messages = await effects.getMessagesByRoom(room)

      await dispatch(
        ActionUtility.createAction(ENTER_ROOM, {
          room,
          messages,
        })
      )
    }
  }

  const leaveRoom = roomId => {
    return async (dispatch, getState) => {
      // TODO
    }
  }

  const sendMessage = message => {
    return async (dispatch, getState) => {
      const userId = user(getState())._id
      const userName = user(getState()).name
      const room = getState().socket.roomMessage.room
      const messagePayload = { room, userId, message, userName }

      effects.sendMessage(messagePayload)

      dispatch(ActionUtility.createAction(SEND_MESSAGE, messagePayload))
    }
  }

  const receiveMessage = message => {
    return dispatch => {
      dispatch(ActionUtility.createAction(RECEIVE_MESSAGE, message))
    }
  }

  return { sendMessage, enterRoom, leaveRoom, receiveMessage }
}

export default RoomMessageActions
export { ENTER_ROOM, LEAVE_ROOM, SEND_MESSAGE, RECEIVE_MESSAGE }
