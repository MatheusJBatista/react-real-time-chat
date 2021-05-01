import { useMemo } from 'react'
import socketIo from 'socket.io-client'

import environment from '@environment'

const useSocketIo = () => {
  const socket = useMemo(() => socketIo(environment.socketURL, { transport: ['websocket'] }), [])

  return socket
}

export default useSocketIo
