import PropTypes from "prop-types";
import MuiButton from "@mui/material/Button";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const buttonConfigs = {
  create: {
    backgroundColor: "primary",
    icon: <AddCircleOutlineTwoToneIcon />,
  },
  edit: {
    backgroundColor: "primary",
    icon: <EditNoteIcon />,
  },
  delete: {
    backgroundColor: "secondary",
    icon: <DeleteIcon />,
  },
  save: {
    backgroundColor: "primary",
    icon: <SaveIcon />,
  },
  cancel: {
    backgroundColor: "secondary",
    icon: <CancelPresentationIcon />,
  },
  basic: {
    backgroundColor: "primary",
    icon: undefined,
  },
};

const Button = ({ kind = "basic", children, sx, ...props }) => {
  const buttonConfig = buttonConfigs[kind] || buttonConfigs.create;
  return (
    <MuiButton
      variant="contained"
      startIcon={buttonConfig.icon}
      color={buttonConfig.backgroundColor}
      sx={{
        textTransform: "capitalize",
        lineHeight: "1.5",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  kind: PropTypes.oneOf(["basic", "create", "edit", "delete", "save", "cancel"])
    .isRequired,
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default Button;
