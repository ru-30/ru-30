function duckDuckGoose(players, position) {
  const index = (position - 1) % players.length;
  return players[index].name;
}
