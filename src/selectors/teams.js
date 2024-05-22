const getTeamInfoById = (teamId, teams) => teams.find((t) => t.id === teamId);

export { getTeamInfoById };
