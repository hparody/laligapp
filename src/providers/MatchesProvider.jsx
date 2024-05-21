import PropTypes from "prop-types";
import { useState, useMemo } from "react";

import { getAllMatches } from "src/components/utils/matches";
import MatchesContext from "src/contexts/MatchesContext";

const MatchesProvider = ({ children }) => {
  const [matches, setMatches] = useState(getAllMatches());

  const values = useMemo(
    () => ({
      matches,
      setMatches,
    }),
    [matches, setMatches]
  );

  return (
    <MatchesContext.Provider value={values}>{children}</MatchesContext.Provider>
  );
};

MatchesProvider.propTypes = {
  children: PropTypes.node,
};

export default MatchesProvider;
