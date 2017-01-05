import React, { PropTypes } from 'react';

export const Cell = (props) => {
  const icon = props.index % 2 ? (<i className="fa fa-circle-thin" aria-hidden="true"/>) : (<i className="fa fa-times" aria-hidden="true"/>);
  return (
    <td className="cell">
      {icon}
    </td>
  );
};

Cell.propTypes = {
  index: PropTypes.number.isRequired,
};
