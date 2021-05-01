import { connectRouter } from 'connected-react-router/immutable'
import { combineReducers } from 'redux'

import error from './error/error-reducer'
import requesting from './requesting/requesting-reducer'
import socket from './socket/socket-root-reducer'
import user from './user/user-reducer'

const RootReducer = history => {
  const reducerMap = {
    router: connectRouter(history),
    error,
    requesting,
    socket,
    user,
  }

  return combineReducers(reducerMap)
}

export default RootReducer
