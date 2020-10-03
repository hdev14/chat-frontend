import React, { useRef, useState } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

import { MessageType, Message, Direction} from '../../message-types'
import SendIcon from './SendIcon'
import './styles.css'



const Chat: React.FC = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const ulRef = useRef<HTMLUListElement>(null)

  function makeAndSendMessage(author: string, direction: Direction): void {
    const msg = {
      type: MessageType.MESSAGE,
      author,
      content: message,
      timestamp: new Date(),
      direction
    }
    setMessages([...messages, msg])
    setMessage('')
  }

  function onKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      makeAndSendMessage('Você', Direction.RIGHT)
    }
  }

  function onClickHandler(e: React.MouseEvent<any, MouseEvent>): void {
    makeAndSendMessage('Você', Direction.RIGHT)
  }

  return (
    <main>
      <section id="chat">
        <div id="chat-header">
          <h3>Chat</h3>
          <strong title="Compartilhe o ID com outras pessoas.">ID: 1231sd-123123-sdsdf</strong>
        </div>
        <ul ref={ulRef}>
          {messages.map((msg, index) => (
            <li key={index} className={msg.direction}>
              <div>
                <strong>{msg.author}</strong>
                <p>{msg.content}</p>
              </div>
              <small>{msg.timestamp.toString()}</small>
            </li>
          ))}
        </ul>
        <InputGroup size="md">
          <Input
            type="text"
            autoFocus
            placeholder="escrever mensagem..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={onKeyPressHandler} />
          <InputGroupAddon addonType="append">
            <Button onClick={onClickHandler} color="success">
              <SendIcon />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </section>
    </main>
  )
}

export default Chat
