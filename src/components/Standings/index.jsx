import Grid from "@mui/material/Grid";

import Breadcrum from "../Breadcrumb";

const Standings = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrum />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Standings;
