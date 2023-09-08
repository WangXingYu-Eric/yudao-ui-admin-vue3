<template>
  <view class="flex flex-col items-center h-full py-2 b-1 b-gray b-solid" style="width: 248px">
    <view class="flex flex-col w-full">
      <SessionItem
        v-for="(item, index) in sessionList"
        :key="item.id"
        :index="index"
        :conversation="item"
        @click="() => onSessionItemClick(index)"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import SessionItem from '../SessionItem/Index.vue'
import { useChatStore } from '../../store/chatstore'
import { onMounted } from 'vue'

defineOptions({ name: 'Session' })

const { sessionList, setCurrentConversation, setCurrentSessionIndex } = useChatStore()

onMounted(() => {
  // set default conversation
  setCurrentConversation()
})

const onSessionItemClick = (index: number) => {
  setCurrentSessionIndex(index)
  setCurrentConversation()
}
</script>
