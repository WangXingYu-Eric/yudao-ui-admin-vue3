<template>
  <view
    class="flex flex-col items-center w-full border-b-1 border-b-gray border-b-solid"
    style="height: 248px"
  >
    <view class="flex p-2 w-full" style="height: 20px">
      <Icon icon="ep:apple" color="var(--top-header-text-color)" class="custom-hover" />
      <Icon icon="ep:folder" color="var(--top-header-text-color)" class="custom-hover" />
      <Icon icon="ep:chat-line-square" color="var(--top-header-text-color)" class="custom-hover" />
    </view>
    <ElInput
      type="textarea"
      class="h-full"
      clearable
      v-model="chatStore.inputText"
      input-style="border: none !important; box-shadow: none !important"
      :autosize="{ minRows: 10, maxRows: 11 }"
      placeholder="Press Enter to send"
      @keydown.enter="onEnter"
    />
  </view>
</template>

<script lang="ts" setup>
import TextMessage from '../../model/TextMessage'
import { useChatStore } from '../../store/chatstore'
import { SendStatus, MessageRole, MessageType } from '../../types/index.d.ts'

defineOptions({ name: 'InputSection' })

const chatStore = useChatStore()
const onEnter = () => {
  console.log('enter pressed')
  const msg = createTextMessage(chatStore.inputText)
  chatStore.addMessageToCurrentSession(msg)
  chatStore.setInputText('')
}

const createTextMessage = (content: string): TextMessage => {
  console.log('====>>>>', content)
  const _localId = `${new Date().getTime()}`
  // 部分信息从account信息里面获取
  const msg = new TextMessage(
    _localId,
    'https://img0.baidu.com/it/u=1121635512,1294972039&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
    'Dylan May',
    new Date().getTime(),
    false,
    content,
    MessageRole.SELF,
    SendStatus.SUCCESS,
    MessageType.TEXT,
    chatStore.currentSession?.id || ''
  )

  return msg
}
</script>
