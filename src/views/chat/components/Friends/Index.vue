<template>
  <view
    class="flex flex-col items-center h-full py-2 b-1 b-gray b-solid"
    style="width: 248px; min-width: 248px"
  >
    <view class="flex flex-col w-full">
      <FriendItem
        v-for="(item, index) in friendList"
        :key="item.id"
        :index="index"
        :friend="item"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import FriendItem from '../FriendItem/Index.vue'
import { useFriendStore } from '../../store/friendstore'
import { onMounted } from 'vue'

defineOptions({ name: 'Friends' })

const { friendList } = useFriendStore()
onMounted(() => {
  // set default conversation
})
</script>
