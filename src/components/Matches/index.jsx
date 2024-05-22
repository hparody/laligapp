import Grid from "@mui/material/Grid";
import { useState, useContext } from "react";
import { Box, CardContent, CardActions, Typography } from "@mui/material";
import MatchesContext from "src/contexts/MatchesContext";
import TeamsContext from "src/contexts/TeamsContext";
import useAlert from "src/hooks/useAlert";
import {
  createMatch,
  updateMatch,
  deleteMatch,
  getAllMatches,
} from "../utils/matches";

import { Card, CardGroup } from "../ui/Cards";

import Button from "../ui/Button";
import Breadcrum from "../Breadcrumb";
import { SimpleDialog } from "../ui/Dialogs";
import MatchDialog from "./MatchDialog";
import { getTeamInfoById } from "../selectors/teams";

import TeamLogoImg from "./TeamLogoImg";
import TeamName from "./TeamName";
import TeamScore from "./TeamScore";

const ACTION_CREATE_MATCH = "ACTION_CREATE_MATCH";
const ACTION_EDIT_MATCH = "ACTION_EDIT_MATCH";
const ACTION_DELETE_MATCH = "ACTION_DELETE_MATCH";

const dialogConfigs = {
  [ACTION_CREATE_MATCH]: {
    title: "Registrar Partido",
    saveButtonText: "Guardar Partido",
    action: ACTION_CREATE_MATCH,
  },
  [ACTION_EDIT_MATCH]: {
    title: "Actualizar Partido",
    saveButtonText: "Editar Partido",
    action: ACTION_EDIT_MATCH,
  },
  [ACTION_DELETE_MATCH]: {
    title: "Eliminar Partido",
    saveButtonText: "Eliminar Partido",
    action: ACTION_DELETE_MATCH,
  },
};

const parseValues = (values) => {
  return {
    ...values,
    ...(values.goalsLocal && {
      goalsLocal: parseInt(values.goalsLocal),
    }),
    ...(values.goalsAway && {
      goalsAway: parseInt(values.goalsAway),
    }),
  };
};

const Matches = () => {
  const { matches, setMatches } = useContext(MatchesContext);
  const { teams } = useContext(TeamsContext);
  const { triggerAlert } = useAlert();
  const [openDialogForm, setOpenDialogForm] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [matchInfo, setMatchInfo] = useState({});
  const [action, setAction] = useState(ACTION_CREATE_MATCH);

  const onCreateMatch = () => {
    setAction(ACTION_CREATE_MATCH);
    setMatchInfo({});
    setOpenDialogForm(true);
  };

  const onCloseDialog = () => {
    setMatchInfo({});
    setOpenDialogForm(false);
    setOpenDeleteDialog(false);
  };

  const onEditMatch = (match) => {
    setAction(ACTION_EDIT_MATCH);
    setMatchInfo(parseValues(match));
    setOpenDialogForm(true);
  };

  const onDeleteMatch = (match) => {
    setAction(ACTION_DELETE_MATCH);
    setMatchInfo(match);
    setOpenDeleteDialog(true);
  };

  const refreshMatches = () => {
    setMatches(getAllMatches());
  };

  const onSubmit = (formData) => {
    const matchData = {
      ...formData,
      ...(matchInfo.id && { id: matchInfo.id }),
    };

    let res;
    switch (action) {
      case ACTION_CREATE_MATCH:
        res = createMatch(matchData);
        break;

      case ACTION_EDIT_MATCH:
        res = updateMatch(matchData);
        break;

      case ACTION_DELETE_MATCH:
        res = deleteMatch(matchData.id);
        break;
    }

    if (res.error) {
      triggerAlert({ message: res.message, type: "error" });
    } else {
      triggerAlert({ message: res.message, type: "success" });
      refreshMatches();
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
          onClick={onCreateMatch}
        >
          Registrar Partido
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CardGroup xs={12} sm={6} md={6} lg={4} xl={3} spacing={2}>
          {matches.map((match) => {
            const localTeam = getTeamInfoById(match.localTeam, teams);
            const awayTeam = getTeamInfoById(match.awayTeam, teams);

            return (
              <Card
                key={match.id}
                id={match.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "15px",
                  gap: "15px",
                }}
              >
                <CardContent
                  component="div"
                  sx={{
                    padding: "0px",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    gap: "10px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="primary"
                    align="left"
                    sx={{
                      mb: "0",
                      wordWrap: "break-word",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      lineHeight: "1.2",
                      textAlign: "center",
                    }}
                  >
                    {`${match.matchDate} | ${match.matchTime}`}
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      padding: "0px",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "140px",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        width: "35%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        height: "100%",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        alignContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      <TeamLogoImg
                        alt={localTeam.name}
                        src={localTeam.logo}
                        loading="lazy"
                      />
                      <TeamName>{localTeam.name}</TeamName>
                    </Box>
                    <Box component="div" sx={{ width: "12%" }}>
                      <TeamScore score={match.goalsLocal} type="Local" />
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        width: "6%",
                        display: "flex",
                        verticalAlign: "middle",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h4"
                        color="primary"
                        align="center"
                        sx={{
                          mb: "0",
                          fontWeight: "bold",
                          wordWrap: "break-word",
                          overflow: "hidden",
                          textAlign: "center",
                          textOverflow: "ellipsis",
                          height: "fit-content",
                          lineHeight: 1.2,
                        }}
                      >
                        -
                      </Typography>
                    </Box>
                    <Box component="div" sx={{ width: "12%" }}>
                      <TeamScore score={match.goalsAway} type="Visitante" />
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        width: "35%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        height: "100%",
                        boxSizing: "border-box",
                        alignContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      <TeamLogoImg
                        alt={awayTeam.name}
                        src={awayTeam.logo}
                        loading="lazy"
                      />
                      <TeamName>{awayTeam.name}</TeamName>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    kind="edit"
                    size="small"
                    variant="contained"
                    onClick={() => onEditMatch(match)}
                  >
                    Editar
                  </Button>
                  <Button
                    kind="delete"
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => onDeleteMatch(match)}
                  >
                    Eliminar
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </CardGroup>
      </Grid>
      <MatchDialog
        open={openDialogForm}
        dialogTitle={dialogConfigs[action].title}
        confirmText={dialogConfigs[action].saveButtonText}
        initialValues={matchInfo}
        onCancel={onCloseDialog}
        onSubmit={onSubmit}
      />
      <SimpleDialog
        open={openDeleteDialog}
        dialogTitle={dialogConfigs[action].title}
        confirmText={dialogConfigs[action].saveButtonText}
        dialogContent="¿Estás seguro de que deseas eliminar este partido? Esta decisión es irreversible."
        initialValues={matchInfo}
        onCancel={onCloseDialog}
        onSubmit={onSubmit}
      />
    </Grid>
  );
};

export default Matches;
