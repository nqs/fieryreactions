import React, {PropTypes} from 'react';

const SignIn = (props) => {
  const { login } = props;
  return (
    <div>
      <button className="btn btn-lg btn-primary btn-block" type="button" onClick={login}>Sign in</button>
    </div>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};


export default SignIn;
