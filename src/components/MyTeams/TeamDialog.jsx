import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Fragment, useState, useMemo, useCallback } from "react";

import { FormDialog } from "../ui/Dialogs";

const TeamDialog = ({
  open,
  dialogTitle = "Enviar",
  confirmText = "",
  cancelText = "Cancelar",
  onCancel,
  onSubmit,
  initialValues = {},
}) => {
  const [values, setValues] = useState(initialValues);

  // Ajustar el estado durante el renderizado vs usando useEffect.
  const [prevInitialValues, setPrevInitialValues] = useState(initialValues);
  if (initialValues !== prevInitialValues) {
    setPrevInitialValues(initialValues);
    setValues(initialValues);
  }

  const onFieldChange = useCallback(
    (fieldName, fieldValue) =>
      setValues({ ...values, [fieldName]: fieldValue }),
    [values]
  );

  const TeamFields = useMemo(() => {
    const { name = "", city = "", logo = "" } = values;
    return (
      <Fragment>
        <TextField
          required
          margin="dense"
          id="id_team_name"
          name="name"
          label="Nombre del Equipo"
          placeholder="Equipo 1"
          type="text"
          fullWidth
          size="small"
          value={name}
          onChange={(event) => onFieldChange("name", event.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="id_team_city"
          name="city"
          label="Ciudad"
          placeholder="Ciudad X"
          type="text"
          fullWidth
          size="small"
          value={city}
          onChange={(event) => onFieldChange("city", event.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="id_team_logo"
          name="logo"
          label="Logo Equipo (URL)"
          placeholder="https://www.google.com/img.png"
          type="url"
          fullWidth
          size="small"
          value={logo}
          onChange={(event) => onFieldChange("logo", event.target.value)}
        />
      </Fragment>
    );
  }, [values, onFieldChange]);

  return (
    <FormDialog
      open={open}
      size="md"
      onCancel={onCancel}
      onSubmit={onSubmit}
      title={dialogTitle}
      cancelText={cancelText}
      confirmText={confirmText}
      fields={TeamFields}
    />
  );
};

TeamDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    logo: PropTypes.string,
  }),
};

export default TeamDialog;
