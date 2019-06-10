import React from 'react';
import LoaderSpinner from 'app/components/LoaderSpinner/LoaderSpinner';

export default (Component) => {
  const [loading, setLoading] = React.useState(true);

  return [loading ? <LoaderSpinner /> : Component, setLoading];
};
