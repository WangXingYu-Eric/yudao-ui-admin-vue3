<template>
  <BaseMesageLayout :message="props.message">
    <template #content>
      <view class="p-3 bg-gray-2 rounded">
        <label>{{ props.message.content }}</label>
      </view>
    </template>
  </BaseMesageLayout>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { useChatStore } from '../../store/chatstore'
import BaseMesageLayout from '../Message/BaseMessage.vue'
import { MessageModelType } from '../../types/index'

defineOptions({ name: 'TextMessage' })

const props = defineProps({
  message: {
    type: Object as PropType<MessageModelType>,
    default: () => {}
  }
})

const { sessionList, setCurrentConversation, setCurrentSessionIndex } = useChatStore()
</script>
