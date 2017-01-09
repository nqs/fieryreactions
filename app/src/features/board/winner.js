/*import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

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
          show={!hide && winner !== 0}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {winner === 1 ? "X" : "O"} won!
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
};*/
