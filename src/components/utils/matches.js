import { v4 as uuid } from "uuid";
import { updateStandings } from "./standings";

const getAllMatches = () => {
  return JSON.parse(localStorage.getItem("matches")) || [];
};

const teamHasMatches = (teamId) => {
  const matches = getAllMatches();
  return matches.some(
    (match) => teamId === match.localTeam || teamId === match.awayTeam
  );
};

const createMatch = (matchInfo) => {
  const matches = getAllMatches();
  const teamId = uuid();

  const newMatch = { id: teamId, ...matchInfo };
  matches.push(newMatch);
  localStorage.setItem("matches", JSON.stringify(matches));
  updateStandings().then((res) => console.log(res));
  return {
    state: 200,
    error: false,
    message: "Partido registrado exitosamente.",
    record: newMatch,
  };
};

const updateMatch = (matchToUpdate) => {
  const currentMatches = getAllMatches();
  const newMatches = [
    ...currentMatches.map((match) =>
      match.id === matchToUpdate.id ? matchToUpdate : match
    ),
  ];
  localStorage.setItem("matches", JSON.stringify(newMatches));
  updateStandings().then((res) => console.log(res));
  return {
    state: 200,
    error: false,
    message: "Partido actualizado exitosamente.",
    record: matchToUpdate,
  };
};

const deleteMatch = (matchId) => {
  const currentMatches = getAllMatches();

  const newMatches = [
    ...currentMatches.filter((match) => match.id !== matchId),
  ];
  localStorage.setItem("matches", JSON.stringify(newMatches));
  updateStandings().then((res) => console.log(res));
  return {
    state: 200,
    error: false,
    message: "Partido eliminado exitosamente.",
    record: matchId,
  };
};

export { getAllMatches, teamHasMatches, createMatch, updateMatch, deleteMatch };
