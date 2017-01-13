import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {View, Text, Modal, TouchableHighlight} from 'react-native';
import hideWinner from '../actions/hide_winner';

const Winner = (props) => {
  const {board, hideWinner, current, hide} = props;
  const {winner, grid} = board;
  if(!grid) return null;
  const isWinner = winner === 1 || winner === -1;
  const movesLeft = board.grid.length - board.grid.filter((c) => c !== 0).length;
  const message = `${winner === 1 ? "X" : winner === -1 ? "O" : "No one"} won!`;
  const close = () => hideWinner(current);

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
};

Winner.propTypes = {
  board: PropTypes.object.isRequired,
  current: PropTypes.string,
  hide: PropTypes.bool,
  hideWinner: PropTypes.func.isRequired,
};
const mapStateToProps = ({board}) => {
  const current = board.get("current");
  const currentBoard = board.get("boards").get(current);
  const hide = board.get("hiddenWinners").get(current);
  return {
    board: currentBoard ? currentBoard.toJS() : {},
    current,
    hide
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideWinner: (id) => dispatch(hideWinner(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Winner);
