import { useNavigate } from "react-router-dom";

import myTeamsImage from "src/assets/teams.png";
import matchesImage from "src/assets/matches.png";
import standingsImage from "src/assets/standings.png";

import { CardGroup } from "../ui/Cards";
import HomeCard from "./HomeCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <CardGroup spacing={3} sx={12} sm={6} md={4} lg={3} xl={3}>
      <HomeCard
        id="id_my_teams"
        onClick={() => navigate("/my-teams")}
        alt="mis equipos"
        image={myTeamsImage}
        label="Mis Equipos"
      />
      <HomeCard
        id="id_matches"
        onClick={() => navigate("/matches")}
        alt="partidos"
        image={matchesImage}
        label="Partidos"
      />
      <HomeCard
        id="id_standings"
        onClick={() => navigate("/standings")}
        alt="posiciones"
        image={standingsImage}
        label="Posiciones"
      />
    </CardGroup>
  );
};

export default Home;
