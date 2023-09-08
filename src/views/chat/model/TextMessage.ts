import { MessageRole, MessageType, SendStatus } from '../types'
import BaseMessage from './BaseMessage'

export default class TextMessage extends BaseMessage {
  content: string

  constructor(
    id: string,
    avatar: string,
    nickname: string,
    createTime: number,
    isRead: boolean,
    content: string,
    role: MessageRole,
    sendStatus: SendStatus,
    messageType: MessageType,
    conversationId: string
  ) {
    super(id, avatar, nickname, createTime, isRead, role, sendStatus, messageType, conversationId)
    this.content = content
  }
}
