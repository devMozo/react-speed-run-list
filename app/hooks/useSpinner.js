import React from 'react';

export default (Component) => {
  const [loading, setLoading] = React.useState(true);

  return [loading ? <p className="LoaderSpinner"> Loading... </p> : Component, setLoading];
};
