import React from 'react';
import { getGame, getPlayer } from 'app/api/SpeedRunAPI/';
import PropTypes from 'prop-types';
import axios from 'axios';
import HeaderView from 'app/components/HeaderView/HeaderView';
import ButtonHandleError from 'app/components/ButtonHandleError/ButtonHandleError';
import Router from 'next/router';

function View({
 firstPlace, game, user, err,
}) {
  const { run } = firstPlace;

  if (err) {
    return <ButtonHandleError onClick={() => Router.push(Router.asPath)} />;
  }

  return (
    <HeaderView
      gameName={game.names.international}
      img={game.assets['cover-medium'].uri}
      playerName={user.names.international}
      time={run.times.realtime}
      link={run.weblink}
    />
  );
}

View.propTypes = {
  firstPlace: PropTypes.object,
  game: PropTypes.object,
  user: PropTypes.object,
  err: PropTypes.object,
};

View.getInitialProps = async ({ req }) => {
  const { id } = req.params;

  const props = await getGame(id)
    .then((game) => {
      const leaderboardLink = game.links.find(item => item.rel === 'leaderboard');

      return axios.get(leaderboardLink.uri).then(leaderboard => ({
        game,
        firstPlace: leaderboard.data.data.runs[0],
      }));
    })
    .then(data => getPlayer(data.firstPlace.run.players[0].id).then(user => ({
        ...data,
        user,
      })))
    .catch(() => ({ err: true }));

  return props;
};

export default View;
