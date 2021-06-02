<template>
  <div
    :class="[
      'el-row',
      {'el-row--flex' : this.type === 'flex'},
      this.justify !== 'start' && `is-justify-${this.justify}`,
      this.align !== 'top' && `is-align-${this.align}`
    ]"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'el-row',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (value) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(value),
    },
    align: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'middle', 'bottom'].includes(value),
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${-(this.gutter / 2)}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  &::after,
  &::before {
    display: block;
    content: ''
  }
  &::after {
    clear: both;
  }

  &--flex{
    display: flex;
    &::after,
    &::before {
      display: none;
    }
    &.is-justify-start{
      justify-content: flex-start;
    }
    &.is-justify-end{
      justify-content: flex-end;
    }
    &.is-justify-center{
      justify-content: center;
    }
    &.is-justify-space-between{
      justify-content: space-between;
    }
    &.is-justify-space-around{
      justify-content: space-around;
    }
    &.is-align-top{
      align-items: flex-start;
    }
    &.is-align-bottom{
      align-items: flex-end;
    }
    &.is-align-middle{
      align-items: center;
    }
  }
}
</style>
