import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  return (
    <>
        {children}
    </>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminLayout;
