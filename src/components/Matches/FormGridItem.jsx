import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

const FormGridItem = ({ children }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    lg={6}
    xl={6}
    sx={{
      width: "100%",
    }}
  >
    {children}
  </Grid>
);

FormGridItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormGridItem;
