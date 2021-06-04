export default {
  name: 'el-row',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
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
  render(h) {
    return h(this.tag, {
      class: [
        'el-row',
        { 'el-row--flex': this.type === 'flex' },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`,
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
