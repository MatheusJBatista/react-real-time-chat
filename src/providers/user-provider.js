import { createContext } from 'react'
import PropTypes from 'prop-types'
import RouteEnum from '@constants/RouteEnum'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import * as UserSelectors from '@selectors/user-selectors/user-selector'
import { getUserById } from '@redux/user/user-actions'

const UserContext = createContext('UserContext')

const UserProvider = ({ children }) => {
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')
  console.log('userId', userId)

  const hasUserInState = useSelector(UserSelectors.hasUser)

  if (!userId) dispatch(push(RouteEnum.SignIn))
  if (!hasUserInState) {
    dispatch(getUserById(userId))
    dispatch(push(RouteEnum.SignIn))
  } else dispatch(push(RouteEnum.Home))

  return <UserContext.Provider>{children}</UserContext.Provider>
}

export { UserContext }
export default UserProvider

UserProvider.propTypes = {
  children: PropTypes.func,
}
