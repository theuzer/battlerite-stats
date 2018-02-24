import React from 'react';
import PropTypes from 'prop-types';

const Sort = ({ id, label, onClickSort }) => {
  return (
    <div>
      <div>{label}</div>
      <button onClick={() => onClickSort(id)}>Sort</button>
    </div>
  );
};

Sort.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClickSort: PropTypes.func.isRequired,
};

export default Sort;
