import { MessageModelType } from '../types'

export default class BaseConversation {
  public id: string
  public avatar: string
  public name: string
  public description: string
  public createTime: number
  public updateTime: number
  public unreadCount: number
  public msgList: Array<MessageModelType>

  constructor(
    id: string,
    avatar: string,
    name: string,
    descrition: string,
    createTime: number,
    updateTime: number,
    unreadCount: number,
    msgList: Array<MessageModelType>
  ) {
    this.id = id
    this.avatar = avatar
    this.name = name
    this.description = descrition
    this.createTime = createTime
    this.updateTime = updateTime
    this.unreadCount = unreadCount
    this.msgList = msgList
  }
}
