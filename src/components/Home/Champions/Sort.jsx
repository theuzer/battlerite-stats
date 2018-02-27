import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const Sort = ({
  id, label, onClickSort, desc,
}) => {
  const arrow = desc ? (
    <FontAwesome
      className="arrow"
      name="chevron-down"
    />
  ) : (
    <FontAwesome
      className="arrow"
      name="chevron-up"
    />
  );

  return (
    <div>
      <button className="sort-button" onClick={() => onClickSort(id)}>
        <span className="label">{label}</span>
        {arrow}
      </button>
    </div>
  );
};

Sort.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClickSort: PropTypes.func.isRequired,
  desc: PropTypes.bool.isRequired,
};

export default Sort;
