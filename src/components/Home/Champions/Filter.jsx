import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ id, label, opts, value, onChangeOption }) => {
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
  )
}

Filter.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  opts: PropTypes.array.isRequired,
  onChangeOption: PropTypes.func.isRequired,
};

export default Filter;
