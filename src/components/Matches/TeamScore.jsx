import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const TeamScore = ({ score, type }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: "10px",
      }}
    >
      <Typography
        gutterBottom
        variant="h6"
        color="primary"
        align="left"
        sx={(theme) => ({
          mb: "0",
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
          padding: "10px 0px",
          backgroundColor: "white.main",
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "5px",
        })}
      >
        {score}
      </Typography>
      <Typography
        gutterBottom
        variant="caption"
        color="primary"
        align="left"
        sx={{
          mb: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        {type}
      </Typography>
    </Box>
  );
};

TeamScore.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string.isRequired,
};

export default TeamScore;
