const user = state => state.user.user
const hasUser = state => {
  const userState = user(state)

  if (!userState.id) return false
  if (!userState.name) return false

  return true
}

export { user, hasUser }
