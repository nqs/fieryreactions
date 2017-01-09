import React, { PropTypes } from 'react';

export const Cell = (props) => {
  const {grid, index, click} = props;
  const value = grid[index];
  const x = <i className="fa fa-times" aria-hidden="true"/>;
  const o = <i className="fa fa-circle-thin" aria-hidden="true"/>;
  const icon = value === 1 ? x : value === -1 ? o : <div/> ;
  return (
    <td className="cell" onClick={() => click(index)}>
      {icon}
    </td>
  );
};

Cell.propTypes = {
  grid: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
};
