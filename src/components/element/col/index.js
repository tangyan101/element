import Col from './src/Col';

Col.install = (_vue) => {
  _vue.component(Col.name, Col);
};

export default Col;
