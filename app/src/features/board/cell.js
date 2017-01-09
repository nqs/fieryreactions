import React, { PropTypes } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Cell = (props) => {
  const {grid, index, click} = props;
  const value = grid[index];
  const text = value === 1 ? "X" : value === -1 ? "O" : null ;
  return (
    <TouchableHighlight
      onPress={() => click(index)}
      underlayColor="transparent"
      activeOpacity={0.5}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

Cell.propTypes = {
  grid: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  cell: {
    width: 115,
    height: 115,
    borderRadius: 5,
    backgroundColor: '#7b8994',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 50,
    fontFamily: 'AvenirNext-Bold',
  },
});

export default Cell;
