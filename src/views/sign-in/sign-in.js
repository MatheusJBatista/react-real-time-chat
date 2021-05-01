import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Container, Input } from './sign-in-style'
import * as UserActions from '@redux/user/user-actions'

const SignIn = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState()

  const handlerOnChange = ({ target: { value } }) => setValue(value)
  const handlerOnClick = () => {
    if (!value) return alert('Deve ser passado um nome')

    dispatch(UserActions.createUser({ name: value }))
  }

  return (
    <Container>
      <Input placeholder="Seu nome" onChange={handlerOnChange} value={value} />
      <Button onClick={handlerOnClick}>Entrar</Button>
    </Container>
  )
}

export default SignIn
