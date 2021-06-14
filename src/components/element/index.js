import Row from '@element/row';
import Col from '@element/col';
import Container from '@element/container';
import Header from '@element/header';
import Aside from '@element/aside';
import Main from '@element/main';
import Footer from '@element/footer';
import Icon from '@element/icon';
import Button from '@element/button';

const components = [
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Icon,
  Button,
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
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Icon,
  Button,
};

export {
  install,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Button,
};
