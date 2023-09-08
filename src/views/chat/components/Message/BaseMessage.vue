<template>
  <view
    class="flex w-full"
    :class="props.message.role === MessageRole.SELF ? 'flex-row-reverse' : 'flex-row'"
  >
    <el-avatar shape="square" size="default" class="mx-2" :src="props.message.avatar" />
    <view class="flex flex-col">
      <label class="text-xs text-gray-4 mb-1">{{ props.message.nickname }}</label>
      <slot name="content"></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { MessageModelType, MessageRole } from '../../types/index.d.ts'

defineOptions({ name: 'BaseMessage' })

const props = defineProps({
  message: {
    type: Object as PropType<MessageModelType>,
    default: () => {}
  }
})
</script>
