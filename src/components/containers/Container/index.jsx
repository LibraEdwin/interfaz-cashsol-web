import { Container as ContBootstrap } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Container = ({ children, ...props }) => (
  <ContBootstrap fluid="xxl" {...props}>{children}</ContBootstrap>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
