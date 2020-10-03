import React, { useRef } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

import SendIcon from './SendIcon'
import './styles.css'

const Chat: React.FC = () => {
  const ulRef = useRef<HTMLUListElement>(null)

  return (
    <main>
      <section id="chat">
        <div id="chat-header">
          <h3>Chat</h3>
          <strong title="Compartilhe o ID com outras pessoas.">ID: 1231sd-123123-sdsdf</strong>
        </div>
        <ul ref={ulRef}>
          <li className="right">
            <strong>Nome</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam qui aperiam soluta molestiae.</p>
            <small>03 out às 18:27</small>
          </li>
          <li className="left">
            <strong>Nome</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam qui aperiam soluta molestiae.</p>
            <small>03 out às 18:27</small>
          </li>
          <li className="left">
            <strong>Nome</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam qui aperiam soluta molestiae.</p>
            <small>03 out às 18:27</small>
          </li>
          <li className="left">
            <strong>Nome</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam qui aperiam soluta molestiae.</p>
            <small>03 out às 18:27</small>
          </li>
          <li className="left">
            <strong>Nome</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam qui aperiam soluta molestiae.</p>
            <small>03 out às 18:27</small>
          </li>
          <li className="left">
            <strong>Nome</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam qui aperiam soluta molestiae.</p>
            <small>03 out às 18:27</small>
          </li>
        </ul>
        <InputGroup size="md">
          <Input type="text" placeholder="Escreva sua mensagem" />
          <InputGroupAddon addonType="append">
            <Button color="success">
              <SendIcon />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </section>
    </main>
  )
}

export default Chat
