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
    const winner = this.props.board.winner;
    const hide = this.state.hide;
    const close = () => this.setState({ hide: true});
    return (
      <Modal
          animationType={"slide"}
          transparent={false}
          visible={!hide && winner !== 0}
      >
        <View style={{marginTop: 22}}>
          <View>
            <Text>Game Over!</Text>
            <Text>{winner === 1 ? "X" : "O"} won!</Text>
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
