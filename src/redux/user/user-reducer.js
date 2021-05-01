import { produce } from 'immer'
import baseReducer from '@utilities/base-reducer'
import * as Actions from './user-actions'

const initialState = {
  user: {},
}

const userReducer = baseReducer(initialState, {
  [Actions.REQUEST_GET_USER_FINISHED](state, { payload }) {
    localStorage.setItem('userId', payload.id)
    return produce(state, draftState => {
      draftState.user = payload
    })
  },
})

export default userReducer
