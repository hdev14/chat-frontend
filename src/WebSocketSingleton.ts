import { MessageData } from './message-types'

interface EventMessageListener {
  (this: WebSocket, ev: MessageEvent): any
}

class WebSocketSingleton {
  private connection: WebSocket | null = null

  public connect(url: string): void {
    this.connection = new WebSocket(url)
  }

  public disconnect(): void {
    this.connection?.close()
  }

  public sendMessage(data: MessageData): void {
    this.connection?.send(JSON.stringify(data))
  }

  public addOnMessage(fn: EventMessageListener): void {
    if (this.connection) {
      this.connection.onmessage = fn;
    }
  }
}

export default new WebSocketSingleton()
