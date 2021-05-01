import { combineReducers } from 'redux'

import roomMessage from './room-message/room-message-reducer'

const socketReducer = combineReducers({
  roomMessage,
})

export default socketReducer
