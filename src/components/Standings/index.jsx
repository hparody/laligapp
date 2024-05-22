import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";

import Breadcrum from "../Breadcrumb";
import { useContext } from "react";
import StandingsContext from "src/contexts/StandingsContext";
import { Box } from "@mui/material";

const Standings = () => {
  const { standings } = useContext(StandingsContext);
  const columns = [
    { field: "position", headerName: "Posición" },
    { field: "teamName", headerName: "Equipo" },
    { field: "games", headerName: "Partidos Jugados" },
    { field: "wins", headerName: "Victorias" },
    { field: "draws", headerName: "Empates" },
    { field: "losses", headerName: "Derrotas" },
    { field: "goalsFor", headerName: "Goles a Favor" },
    { field: "goalsAgainst", headerName: "Goles en Contra" },
    { field: "goalDifference", headerName: "Diferencia de Gol" },
    { field: "points", headerName: "Puntos" },
  ];

  const rows = standings.map((teamStats) => ({
    ...teamStats,
    id: teamStats.teamId,
  }));

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrum />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            checkboxSelection={true}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Standings;
