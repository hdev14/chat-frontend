import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { v4 as uuidv4, validate } from 'uuid'
import { Form as BSForm, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'

import WsClient from '../../WebSocketSingleton'
import './styles.css'

const Form: React.FC = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [chatId, setChatId] = useState('')
  const [error, setError] = useState('')

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function createChat (name: string, chatId: string): void {
    const url = `ws://localhost:4141/?name=${name}&id=${chatId}`
    WsClient.connect(url)
  }

  function onSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if (name) {
      const id = uuidv4()
      createChat(name, id)
      history.push('/chat', { chatId: id })
    }
  }

  function getIn (_: any): void {
    setModal(!Modal)
    if (!validate(chatId)) {
      setError('ID Inválido.')
      return;
    }
    createChat(name, chatId)
    setError('')
    history.push('/chat', { chatId })
  }

  function toggleModalWithName (_: any): void {
    if (!name) {
      setError('Por favor, digite o seu nome.')
      return;
    }

    setModal(!modal)
    setError('')
  }

  return (
    <main>
      <section id="form">
        <h3 className="text-center">Chat</h3>
        {error && (
          <Alert color="danger">
            {error}
          </Alert>
        )}
        <BSForm onSubmit={onSubmit}>
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input
              required
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <Button type="submit" color="primary" block>Novo  chat</Button>
          <Button
            block
            type="button"
            color="secondary"
            onClick={toggleModalWithName}>
            Já tenho o ID!
          </Button>
        </BSForm>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Chat ID</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              type="text"
              name="chatid"
              placeholder="Digite o ID do chat"
              onChange={(e) => setChatId(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color={chatId ? 'success' : 'secondary'}
            onClick={getIn}>
            Confirmar
          </Button>
        </ModalFooter>
      </Modal>
    </main>
  )
}

export default Form
