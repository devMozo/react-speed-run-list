import axios from 'axios';
import { URL_GET_SPEED_RUN_LIST, URL_GET_GAME, URL_GET_USER } from './urls';

function getSpeedRunList() {
  return axios
    .get(URL_GET_SPEED_RUN_LIST)
    .then(response => response.data)
    .then(data => data.data)
    .catch(err => err);
}

const getGame = idGame => axios
    .get(URL_GET_GAME(idGame))
    .then(response => response.data)
    .then(data => data.data)
    .catch(err => err);

const getPlayer = idPlayer => axios
    .get(URL_GET_USER(idPlayer))
    .then(response => response.data)
    .then(data => data.data)
    .catch(err => err);

export { getSpeedRunList, getGame, getPlayer };
