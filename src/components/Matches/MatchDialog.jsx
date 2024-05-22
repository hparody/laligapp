import PropTypes, { any } from "prop-types";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState, useMemo, useCallback, useContext } from "react";

import TeamsContext from "src/contexts/TeamsContext";

import { FormDialog } from "../ui/Dialogs";
import FormGridItem from "./FormGridItem";
import ImageSelect from "../ui/ImageSelect";

const MatchDialog = ({
  open,
  dialogTitle = "Enviar",
  confirmText = "",
  cancelText = "Cancelar",
  onCancel,
  onSubmit,
  initialValues = {},
}) => {
  const { teams } = useContext(TeamsContext);
  const [values, setValues] = useState(initialValues);

  const teamsAvailable = teams.map(({ id, logo, name }) => ({
    id,
    value: id,
    label: name,
    image: logo,
  }));

  // Ajustar el estado durante el renderizado vs usando useEffect.
  const [prevInitialValues, setPrevInitialValues] = useState(initialValues);
  if (initialValues !== prevInitialValues) {
    setPrevInitialValues(initialValues);
    setValues(initialValues);
  }

  const onFieldChange = useCallback(
    (fieldName, fieldValue) => {
      const additionalValues = {};
      if (fieldName === "localTeam" && fieldValue === values.awayTeam) {
        additionalValues.awayTeam = "";
      }
      if (fieldName === "awayTeam" && fieldValue === values.localTeam) {
        additionalValues.localTeam = "";
      }
      setValues({ ...values, [fieldName]: fieldValue, ...additionalValues });
    },
    [values]
  );

  const MatchFields = useMemo(() => {
    const {
      matchDate = dayjs(),
      matchTime = dayjs(),
      localTeam = "",
      awayTeam = "",
      goalsLocal = 0,
      goalsAway = 0,
    } = values;
    return (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        aria-label="card=group-container"
        sx={{ padding: "20px 0px" }}
      >
        <FormGridItem>
          <DatePicker
            id="id_match_date"
            required
            name="matchDate"
            label="Fecha del Partido"
            value={dayjs(matchDate)}
            onChange={(newMatchDate) =>
              onFieldChange("matchDate", newMatchDate)
            }
            referenceDate={dayjs()}
            maxDate={dayjs()}
            disableFuture
            formatDensity="dense"
            slotProps={{
              field: {
                clearable: true,
                onClear: () => onFieldChange("matchDate", null),
              },
              textField: {
                margin: "dense",
              },
            }}
            sx={{ width: "100%" }}
          />
        </FormGridItem>
        <FormGridItem>
          <TimePicker
            id="id_match_time"
            required
            name="matchTime"
            label="Hora del Partido"
            value={dayjs(`${matchDate} ${matchTime}`, "DD/MM/YYYY HH:mm A")}
            formatDensity="dense"
            slotProps={{
              textField: {
                margin: "dense",
              },
            }}
            sx={{ width: "100%" }}
          />
        </FormGridItem>
        <FormGridItem>
          <ImageSelect
            inputProps={{ name: "localTeam" }}
            selectedValue={localTeam}
            label="Equipo Local"
            itemsList={teamsAvailable}
            onChange={(event) => onFieldChange("localTeam", event.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <ImageSelect
            inputProps={{ name: "awayTeam" }}
            selectedValue={awayTeam}
            label="Equipo Visitante"
            itemsList={teamsAvailable}
            onChange={(event) => onFieldChange("awayTeam", event.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <TextField
            required
            margin="dense"
            id="id_goals_local"
            name="goalsLocal"
            label="Goles Local"
            placeholder="2"
            type="number"
            min={0}
            fullWidth
            value={parseInt(goalsLocal)}
            onChange={(event) =>
              onFieldChange("goalsLocal", event.target.value)
            }
          />
        </FormGridItem>
        <FormGridItem>
          <TextField
            required
            margin="dense"
            id="id_goals_away"
            name="goalsAway"
            label="Goles Visitante"
            placeholder="2"
            type="number"
            min={0}
            fullWidth
            value={parseInt(goalsAway)}
            onChange={(event) => onFieldChange("goalsAway", event.target.value)}
          />
        </FormGridItem>
      </Grid>
    );
  }, [teamsAvailable, values, onFieldChange]);

  return (
    <FormDialog
      open={open}
      size="md"
      onCancel={onCancel}
      onSubmit={onSubmit}
      title={dialogTitle}
      cancelText={cancelText}
      confirmText={confirmText}
      fields={MatchFields}
    />
  );
};

MatchDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    matchDate: any,
    matchTime: any,
    localTeam: PropTypes.string,
    awayTeam: PropTypes.string,
    goalsLocal: PropTypes.number,
    goalsAway: PropTypes.number,
  }),
};

export default MatchDialog;
