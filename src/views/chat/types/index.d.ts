import BaseConversation from '../model/BaseConversation'
import BaseMessage from '../model/BaseMessage'
import { ChatConversation } from '../model/ChatConversation'
import ImageMessage from '../model/ImageMessage'
import TextMessage from '../model/TextMessage'

export enum MessageRole {
  SELF = 1,
  SYSTEM = 2,
  OTHER = 3
}

export enum SendStatus {
  FAILURE = 1,
  SENDING = 2,
  SUCCESS = 3
}

export enum MessageType {
  TEXT = 1,
  IMAGE = 2,
  AUDIO = 3,
  SYSTEM = 4
}

export const enum MENU_LIST_ENUM {
  CONVERSATION = 1,
  FRIENDS = 2
}

export type MessageModelType = BaseMessage | TextMessage | ImageMessage
export type ConversationModelType = BaseConversation | ChatConversation
