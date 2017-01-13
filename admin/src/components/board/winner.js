import React, {Component, PropTypes} from 'react';
import {Modal, Button, StyleSheet} from 'react-bootstrap';

export default class Winner extends Component { // eslint-disable-line
  constructor(){
    super();
    this.state = {
      hide: false
    };
  }

  render() {
    const {board} = this.props;
    const winner = board.winner;
    const hide = this.state.hide;
    const movesLeft = board.grid.length - board.grid.filter((c) => c !== 0).length;
    const message = `${winner === 1 ? "X" : winner === -1 ? "O" : "No one"} won!`;
    const close = () => this.setState({ hide: true});
    return (
      <Modal
          show={!hide && (winner !== 0 || movesLeft === 0)}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

Winner.propTypes = {
  board: PropTypes.object.isRequired,
};
