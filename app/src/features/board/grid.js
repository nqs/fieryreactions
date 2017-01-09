import React, {PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cell from './cell';
import Winner from './winner';

const Grid = (props) => {
  const {board, click} = props;
  const {grid} = board;
  let index = 0;
  return (
    <View style={styles.grid}>
        {
          [...Array(3)].map((_, r) =>
            <View key={r} style={styles.row}>
              {
                [...Array(3)].map((_, c) =>
                  <Cell key={c} grid={grid} index={index++} click={click}/>
                )
              }
            </View>
          )
        }
    </View>
  );
};

Grid.propTypes = {
  board: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  grid: {
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Grid;
