import Row from '@element/row';
import Col from '@element/col';

const components = [
  Row,
  Col,
];

const install = (_vue) => {
  components.forEach((component) => {
    _vue.component(component.name, component);
  });
};

export default {
  install,
  Row,
  Col,
};

export {
  install,
  Row,
  Col,
};
