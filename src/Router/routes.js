import SportsSoccerTwoToneIcon from "@mui/icons-material/SportsSoccerTwoTone";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import LeaderboardTwoToneIcon from "@mui/icons-material/LeaderboardTwoTone";
import ScoreboardTwoToneIcon from "@mui/icons-material/ScoreboardTwoTone";

const routes = {
  home: {
    route: "/",
    label: "Portal",
    Icon: SportsSoccerTwoToneIcon,
  },
  "my-teams": {
    route: "/my-teams",
    label: "Mis Equipos",
    Icon: GroupsTwoToneIcon,
  },
  matches: {
    route: "/matches",
    label: "Partidos",
    Icon: ScoreboardTwoToneIcon,
  },
  standings: {
    route: "/standings",
    label: "Posiciones",
    Icon: LeaderboardTwoToneIcon,
  },
};
export default routes;
