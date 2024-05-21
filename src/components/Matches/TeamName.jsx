import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const TeamName = ({ children }) => {
  return (
    <Typography
      gutterBottom
      variant="subtitle1"
      color="primary"
      align="left"
      sx={{
        mb: "0",
        fontWeight: "700",
        wordWrap: "break-word",
        overflow: "hidden",
        textAlign: "center",
        textOverflow: "ellipsis",
        height: "fit-content",
        lineHeight: 1.2,
      }}
    >
      {children}
    </Typography>
  );
};

TeamName.propTypes = {
  children: PropTypes.node,
};

export default TeamName;
