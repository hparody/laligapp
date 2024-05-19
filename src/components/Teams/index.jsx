import Button from "@mui/material/Button";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import Grid from "@mui/material/Grid";

import Breadcrum from "../Breadcrumb";

const Teams = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrum />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineTwoToneIcon />}
          size="large"
          sx={{ fontWeight: "700" }}
          onClick={() => {}}
        >
          Crear Partido
        </Button>
      </Grid>
    </Grid>
  );
};

export default Teams;
