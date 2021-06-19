<template>
  <button class="el-button"
    :class="[
      type ? `el-button--${type}` : 'el-button--default',
      plain ? `is-plain` : ''
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
  },
};
</script>
