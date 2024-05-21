import Grid from "@mui/material/Grid";

import Button from "../ui/Button";
import Breadcrum from "../Breadcrumb";

const Matches = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrum />
      </Grid>
      <Grid item xs={12}>
        <Button
          kind="create"
          size="large"
          sx={{ fontWeight: "700", fontSize: "1rem" }}
          onClick={() => {}}
        >
          Crear Partido
        </Button>
      </Grid>
    </Grid>
  );
};

export default Matches;
