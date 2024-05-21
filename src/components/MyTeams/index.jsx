import Grid from "@mui/material/Grid";
import {
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";

import TeamsContext from "src/contexts/TeamsContext";
import Button from "src/components/ui/Button";

import {
  createTeam,
  updateTeam,
  deleteTeam,
  getAllTeams,
} from "../utils/teams";
import Breadcrum from "../Breadcrumb";
import TeamDialog from "./TeamDialog";
import { Card, CardGroup } from "../ui/Cards";

import useAlert from "src/hooks/useAlert";
import { SimpleDialog } from "../ui/Dialogs";

const ACTION_CREATE_TEAM = "ACTION_CREATE_TEAM";
const ACTION_EDIT_TEAM = "ACTION_EDIT_TEAM";
const ACTION_DELETE_TEAM = "ACTION_DELETE_TEAM";

const dialogConfigs = {
  [ACTION_CREATE_TEAM]: {
    title: "Crear equipo",
    saveButtonText: "Guardar Equipo",
    action: ACTION_CREATE_TEAM,
  },
  [ACTION_EDIT_TEAM]: {
    title: "Actualizar Equipo",
    saveButtonText: "Editar Equipo",
    action: ACTION_EDIT_TEAM,
  },
  [ACTION_DELETE_TEAM]: {
    title: "Eliminar Equipo",
    saveButtonText: "Eliminar Equipo",
    action: ACTION_DELETE_TEAM,
  },
};

const MyTeams = () => {
  const { triggerAlert } = useAlert();
  const { teams, setTeams } = useContext(TeamsContext);
  const [openDialogForm, setOpenDialogForm] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [teamInfo, setTeamInfo] = useState({});
  const [action, setAction] = useState(ACTION_CREATE_TEAM);

  const onCreateTeam = () => {
    setAction(ACTION_CREATE_TEAM);
    setTeamInfo({});
    setOpenDialogForm(true);
  };

  const onCloseDialog = () => {
    setTeamInfo({});
    setOpenDialogForm(false);
    setOpenDeleteDialog(false);
  };

  const onEditTeam = (team) => {
    setAction(ACTION_EDIT_TEAM);
    setTeamInfo(team);
    setOpenDialogForm(true);
  };

  const onDeleteTeam = (team) => {
    setAction(ACTION_DELETE_TEAM);
    setTeamInfo(team);
    setOpenDeleteDialog(true);
  };

  const refreshTeams = () => {
    setTeams(getAllTeams());
  };

  const onSubmit = (formData) => {
    const teamData = { ...formData, ...(teamInfo.id && { id: teamInfo.id }) };
    let res;
    switch (action) {
      case ACTION_CREATE_TEAM:
        res = createTeam(teamData);
        break;

      case ACTION_EDIT_TEAM:
        res = updateTeam(teamData);
        break;

      case ACTION_DELETE_TEAM:
        res = deleteTeam(teamData.id);
        break;
    }

    if (res.error) {
      triggerAlert({ message: res.message, type: "error" });
    } else {
      triggerAlert({ message: res.message, type: "success" });
      refreshTeams();
      onCloseDialog();
    }
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrum />
      </Grid>
      <Grid item xs={12}>
        <Button
          kind="create"
          size="large"
          sx={{ fontWeight: "700", fontSize: "1rem" }}
          onClick={onCreateTeam}
        >
          Crear Equipo
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CardGroup xs={12} sm={6} md={6} lg={4} xl={3} spacing={3}>
          {teams.map((team) => (
            <Card
              key={team.id}
              id={team.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "15px",
                gap: "15px",
                height: "120px",
              }}
            >
              <CardMedia
                component="img"
                alt={team.name}
                image={team.logo}
                sx={{
                  padding: "0px",
                  objectFit: "contain",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  maxWidth: "30%",
                }}
              />
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "10px",
                }}
              >
                <CardContent sx={{ padding: "0px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="primary"
                    align="left"
                    sx={{
                      fontWeight: "bold",
                      mb: "0",
                      wordWrap: "break-word",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      lineHeight: "1.2",
                    }}
                  >
                    {team.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="primary.main"
                    align="left"
                    sx={{ fontWeight: "400", mb: 0, lineHeight: "1.2" }}
                  >
                    {team.city}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: 0 }}>
                  <Button
                    kind="edit"
                    size="small"
                    variant="contained"
                    onClick={() => onEditTeam(team)}
                  >
                    Editar
                  </Button>
                  <Button
                    kind="delete"
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => onDeleteTeam(team)}
                  >
                    Eliminar
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </CardGroup>
      </Grid>
      <TeamDialog
        open={openDialogForm}
        dialogTitle={dialogConfigs[action].title}
        confirmText={dialogConfigs[action].saveButtonText}
        initialValues={teamInfo}
        onCancel={onCloseDialog}
        onSubmit={onSubmit}
      />
      <SimpleDialog
        open={openDeleteDialog}
        dialogTitle={dialogConfigs[action].title}
        confirmText={dialogConfigs[action].saveButtonText}
        dialogContent="¿Estás seguro de que deseas eliminar este equipo? Esta decisión es irreversible."
        initialValues={teamInfo}
        onCancel={onCloseDialog}
        onSubmit={onSubmit}
      />
    </Grid>
  );
};

export default MyTeams;
