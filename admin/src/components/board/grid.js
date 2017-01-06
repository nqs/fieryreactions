import React, {PropTypes} from 'react';
import { Cell } from './cell';

const Grid = () => {
  return (
    <table>
      {
        [...Array(3)].map((_, r) =>
          <tr key={r}>
            {
              [...Array(3)].map((_, c) =>
                <Cell key={c} index={c+1 * r+1}/>
              )
            }
          </tr>
        )
      }
    </table>
  );
};

Grid.propTypes = {
};


export default Grid;
