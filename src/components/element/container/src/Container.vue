<template>
  <div :class="['el-container', {'is-vertical' : isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      }
      if (this.direction === 'horizontal') {
        return false;
      }
      // 之前的写法
      // if (this.$slots.default.length > 0) {
      //   const vNodes = this.$slots.default;
      //   return vNodes.some((vNode) => {
      //     const { tag } = vNode.componentOptions;
      //     if (tag === 'el-header' || tag === 'el-footer') {
      //       return true;
      //     }
      //     return false;
      //   });
      // }

      // 改良后的
      return this.$slots.default.length > 0
        ? this.$slots.default.some((vNode) => (
          !!((vNode.componentOptions.tag === 'el-header' || vNode.componentOptions.tag === 'el-footer'))
        ))
        : false;
    },
  },
};
</script>
