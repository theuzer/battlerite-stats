import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({
  id, opts, value, onChangeOption,
}) => {
  const options = opts.map((opt, i) => {
    return (
      <option key={i} value={opt.key}>{opt.value}</option>
    );
  });

  return (
    <div>
      <select value={value} onChange={e => onChangeOption(id, e)}>
        {options}
      </select>
    </div>
  );
};

Filter.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  opts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeOption: PropTypes.func.isRequired,
};

export default Filter;
