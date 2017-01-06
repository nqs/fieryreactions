import React, {PropTypes} from 'react';
import { Cell } from './cell';

const Grid = () => {
  return (
    <div>
      <table className="grid">
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

Grid.propTypes = {
};


export default Grid;
