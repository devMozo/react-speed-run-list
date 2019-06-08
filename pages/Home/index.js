import React from 'react';
import Title from 'app/components/SectionTitle/SectionTitle';
import { FixedSizeList as List } from 'react-window';
import ResizerList from 'react-virtualized-auto-sizer';
import useRequestAPI from 'app/hooks/useRequestAPI';
import useSpinner from 'app/hooks/useSpinner';
import SpeedRunRow from 'app/components/SpeedRunRow/SpeedRunRow';
import { getSpeedRunList } from 'app/api/SpeedRunAPI';
import { HOME_LIST_SIZE_DESKTOP, COMMON_ITEM_SIZE } from 'app/constants/config';
import './Home.scss';

const Home = () => {
  const [{ data, loading, error }, setAxio] = useRequestAPI();
  const [Component, setLoading] = useSpinner(
    <ResizerList className="Home__resizer">
      {() => (
        <List
          height={COMMON_ITEM_SIZE * data.length}
          itemCount={data.length}
          itemSize={COMMON_ITEM_SIZE}
          width={HOME_LIST_SIZE_DESKTOP}
          className="Home__list"
        >
          {obj => <SpeedRunRow {...obj} data={data[obj.index]} />}
        </List>
      )}
    </ResizerList>,
  );

  React.useEffect(() => {
    setLoading(loading);

    if (!data && !error) {
      setAxio(getSpeedRunList);
    }
  }, [data, loading]);

  return (
    <main className="Home">
      <Title title="SpeedRun List" />
      {Component}
    </main>
  );
};

export default Home;
