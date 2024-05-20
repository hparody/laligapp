import { SnackbarProvider } from "notistack";

import { ThemeProvider, TeamsProvider } from "./providers";
import AppContainer from "./layout/AppContainer";
import Router from "./Router/Router";

const App = () => {
  return (
    <ThemeProvider>
      <TeamsProvider>
        <AppContainer>
          <SnackbarProvider autoHideDuration={4000}>
            <Router />
          </SnackbarProvider>
        </AppContainer>
      </TeamsProvider>
    </ThemeProvider>
  );
};

export default App;
