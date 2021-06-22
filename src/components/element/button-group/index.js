import ButtonGroup from './src/buttonGroup.vue';

ButtonGroup.install = (Vue) => {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
