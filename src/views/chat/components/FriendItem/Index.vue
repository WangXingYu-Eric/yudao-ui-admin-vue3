<template>
  <view class="flex py-2 border-b-gray-3 border-b-solid items-center px-2" :class="bgColor()">
    <el-avatar shape="square" size="default" class="mr-2" :src="friend.avatar" />
    <label>{{ friend.name }}</label>
  </view>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { useChatStore } from '../../store/chatstore'
import Friend from '../../model/Friend'

defineOptions({ name: 'SessionItem' })

const props = defineProps({
  friend: {
    type: Object as PropType<Friend>,
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
