<template>
  <el-table v-loading="props.loading" :data="props.list">
    <el-table-column
      v-if="msgType === MsgType.Message"
      label="请求消息类型"
      align="center"
      prop="requestMessageType"
    />
    <el-table-column
      v-if="msgType === MsgType.Keyword"
      label="关键词"
      align="center"
      prop="requestKeyword"
    />
    <el-table-column
      v-if="msgType === MsgType.Keyword"
      label="匹配类型"
      align="center"
      prop="requestMatch"
    >
      <template #default="scope">
        <dict-tag :type="DICT_TYPE.MP_AUTO_REPLY_REQUEST_MATCH" :value="scope.row.requestMatch" />
      </template>
    </el-table-column>
    <el-table-column label="回复消息类型" align="center">
      <template #default="scope">
        <dict-tag :type="DICT_TYPE.MP_MESSAGE_TYPE" :value="scope.row.responseMessageType" />
      </template>
    </el-table-column>
    <el-table-column label="回复内容" align="center">
      <template #default="scope">
        <div v-if="scope.row.responseMessageType === 'text'">
          {{ scope.row.responseContent }}
        </div>
        <div v-else-if="scope.row.responseMessageType === 'voice'">
          <WxVoicePlayer v-if="scope.row.responseMediaUrl" :url="scope.row.responseMediaUrl" />
        </div>
        <div v-else-if="scope.row.responseMessageType === 'image'">
          <a target="_blank" :href="scope.row.responseMediaUrl">
            <img :src="scope.row.responseMediaUrl" style="width: 100px">
          </a>
        </div>
        <div
          v-else-if="
            scope.row.responseMessageType === 'video'
              || scope.row.responseMessageType === 'shortvideo'
          "
        >
          <WxVideoPlayer
            v-if="scope.row.responseMediaUrl"
            :url="scope.row.responseMediaUrl"
            style="margin-top: 10px"
          />
        </div>
        <div v-else-if="scope.row.responseMessageType === 'news'">
          <WxNews :articles="scope.row.responseArticles" />
        </div>
        <div v-else-if="scope.row.responseMessageType === 'music'">
          <WxMusic
            :title="scope.row.responseTitle"
            :description="scope.row.responseDescription"
            :thumb-media-url="scope.row.responseThumbMediaUrl"
            :music-url="scope.row.responseMusicUrl"
            :hq-music-url="scope.row.responseHqMusicUrl"
          />
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      align="center"
      prop="createTime"
      :formatter="dateFormatter"
      width="180"
    />
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button
          v-hasPermi="['mp:auto-reply:update']"
          type="primary"
          link
          @click="emit('on-update', scope.row.id)"
        >
          修改
        </el-button>
        <el-button
          v-hasPermi="['mp:auto-reply:delete']"
          type="danger"
          link
          @click="emit('on-delete', scope.row.id)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { MsgType } from './types'
import WxVideoPlayer from '@/views/mp/components/wx-video-play'
import WxVoicePlayer from '@/views/mp/components/wx-voice-play'
import WxMusic from '@/views/mp/components/wx-music'
import WxNews from '@/views/mp/components/wx-news'
import { dateFormatter } from '@/utils/formatTime'
import { DICT_TYPE } from '@/utils/dict'

const props = defineProps<{
  loading: boolean
  list: any[]
  msgType: MsgType
}>()

const emit = defineEmits<{
  (e: 'on-update', v: number)
  (e: 'on-delete', v: number)
}>()
</script>
