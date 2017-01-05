import React, { PropTypes } from 'react';
import Navigation from './shared/navigation';
import { Listeners } from '../utils/listeners';

const App = (props) => {

  return (
    <div className="container">
      <Listeners />
      <Navigation />
      <div>
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
