import { v4 as uuid } from "uuid";
import { getAllMatches } from "./matches";
import { getAllTeams } from "./teams";

const getStandings = () => {
  return JSON.parse(localStorage.getItem("standings")) || [];
};

const getResultByScore = (goalsTeam, goalsOpponent) => {
  let points, resultType;
  if (goalsTeam > goalsOpponent) {
    points = 3;
    resultType = "won";
  } else if (goalsTeam === goalsOpponent) {
    points = 1;
    resultType = "draw";
  } else {
    points = 0;
    resultType = "lost";
  }
  return { points, resultType };
};

const updateStandings = () =>
  new Promise((resolve, reject) => {
    const defaultStats = {
      games: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    };
    try {
      const allMatches = getAllMatches();
      const allTeams = getAllTeams();
      const teamsStats = allTeams.map((team) => {
        const teamMatches = allMatches.filter(
          (match) => match.localTeam === team.id || match.awayTeam === team.id
        );
        const finalTeamStats = teamMatches.reduce(
          (prevStats, currentMatch, idx) => {
            let teamGoals, opponentGoals;
            if (currentMatch.localTeam === team.id) {
              teamGoals = parseInt(currentMatch.goalsLocal);
              opponentGoals = parseInt(currentMatch.goalsAway);
            } else {
              teamGoals = parseInt(currentMatch.goalsAway);
              opponentGoals = parseInt(currentMatch.goalsLocal);
            }
            const { points: teamPoints, resultType } = getResultByScore(
              teamGoals,
              opponentGoals
            );
            return {
              teamId: prevStats.teamId,
              teamName: prevStats.teamName,
              games: idx + 1,
              wins: resultType === "won" ? prevStats.wins + 1 : prevStats.wins,
              draws:
                resultType === "draw" ? prevStats.draws + 1 : prevStats.draws,
              losses:
                resultType === "lost" ? prevStats.losses + 1 : prevStats.losses,
              goalsFor: prevStats.goalsFor + teamGoals,
              goalsAgainst: prevStats.goalsAgainst + opponentGoals,
              goalDifference:
                prevStats.goalDifference + teamGoals - opponentGoals,
              points: prevStats.points + teamPoints,
            };
          },
          {
            ...defaultStats,
            teamId: team.id,
            teamName: team.name,
          }
        );

        return finalTeamStats;
      });

      const standings = teamsStats
        .sort((a, b) => b.points - a.points)
        .map((teamStats, idx) => ({
          ...teamStats,
          position: idx + 1,
          recordId: uuid(),
        }));

      // console.log(standings);
      localStorage.setItem("standings", JSON.stringify(standings));
      resolve(standings);
    } catch (e) {
      reject(e);
    }
  });

export { getStandings, updateStandings };
