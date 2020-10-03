export type MessageData = {
  type: string,
  author: string,
  content: string,
  timestamp: Date
}

export enum Direction {
  Right = 'right',
  Left = 'left'
}

export type Message = MessageData & { direction: Direction }
