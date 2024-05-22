import PropTypes from "prop-types";
import Button from "../Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const defaultFnc = () => {};

const FormDialog = ({
  open,
  size = "md",
  onCancel = defaultFnc,
  onSubmit = defaultFnc,
  title = "Dialog Title",
  cancelText = "Cancelar",
  confirmText = "Guardar",
  fields,
}) => {
  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={size}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          // console.log(formJson);
          onSubmit(formJson);
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ padding: "0px 20px !important" }}>
        {fields}
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          gap: "10px",
          padding: "15px 20px",
        }}
      >
        <Button kind="cancel" onClick={handleClose}>
          {cancelText}
        </Button>
        <Button kind="save" type="submit">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  fields: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default FormDialog;
