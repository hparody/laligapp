import { v4 as uuid } from "uuid";

const getAllTeams = () => {
  return JSON.parse(localStorage.getItem("teams")) || [];
};

const getTeamInfoById = (teamId) => {
  const teams = getAllTeams();
  return teams.find((t) => t.id === teamId);
};

const teamAlreadyExists = (teamName, teams) => {
  return teams.some(
    (team) => team.name.toLowerCase() == teamName.toLowerCase()
  );
};

const createTeam = (teamData) => {
  const { name, city, logo } = teamData;
  const teams = getAllTeams();
  const teamId = uuid();
  if (teamAlreadyExists(name, teams)) {
    return {
      state: 400,
      error: true,
      message: "Este equipo ya existe, no puede ser creado nuevamente.",
    };
  }
  const newTeam = { id: teamId, name, city, logo };
  teams.push(newTeam);
  localStorage.setItem("teams", JSON.stringify(teams));
  return {
    state: 200,
    error: false,
    message: "Equipo creado exitosamente.",
    record: newTeam,
  };
};

const updateTeam = (teamToUpdate) => {
  const currentTeams = getAllTeams();
  const newTeams = [
    ...currentTeams.map((team) =>
      team.id === teamToUpdate.id ? teamToUpdate : team
    ),
  ];
  localStorage.setItem("teams", JSON.stringify(newTeams));
  return {
    state: 200,
    error: false,
    message: "Equipo actualizado exitosamente.",
    record: teamToUpdate,
  };
};

const deleteTeam = (teamId) => {
  const currentTeams = getAllTeams();

  const newTeams = [...currentTeams.filter((team) => team.id !== teamId)];
  localStorage.setItem("teams", JSON.stringify(newTeams));
  return {
    state: 200,
    error: false,
    message: "Equipo eliminado exitosamente.",
    record: teamId,
  };
};

const updateTeamsOnLocalStorage = (teams) => {
  localStorage.setItem("teams", JSON.stringify(teams));
};

export {
  getAllTeams,
  getTeamInfoById,
  teamAlreadyExists,
  updateTeamsOnLocalStorage,
  createTeam,
  updateTeam,
  deleteTeam,
};
