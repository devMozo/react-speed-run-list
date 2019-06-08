import axios from 'axios';
import { URL_GET_SPEED_RUN_LIST, URL_GET_PLAYERS } from './urls';

function getSpeedRunList() {
  return axios
    .get(URL_GET_SPEED_RUN_LIST)
    .then(response => response.data)
    .then(data => data.data)
    .catch(err => err);
}

const getPlayers = idSpeedRun => axios
    .get(URL_GET_PLAYERS(idSpeedRun))
    .then(response => response.data)
    .then(data => data.data)
    .catch(err => err);

export { getSpeedRunList, getPlayers };
