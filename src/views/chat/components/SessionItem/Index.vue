<template>
  <view class="flex py-2 border-b-gray-3 border-b-solid items-center px-2" :class="bgColor()">
    <el-avatar shape="square" size="default" class="mr-2" />
    <view class="flex flex-col flex-1">
      <label
        class="text-black-c text-size-sm font-medium text-ellipsis text-nowrap"
        :class="fontColor()"
        >{{ props.conversation.name }}</label
      >
      <label class="text-gray-f text-size-sm text-ellipsis text-nowrap mr-1" :class="fontColor()">{{
        props.conversation.description
      }}</label>
    </view>
    <view class="flex items-end h-full">
      <label class="text-gray-f text-size-sm text-nowrap" :class="fontColor()">{{
        formatPast(new Date(props.conversation.updateTime))
      }}</label>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { ConversationModelType } from '../../types'
import { formatPast } from '@/utils/formatTime'
import { useChatStore } from '../../store/chatstore'

defineOptions({ name: 'SessionItem' })

const props = defineProps({
  conversation: {
    type: Object as PropType<ConversationModelType>,
    default: () => {}
  },
  index: Number
})

const chatStore = useChatStore()

const bgColor = () => {
  return props.index === chatStore.currentSessionIndex ? 'bg-blue' : 'bg-white'
}

const fontColor = () => {
  return props.index === chatStore.currentSessionIndex ? 'text-white' : 'text-gray-f'
}
</script>
