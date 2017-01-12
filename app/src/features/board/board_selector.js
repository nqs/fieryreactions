import {connect} from 'react-redux';
import React, { PropTypes } from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import boardSelect from './board_select';

const BoardSelector = (props) => {
  const {boards, current, select} = props;
  const onValueChange= (id) => select(id);
  const boardItems = boards.map((v,k) =>
    <Picker.Item label={v.get('user').get('name')} value={k} key={k} />
  ).toArray();

  return (
    <Picker selectedValue={current} onValueChange={onValueChange}>
      <Picker.Item key="empty" label="Select a game" />
      {boardItems}
    </Picker>
  );
};

BoardSelector.propTypes = {
  boards: PropTypes.object.isRequired,
  current : PropTypes.string,
  select : PropTypes.func.isRequired,
};

const styles = StyleSheet.create({

});


const mapStateToProps = ({board}) => ({
  boards: board.get("boards"),
  current: board.get("current"),
});

const mapDispatchToProps = (dispatch) => {
  return {
    select: (id) => dispatch(boardSelect(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardSelector);
