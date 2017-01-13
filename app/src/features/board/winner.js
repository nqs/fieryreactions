import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Modal, TouchableHighlight} from 'react-native';

export default class Winner extends Component { // eslint-disable-line
  constructor(){
    super();
    this.state = {
      hide: false
    };
  }

  render() {
    const {board} = this.props;
    const {winner, grid} = board;
    if(!grid) return null;
    const hide = this.state.hide;
    const isWinner = winner === 1 || winner === -1;
    const movesLeft = board.grid.length - board.grid.filter((c) => c !== 0).length;
    const message = `${winner === 1 ? "X" : winner === -1 ? "O" : "No one"} won!`;
    const close = () => this.setState({ hide: true});
    return (
      <Modal
          animationType={"slide"}
          transparent={false}
          onRequestClose={() => {}}
          visible={!hide && (winner !== 0 || movesLeft === 0)}
      >
        <View style={{margin: 50}}>
          <View>
            <Text>Game Over!</Text>
            <Text>{message}</Text>
            <TouchableHighlight onPress={close}>
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

Winner.propTypes = {
  board: PropTypes.object.isRequired,
};
