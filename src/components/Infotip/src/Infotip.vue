<template>
  <div
    class="mb-20px border-1px border-[var(--el-color-primary)] border-solid bg-[var(--el-color-primary-light-9)] p-20px" :class="[
      prefixCls,
    ]"
  >
    <div v-if="title" class="flex items-center" :class="[`${prefixCls}__header`]">
      <Icon :size="22" color="var(--el-color-primary)" icon="ep:warning-filled" />
      <span class="pl-5px text-16px font-bold" :class="[`${prefixCls}__title`]">{{ title }}</span>
    </div>
    <div :class="`${prefixCls}__content`">
      <p v-for="(item, $index) in schema" :key="$index" class="mt-15px text-14px">
        <Highlight
          :color="highlightColor"
          :keys="typeof item === 'string' ? [] : item.keys"
          @click="keyClick"
        >
          {{ showIndex ? `${$index + 1}、` : '' }}{{ typeof item === 'string' ? item : item.label }}
        </Highlight>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { propTypes } from '@/utils/propTypes'
import type { TipSchema } from '@/types/infoTip'

defineOptions({ name: 'InfoTip' })

defineProps({
  title: propTypes.string.def(''),
  schema: {
    type: Array as PropType<Array<string | TipSchema>>,
    required: true,
    default: () => [],
  },
  showIndex: propTypes.bool.def(true),
  highlightColor: propTypes.string.def('var(--el-color-primary)'),
})

const emit = defineEmits(['click'])

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('infotip')

const keyClick = (key: string) => {
  emit('click', key)
}
</script>
