import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Property = ({ label, value }) =>
  (
    <div className="row">
      <div className="prop">{label}</div>
      <div className="value">{value}</div>
    </div>
  );

Property.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
};

Property.defaultProps = {
  label: '',
  value: '',
};

export default Property;
