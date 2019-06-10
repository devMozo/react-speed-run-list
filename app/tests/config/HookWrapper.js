import React from 'react';
import PropTypes from 'prop-types';

function HookWrapper(props) {
  const { hook } = props;
  return <div hook={hook && hook()} />;
}

HookWrapper.propTypes = {
  hook: PropTypes.func,
};

export default HookWrapper;
