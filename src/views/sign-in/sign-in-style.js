import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: black;
`

const Input = styled.input`
  width: 400px;
  height: 40px;
  font-size: 24px;
  ::placeholder {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    width: 350px;
  }

  @media (max-width: 365px) {
    width: 300px;
  }
`

const Button = styled.button`
  margin-top: 10px;
  width: 406px;
  height: 40px;
  font-size: 24px;
  background-color: purple;
  border: 0;
  cursor: pointer;
  color: white;

  :active {
    background-color: #ec00ec;
  }

  @media (max-width: 420px) {
    width: 356px;
  }

  @media (max-width: 365px) {
    width: 306px;
  }
`

export { Container, Input, Button }
