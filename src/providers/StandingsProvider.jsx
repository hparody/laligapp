import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import { getStandings } from "src/components/utils/standings";
import StandingsContext from "src/contexts/StandingsContext";

const StandingsProvider = ({ children }) => {
  const [standings, setStandings] = useState(getStandings());

  const values = useMemo(
    () => ({
      standings,
      setStandings,
    }),
    [standings, setStandings]
  );

  return (
    <StandingsContext.Provider value={values}>
      {children}
    </StandingsContext.Provider>
  );
};

StandingsProvider.propTypes = {
  children: PropTypes.node,
};

export default StandingsProvider;
