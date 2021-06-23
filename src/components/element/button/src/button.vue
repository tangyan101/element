<template>
  <button
    class="el-button"
    :autofocus="autofocus"
    :type="nativeType"
    @click=" e => $emit('click', e)"
    :class="[
      type ? `el-button--${type}` : 'el-button--default',
      size ? `el-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
    },
  },
};
</script>
