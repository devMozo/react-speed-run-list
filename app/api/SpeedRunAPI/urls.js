const URL = 'https://www.speedrun.com/api/v1';
const URL_GET_USER = idUser => `${URL}/users/${idUser}`;
const URL_GET_SPEED_RUN_LIST = `${URL}/games?embed=categories`;
const URL_GET_GAME = idGame => `${URL}/games/${idGame}`;
const URL_GET_CATEGORY = idGame => `${URL}/games/${idGame}/categories`;
const URL_GET_PLAYERS = (idGame, idCategory) => `${URL}/leaderboards/${idGame}/category/${idCategory}?top=1`;

export {
 URL_GET_SPEED_RUN_LIST, URL_GET_USER, URL_GET_GAME, URL_GET_CATEGORY, URL_GET_PLAYERS,
};
