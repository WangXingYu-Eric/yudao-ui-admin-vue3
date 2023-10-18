<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header" />
    </template>
    <el-row>
      <el-col :span="4">
        <ElAvatar shape="square" :size="140" :src="user.avatar || undefined" />
      </el-col>
      <el-col :span="20">
        <el-descriptions :column="2">
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="用户名" icon="ep:user" />
            </template>
            {{ user.name || '空' }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="昵称" icon="ep:user" />
            </template>
            {{ user.nickname }}
          </el-descriptions-item>
          <el-descriptions-item label="手机号">
            <template #label>
              <DescriptionsItemLabel label="手机号" icon="ep:phone" />
            </template>
            {{ user.mobile }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="性别" icon="fa:mars-double" />
            </template>
            <dict-tag :type="DICT_TYPE.SYSTEM_USER_SEX" :value="user.sex" />
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="所在地" icon="ep:location" />
            </template>
            {{ user.areaName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="注册 IP" icon="ep:position" />
            </template>
            {{ user.registerIp }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="生日" icon="fa:birthday-cake" />
            </template>
            {{ user.birthday ? formatDate(user.birthday) : '空' }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="注册时间" icon="ep:calendar" />
            </template>
            {{ user.createTime ? formatDate(user.createTime) : '空' }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <DescriptionsItemLabel label="最后登录时间" icon="ep:calendar" />
            </template>
            {{ user.loginDate ? formatDate(user.loginDate) : '空' }}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import { DICT_TYPE } from '@/utils/dict'
import { formatDate } from '@/utils/formatTime'
import type * as UserApi from '@/api/member/user'
import { DescriptionsItemLabel } from '@/components/Descriptions/index'

const { user } = defineProps<{ user: UserApi.UserVO }>()
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
