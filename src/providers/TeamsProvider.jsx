import PropTypes from "prop-types";
import { useState, useMemo } from "react";

import { getAllTeams } from "src/components/utils/teams";
import TeamsContext from "src/contexts/TeamsContext";

const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState(getAllTeams());

  const values = useMemo(
    () => ({
      teams,
      setTeams,
    }),
    [teams, setTeams]
  );

  return (
    <TeamsContext.Provider value={values}>{children}</TeamsContext.Provider>
  );
};

TeamsProvider.propTypes = {
  children: PropTypes.node,
};

export default TeamsProvider;
