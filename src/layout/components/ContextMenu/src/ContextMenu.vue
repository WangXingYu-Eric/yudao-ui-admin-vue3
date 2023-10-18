<template>
  <ElDropdown
    ref="elDropdownMenuRef"
    :class="prefixCls"
    :trigger="trigger"
    placement="bottom-start"
    popper-class="v-context-menu-popper"
    @command="command"
    @visible-change="visibleChange"
  >
    <slot />
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="(item, index) in schema"
          :key="`dropdown${index}`"
          :command="item"
          :disabled="item.disabled"
          :divided="item.divided"
        >
          <Icon :icon="item.icon" />
          {{ t(item.label) }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { ElDropdown } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'
import type { contextMenuSchema } from '@/types/contextMenu'

defineOptions({ name: 'ContextMenu' })

const props = defineProps({
  schema: {
    type: Array as PropType<contextMenuSchema[]>,
    default: () => [],
  },
  trigger: {
    type: String as PropType<'click' | 'hover' | 'focus' | 'contextmenu'>,
    default: 'contextmenu',
  },
  tagItem: {
    type: Object as PropType<RouteLocationNormalizedLoaded>,
    default: () => ({}),
  },
})

const emit = defineEmits(['visibleChange'])

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('context-menu')

const { t } = useI18n()

const command = (item: contextMenuSchema) => {
  item.command && item.command(item)
}

const visibleChange = (visible: boolean) => {
  emit('visibleChange', visible, props.tagItem)
}

const elDropdownMenuRef = ref<ComponentRef<typeof ElDropdown>>()

defineExpose({
  elDropdownMenuRef,
  tagItem: props.tagItem,
})
</script>
