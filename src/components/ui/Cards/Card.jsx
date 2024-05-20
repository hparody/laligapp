import PropTypes from "prop-types";
import { Card as MuiCard } from "@mui/material";

const Card = ({ children, id, sx }) => (
  <MuiCard
    id={id}
    sx={{
      borderRadius: "20px",
      backgroundColor: "rgba(238, 238, 238, 0.7)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
      ...sx,
    }}
  >
    {children}
  </MuiCard>
);

Card.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default Card;
