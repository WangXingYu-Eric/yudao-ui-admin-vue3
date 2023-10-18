<template>
  <div
    class="bg-[var(--el-color-white)] dark:border-1px dark:border-[var(--el-border-color)] dark:bg-[var(--el-bg-color)]" :class="[
      prefixCls,
    ]"
  >
    <div
      v-if="title"
      class="h-50px flex cursor-pointer items-center justify-between b-b-1 border-[var(--el-border-color)] border-solid px-10px dark:border-[var(--el-border-color)]" :class="[
        `${prefixCls}-header`,
      ]"
      @click="toggleClick"
    >
      <div class="font-18px relative ml-10px font-bold" :class="[`${prefixCls}-header__title`]">
        <div class="flex items-center">
          {{ title }}
          <ElTooltip v-if="message" :content="message" placement="right">
            <Icon class="ml-5px" icon="ep:warning" />
          </ElTooltip>
        </div>
      </div>
      <Icon v-if="collapse" :icon="show ? 'ep:arrow-down' : 'ep:arrow-up'" />
    </div>

    <ElCollapseTransition>
      <div v-show="show" class="p-10px" :class="[`${prefixCls}-content`]">
        <ElDescriptions
          :column="props.columns"
          :direction="mobile ? 'vertical' : 'horizontal'"
          border
          v-bind="getBindValue"
        >
          <template v-if="slots.extra" #extra>
            <slot name="extra" />
          </template>
          <ElDescriptionsItem
            v-for="item in schema"
            :key="item.field"
            min-width="80"
            v-bind="getBindItemValue(item)"
          >
            <template #label>
              <slot
                :name="`${item.field}-label`"
                :row="{
                  label: item.label,
                }"
              >
                {{ item.label }}
              </slot>
            </template>

            <template #default>
              <slot v-if="item.dateFormat">
                {{
                  data[item.field] !== null ? dayjs(data[item.field]).format(item.dateFormat) : ''
                }}
              </slot>
              <slot v-else-if="item.dictType">
                <DictTag :type="item.dictType" :value="`${data[item.field]}`" />
              </slot>
              <slot v-else :name="item.field" :row="data">
                {{ data[item.field] }}
              </slot>
            </template>
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>
    </ElCollapseTransition>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import dayjs from 'dayjs'
import { useDesign } from '@/hooks/web/useDesign'
import { propTypes } from '@/utils/propTypes'
import { useAppStore } from '@/store/modules/app'
import type { DescriptionsSchema } from '@/types/descriptions'

defineOptions({ name: 'Descriptions' })

const props = defineProps({
  title: propTypes.string.def(''),
  message: propTypes.string.def(''),
  collapse: propTypes.bool.def(true),
  columns: propTypes.number.def(1),
  schema: {
    type: Array as PropType<DescriptionsSchema[]>,
    default: () => [],
  },
  data: {
    type: Object as PropType<any>,
    default: () => ({}),
  },
})

const appStore = useAppStore()

const mobile = computed(() => appStore.getMobile)

const attrs = useAttrs()

const slots = useSlots()

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('descriptions')

const getBindValue = computed(() => {
  const delArr: string[] = ['title', 'message', 'collapse', 'schema', 'data', 'class']
  const obj = { ...attrs, ...props }
  for (const key in obj) {
    if (delArr.includes(key))
      delete obj[key]
  }
  return obj
})

const getBindItemValue = (item: DescriptionsSchema) => {
  const delArr: string[] = ['field']
  const obj = { ...item }
  for (const key in obj) {
    if (delArr.includes(key))
      delete obj[key]
  }
  return obj
}

// 折叠
const show = ref(true)

const toggleClick = () => {
  if (props.collapse)
    show.value = !unref(show)
}
</script>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-descriptions;

.#{$prefix-cls}-header {
  &__title {
    &::after {
      position: absolute;
      top: 3px;
      left: -10px;
      width: 4px;
      height: 70%;
      background: var(--el-color-primary);
      content: '';
    }
  }
}

.#{$prefix-cls}-content {
  :deep(.#{$elNamespace}-descriptions__cell) {
    width: 0;
  }
}
</style>
