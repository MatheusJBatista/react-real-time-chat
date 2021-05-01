import { produce } from 'immer'
import baseReducer from '@utilities/base-reducer'
import * as Actions from './room-message-actions'

const initialState = {
  room: '',
  messages: [],
}

const roomMessageReducer = baseReducer(initialState, {
  [Actions.ENTER_ROOM](state, { payload: { room, messages } }) {
    return produce(state, draftState => {
      draftState.room = room
      draftState.messages = messages
    })
  },
  [Actions.RECEIVE_MESSAGE](state, { payload }) {
    return produce(state, draftState => {
      console.log(payload)
      draftState.messages = [...draftState.messages, payload]
    })
  },
  [Actions.SEND_MESSAGE](state, { payload }) {
    return produce(state, draftState => {
      draftState.messages = [...draftState.messages, payload]
    })
  },
})

export default roomMessageReducer
