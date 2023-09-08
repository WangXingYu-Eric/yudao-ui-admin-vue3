<template>
  <view
    class="flex flex-col items-start w-full border-b-1 border-b-gray border-b-solid flex-1 border-b-1 border-b-gray border-b-solid py-2"
  >
    <template v-for="item in chatStore.currentSession?.msgList">
      <TextMessage v-if="item.messageType === MessageType.TEXT" :key="item.id" :message="item" />
      <ImageMessage v-if="item.messageType === MessageType.IMAGE" :key="item.id" :message="item" />
    </template>
  </view>
</template>

<script lang="ts" setup>
import { useChatStore } from '../../store/chatstore'
import TextMessage from '@/views/chat/components/Message/TextMessage.vue'
import ImageMessage from '@/views/chat/components/Message/ImageMessage.vue'
import { MessageType } from '../../types/index.d.ts'

defineOptions({ name: 'ChatMessage' })

const chatStore = useChatStore()
</script>
