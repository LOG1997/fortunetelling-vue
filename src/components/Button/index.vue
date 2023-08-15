<template>
  <button
    class="log-btn"
    :class="[
      'btn-style',
      {
        'is-large': size === 'large',
        'is-medium': size === 'medium',
        'is-small': size === 'small',
        'is-mini': size === 'mini',
        'is-text': text,
        'is-primary': type === 'primary',
        'is-info': type === 'info',
        'is-warning': type === 'warning',
        'is-success': type === 'success',
        'is-danger': type === 'danger',
        'is-disabled': disabled,
        'is-plain': plain,
      },
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import { ButtonType, ButtonSize } from './type';
import { useButton } from './use-button';
const props = defineProps({
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['click']);
const { handleClick } = useButton(props, emits);
</script>
<style scoped lang="scss">
@import "./button.scss";
</style>
