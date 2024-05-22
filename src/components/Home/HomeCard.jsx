import PropTypes from "prop-types";
import {
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

import defaultImg from "src/assets/img-default.png";

import { Card } from "../ui/Cards";

const defaultOnClick = (event) => event.preventDefault();
const DEFAULT_IMG = defaultImg;
const DEFAULT_ALT = "imagen";

const HomeCard = ({
  id,
  onClick = defaultOnClick,
  alt = DEFAULT_ALT,
  image = DEFAULT_IMG,
  label = "",
}) => (
  <Card id={id}>
    <CardActionArea onClick={onClick}>
      <CardMedia
        component="img"
        loading="lazy"
        alt={alt}
        image={image}
        sx={{
          padding: "30px 40px",
          objectFit: "contain",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="black.main"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          {label}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

HomeCard.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  alt: PropTypes.string,
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default HomeCard;
