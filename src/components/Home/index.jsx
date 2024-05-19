import { useNavigate } from "react-router-dom";

import { CardGroup } from "../ui/Cards";
import HomeCard from "./HomeCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <CardGroup spacing={4} sx={2} sm={3} md={3} lg={3} xl={3}>
      <HomeCard
        id="id_my_teams"
        onClick={() => navigate("/my-teams")}
        alt="mis equipos"
        image="/src/assets/teams.png"
        label="Mis Equipos"
      />
      <HomeCard
        id="id_matches"
        onClick={() => navigate("/matches")}
        alt="partidos"
        image="/src/assets/matches.png"
        label="Partidos"
      />
      <HomeCard
        id="id_standings"
        onClick={() => navigate("/standings")}
        alt="posiciones"
        image="/src/assets/standings.png"
        label="Posiciones"
      />
    </CardGroup>
  );
};

export default Home;
