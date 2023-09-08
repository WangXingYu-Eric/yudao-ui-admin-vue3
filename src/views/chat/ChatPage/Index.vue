<template>
  <view class="flex h-full flex-1">
    <ToolSection />
    <Session />
    <view class="flex w-full flex-col">
      <ChatHeader />
      <ChatMessage />
      <InputSection />
    </view>
  </view>
</template>

<script lang="ts" setup>
/**
 * TODO: Replace me with comment, and tell the main subject of this page
 */

import ToolSection from '../components/ToolSection/Index.vue'
import Session from '../components/Session/Index.vue'
import ChatHeader from '../components/ChatHeader/Index.vue'
import ChatMessage from '../components/ChatMessage/Index.vue'
import InputSection from '../components/InputSection/index.vue'

/**
 * Define Data Structure of this page, then initialize it with reactive object
 */
interface State {}

defineOptions({ name: 'ChatPage' })
</script>
