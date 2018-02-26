import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ iconId, width, height, className }) => {
  const src = require(`../../../static/images/${iconId}.png`);
  const alt = `${width}x${height}`;

  return (
    <img className={className} src={src} alt={alt} width={width} height={height} />
  );
};

Image.propTypes = {
  iconId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Image;
