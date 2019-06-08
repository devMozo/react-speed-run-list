import React from 'react';

export default () => {
  const [data, setData] = React.useState(null);
  const [loading, isLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [axioFunction, setAxio] = React.useState(undefined);

  React.useEffect(() => {
    if (axioFunction) {
      isLoading(true);
      setError(false);
      axioFunction
        .then((response) => {
          setData(response);
          isLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [axioFunction]);

  return [
    {
      data,
      loading,
      error,
    },
    setAxio,
  ];
};
