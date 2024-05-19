import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const CardGroup = ({
  children,
  spacing=2,
  xs = "auto",
  sm = "auto",
  md = "auto",
  lg = "auto",
  xl = "auto",
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={spacing}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ padding: "20px; 0px;" }}
      >
        {Array.isArray(children) ? (
          children.map((child) => (
            <Grid
              key={`Card-${child.props.id}`}
              item
              xs={xs}
              sm={sm}
              md={md}
              lg={lg}
              xl={xl}
            >
              {child}
            </Grid>
          ))
        ) : (
          <Grid
            key={`Card-${children.props.id}`}
            item
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
            {children}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

CardGroup.propTypes = {
  children: PropTypes.node.isRequired,
  spacing:PropTypes.number,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default CardGroup;
