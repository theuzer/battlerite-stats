import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Property = ({ label, value }) =>
  (
    <div className="property-wrap">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );

Property.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

Property.defaultProps = {
  label: '',
  value: '',
};

export default Property;
