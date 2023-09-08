import { defineStore } from 'pinia'
import BaseConversation from '../model/BaseConversation'
import BaseMessage from '../model/BaseMessage'
import { ConversationModelType, MessageRole, MessageType, SendStatus } from '../types/index.d.ts'

interface ChatStoreModel {
  sessionList: Array<ConversationModelType>
  currentSession: ConversationModelType | null
  currentSessionIndex: number
  inputText: string
}

export const useChatStore = defineStore('chatStore', {
  state: (): ChatStoreModel => ({
    sessionList: [
      {
        id: '11111',
        name: '张三',
        avatar:
          'https://img.zcool.cn/community/019fb65925bc32a801216a3ef77f7b.png@1280w_1l_2o_100sh.png',
        description: 'sss',
        createTime: 1693970987760,
        updateTime: 1693970987760,
        unreadCount: 1,
        msgList: [
          {
            avatar:
              'https://img0.baidu.com/it/u=1121635512,1294972039&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
            nickname: 'Dylan May',
            id: '222221111',
            isRead: false,
            messageType: MessageType.TEXT,
            sendStatus: SendStatus.SUCCESS,
            role: MessageRole.SELF,
            createTime: 1693970987760,
            conversationId: '11111',
            content: 'hello MUSK'
          },
          {
            avatar:
              'https://img0.baidu.com/it/u=4211304696,1059959254&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1174',
            nickname: 'Elon Musk',
            id: '2222222222',
            isRead: false,
            messageType: MessageType.TEXT,
            sendStatus: SendStatus.SUCCESS,
            role: MessageRole.OTHER,
            createTime: 1693970987760,
            conversationId: '11111',
            content: 'hello DYLAN'
          }
        ]
      },
      {
        id: '22222',
        name: '搞笑的一家人',
        avatar:
          'https://img.zcool.cn/community/019fb65925bc32a801216a3ef77f7b.png@1280w_1l_2o_100sh.png',
        description: '今天晚上吃啥',
        createTime: 1693970987760,
        updateTime: 1693970987760,
        unreadCount: 1,
        msgList: [
          {
            avatar:
              'https://img.zcool.cn/community/019fb65925bc32a801216a3ef77f7b.png@1280w_1l_2o_100sh.png',
            nickname: '小艳',
            id: '22222',
            isRead: false,
            messageType: MessageType.TEXT,
            sendStatus: SendStatus.SUCCESS,
            role: MessageRole.OTHER,
            createTime: 1693970987760,
            conversationId: '22222',
            content: 'what your name'
          }
        ]
      }
    ],
    currentSession: null,
    currentSessionIndex: 0,
    inputText: ''
  }),

  getters: {
    getSessionList(state: ChatStoreModel): Array<ConversationModelType> {
      return state.sessionList
    },

    getCurrentSession(state: ChatStoreModel): ConversationModelType | null {
      return state.currentSession
    },

    getCurrentSessionIndex(state: ChatStoreModel): number {
      return state.currentSessionIndex
    }
  },

  actions: {
    addSession(session: BaseConversation) {
      this.sessionList.push(session)
    },

    setCurrentConversation() {
      this.currentSession = this.sessionList[this.currentSessionIndex]
    },

    setCurrentSessionIndex(index: number) {
      this.currentSessionIndex = index
    },

    setInputText(content: string) {
      this.inputText = content
    },

    addMessageToCurrentSession<T extends BaseMessage>(message: T): void {
      this.currentSession?.msgList.push(message)
    },

    addMessageToSesstion<T extends BaseMessage>(message: T): void {
      // get the conversation from list
      const conversationIndex = this.sessionList.findIndex((item) => {
        return item.id === message.conversationId
      })

      const msgConversation = this.sessionList[conversationIndex]

      // add the message
      msgConversation?.msgList.push(message)

      // replace the old Conversation
      this.sessionList.splice(conversationIndex, 1, msgConversation)
    }
  }
})
