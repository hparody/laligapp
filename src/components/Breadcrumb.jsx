import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate, useLocation } from "react-router-dom";

import routes from "src/Router/routes";

const Breadcrum = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationSteps = location.pathname.split("/");

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›">
      {navigationSteps.map((path, idx) => {
        const routeName = path === "" ? "home" : path;
        const { route, label, Icon } = routes[routeName];
        return (
          <Link
            underline="always"
            key={routeName}
            color={idx === navigationSteps.length -1 ? "secondary"  :"text.primary"}
            size="small"
            href={route}
            onClick={() => navigate(route)}
            sx={{ display: 'flex', alignItems: 'center', gap: "10px", fontWeight: "700", fontSize: "24px"}}
          >
            {<Icon color="white.main" size="inherit" />} {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrum;
