import styled from 'styled-components'

const MessageContainer = styled.div`
  overflow: auto;
  height: 92vh;
`

const Name = styled.p`
  color: white;
`

const Message = styled.p`
  color: white;
`

const Input = styled.input`
  width: 100%;
  height: 34px;
  ::placeholder {
    font-size: 20px;
  }
  font-size: 24px;
`
const Button = styled.button`
  margin-left: 5px;
  width: 100%;
  background-color: purple;
  border: 0;
  height: 40px;
  cursor: pointer;
  color: white;
  font-size: 14px;

  :active {
    background-color: #ec00ec;
  }
`

export { MessageContainer, Name, Message, Input, Button }
