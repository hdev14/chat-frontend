import { MessageData } from './message-types'

class WebSocketSingleton {
  private wsConnection: WebSocket | null = null

  public connect(url: string): void {
    this.wsConnection = new WebSocket(url)
  }

  public disconnect(): void {
    this.wsConnection?.close()
  }

  public sendMessage(data: MessageData): void {
    this.wsConnection?.send(JSON.stringify(data))
  }

  public addEvent(event: "message" | "error", fn: any): void {
    this.wsConnection?.addEventListener<typeof event>(event, fn);
  }
}

export default new WebSocketSingleton()
