# Kickball Manager!

## App Flow:

- We will enter on the Home page.
- Links to Teams and Players.

- Teams: lists all teams in league, each list item (team name) is a clickable link.

  - When you click the link, you see the details of the individual team,including the name, logo, and players (each player is clickable).

- Players: lists all players in league, each is a clickable link.
  - When you click the link, you see the details of the individual player, including their name, position, and what team they are on.

## File Structure:

### View (Contanier) Components:

- home
- teams: shows all the teams (TeamList): /teams
- players: shows all the players (PlayerList): /players

- team: shows an individual team's detail (name, logo, individual players): /teams/:id
- player: shows an individual player's detail (name, position, individual team): /players/:id

### Presentational Components:

- TeamList: list of linkable teams
- individual TeamDetail: list of linkable players
- PlayerList: list of linkable players
- individual PlayerDetail: includes linkable team

### Services:

- client.js
- players.js
- teams.js
