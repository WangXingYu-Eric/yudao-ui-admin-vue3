import { MessageRole, MessageType, SendStatus } from '../types'

export default class BaseMessage {
  id: string
  avatar: string
  nickname: string
  createTime: number
  isRead: boolean
  role: MessageRole
  sendStatus: SendStatus
  messageType: MessageType
  conversationId: string

  constructor(
    id: string,
    avatar: string,
    nickname: string,
    createTime: number,
    isRead: boolean,
    role: MessageRole,
    sendStauts: SendStatus,
    messageType: MessageType,
    conversationId: string
  ) {
    this.id = id
    this.avatar = avatar
    this.nickname = nickname
    this.createTime = createTime
    this.isRead = isRead
    this.role = role
    this.sendStatus = sendStauts
    this.messageType = messageType
    this.conversationId = conversationId
  }
}
