<template>
  <div ref="contentDetailWrap" :class="[`${prefixCls}-container`]">
    <Sticky :offset="offset">
      <div
        class="h-50px flex items-center b-b-1 bg-white pr-10px text-center" :class="[
          `${prefixCls}-header`,
        ]"
      >
        <div class="flex pl-10px pr-10px" :class="[`${prefixCls}-header__back`]">
          <ElButton @click="emit('back')">
            <Icon class="mr-5px" icon="ep:arrow-left" />
            {{ t('common.back') }}
          </ElButton>
        </div>
        <div class="flex flex-1 justify-center" :class="[`${prefixCls}-header__title`]">
          <slot name="title">
            <label class="text-16px font-700">{{ title }}</label>
          </slot>
        </div>
        <div class="flex pl-10px pr-10px" :class="[`${prefixCls}-header__right`]">
          <slot name="right" />
        </div>
      </div>
    </Sticky>
    <div style="padding: var(--app-content-padding)">
      <ElCard class="mb-20px" :class="[`${prefixCls}-body`]" shadow="never">
        <div>
          <slot />
        </div>
      </ElCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/hooks/web/useDesign'

defineOptions({ name: 'ContentDetailWrap' })

defineProps({
  title: propTypes.string.def(''),
  message: propTypes.string.def(''),
})

const emit = defineEmits(['back'])

const { t } = useI18n()

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('content-detail-wrap')

const offset = ref(85)
const contentDetailWrap = ref()
onMounted(() => {
  offset.value = contentDetailWrap.value.getBoundingClientRect().top
})
</script>
