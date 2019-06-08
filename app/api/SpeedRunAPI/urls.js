const URL = 'https://www.speedrun.com/api/v1';
const URL_GET_SPEED_RUN_LIST = `${URL}/games`;
const URL_GET_PLAYERS = id => `${URL}/leaderboards/${id}/category/wkpoo02r?top=1`;

export { URL_GET_SPEED_RUN_LIST, URL_GET_PLAYERS };
