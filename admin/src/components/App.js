import React, { PropTypes } from 'react';
import Navigation from './shared/navigation';

const App = (props) => {

  return (
    <div className="container">
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
