# react-speed-run-list

A speedrun is a play-through (or a recording thereof, namely run) of a video game performed with the intention of completing it as fast as possible within one's own ability.

You must develop a web app that shows the world records speedruns. Your task is to extract the information from http://www.speedrun.com using its api: http://www.speedrun.com/api/v1/games.

## The app must:

- Show a list with the games. You must show the game logo and the game name. There is no need to implement pagination.
- When you select a game in the list, it must open a new screen containing information of the first run in the api runs list. The screen must contain:
  - a button to see the video in an outside web,
  - the name of the player (if there is more than one, you must show only the first player’s name),
  - the time of that run,
  - the game logo and,
  - the game name.

## What we are looking for:

- You must use React. Redux is preferred.
- You must create a SSR application.
- Do not focus your efforts in the UI or UX. The important part is the readability of the code, as well as the architecture and maintainability.
- Use all the libraries you want.
- We will value very positively end-to-end testing with Selenium, Cypress or similar.
