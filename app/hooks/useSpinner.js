import React from 'react';

export default (Component) => {
  const [loading, setLoading] = React.useState(true);

  return [loading ? <p> Loading </p> : Component, setLoading];
};
