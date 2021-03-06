import React, {PropTypes} from 'react';
import { Cell } from './cell';
import Winner from './winner';

const Grid = (props) => {
  const {board, click} = props;
  const {grid} = board;
  let index = 0;
  return (
    <div>
      <table className="grid">
        <tbody>
        {
          [...Array(3)].map((_, r) =>
            <tr key={r}>
              {
                [...Array(3)].map((_, c) =>
                  <Cell key={c} grid={grid} index={index++} click={click}/>
                )
              }
            </tr>
          )
        }
        </tbody>
      </table>
      <Winner board={board}/>
    </div>
  );
};

Grid.propTypes = {
  board: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
};


export default Grid;
