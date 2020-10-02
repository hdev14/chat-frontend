import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

let ws: WebSocket

const App: React.FC = () => {
  const [name, setName] = useState('')
  const [chatId, setChatId] = useState('')

  function createChat (): void {
    if (name && chatId) {
      ws = new WebSocket(`ws://localhost:4141/?name=${name}&id=${chatId}`)
    }
  }

  function genarateChatId (): void {
    setChatId(uuidv4())
  }

  /*
    TODO:
    - Create modal with buttons to create a new chat or get in a new one.
    - Create methods to connect and send messages
  */

  return (
    <h1>Hellow</h1>
  )
}

export default App
