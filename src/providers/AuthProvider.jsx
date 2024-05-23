import PropTypes from "prop-types";
import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "src/hooks/useLocalStorage";
import AuthContext from "src/contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data) => {
      setUser(data);
      navigate("/");
    },
    [navigate, setUser]
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate, setUser]);

  const values = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
