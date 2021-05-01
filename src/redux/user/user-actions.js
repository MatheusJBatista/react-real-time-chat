import * as ActionUtility from '@utilities/action-utility'
import * as Effects from './users-effects'

const REQUEST_CREATE_USER = 'RealTimeChat.user.room-message.REQUEST_CREATE_USER'
const REQUEST_CREATE_USER_FINISHED = 'RealTimeChat.user.room-message.REQUEST_CREATE_USER_FINISHED'

const REQUEST_GET_USER = 'RealTimeChat.user.room-message.REQUEST_GET_USER'
const REQUEST_GET_USER_FINISHED = 'RealTimeChat.user.room-message.REQUEST_GET_USER_FINISHED'

const createUser = ({ name }) => {
  return async dispatch => {
    const userId = await ActionUtility.createThunkEffect(dispatch, REQUEST_CREATE_USER, Effects.createUser, { name })
    await getUserById(userId)(dispatch)
  }
}

const getUserById = id => {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_GET_USER, Effects.getUserById, id)
  }
}

export { REQUEST_CREATE_USER, REQUEST_CREATE_USER_FINISHED, REQUEST_GET_USER, REQUEST_GET_USER_FINISHED, createUser, getUserById }
