import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ name }) =>
  (
    <div>
      {name}
    </div>
  );

Filter.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Filter;
