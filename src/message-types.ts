export enum MessageType {
  CONNECTION = 1,
  MESSAGE = 2
}

export type MessageData = {
  type: MessageType,
  author?: string,
  content: string,
  timestamp: Date
}

export enum Direction {
  RIGHT = 'right',
  LEFT = 'left'
}

export type Message = MessageData & { direction: Direction }
