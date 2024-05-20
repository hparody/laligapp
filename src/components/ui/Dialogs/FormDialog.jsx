import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const defaultFnc = () => {};

const FormDialog = ({
  open,
  size="md",
  onCancel = defaultFnc,
  onSubmit = defaultFnc,
  title='Dialog Title',
  cancelText='Cancelar',
  confirmText='Guardar',
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
          console.log(formJson);
          onSubmit(formJson);
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{fields}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelText}</Button>
        <Button type="submit">{confirmText}</Button>
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
  fields: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default FormDialog;
