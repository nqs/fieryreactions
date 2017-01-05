import React, {PropTypes, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import loadQuote from './load_quote';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

class Quote extends Component {
  componentWillMount() {
    this.props.loadQuote();
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  render() {
    const {quote} = this.props;
    if (!quote) {
      return this.renderLoading();
    }

    return (
      <View style={styles.container}>
        <Text>{quote.quoteAuthor}</Text>
        <Text>{quote.quoteText}</Text>
      </View>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.object,
  loadQuote: PropTypes.func.isRequired,
};

// redux
const mapStateToProps = ({quote}) => ({quote});

export default connect(mapStateToProps, {loadQuote})(Quote);
