import { useContext, useEffect, useState } from 'react'

import { SocketContext } from '@providers/socket-provider'
import { useDispatch, useSelector } from 'react-redux'
import * as RoomMessages from '@selectors/socket/room-messages'
import { Button, Input, Message, MessageContainer, Name } from './home-style'

const App = () => {
  const dispatch = useDispatch()
  const messages = useSelector(RoomMessages.messages)
  const { roomActions } = useContext(SocketContext)
  const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(roomActions.enterRoom('default'))
  }, [dispatch, roomActions])

  const handlerSendMessage = async () => {
    if (!value) return

    dispatch(roomActions.sendMessage(value))

    setValue('')
  }

  const handlerOnChangeInput = ({ target: { value } }) => setValue(value)

  return (
    <>
      <MessageContainer>
        {messages.map((message, i) => (
          <div key={i} style={{ display: 'flex' }}>
            <Name>{message.userName}: </Name>
            <Message>{message.message}</Message>
          </div>
        ))}
      </MessageContainer>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80%' }}>
          <Input onChange={handlerOnChangeInput} value={value} placeholder="digite aqui..." />
        </div>
        <div style={{ width: '18%', marginLeft: '2%' }}>
          <Button onClick={handlerSendMessage}>Enviar</Button>
        </div>
      </div>
    </>
  )
}

export default App
