import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const defaultFnc = () => {};

const SimpleDialog = ({
  open,
  size = "md",
  onCancel = defaultFnc,
  onSubmit = defaultFnc,
  dialogTitle = "Dialog Title",
  dialogContent = "",
  cancelText = "Cancelar",
  confirmText = "Enviar",
}) => {
  return (
    <Dialog open={open} maxWidth={size} onClose={onCancel}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{cancelText}</Button>
        <Button onClick={onSubmit} autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  fields: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SimpleDialog;
