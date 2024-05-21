import { SnackbarProvider } from "notistack";

import {
  ThemeProvider,
  TeamsProvider,
  MatchesProvider,
  DatePickerProvider,
} from "./providers";
import AppContainer from "./layout/AppContainer";
import Router from "./Router/Router";

const App = () => {
  return (
    <ThemeProvider>
      <DatePickerProvider>
        <TeamsProvider>
          <MatchesProvider>
            <AppContainer>
              <SnackbarProvider autoHideDuration={4000}>
                <Router />
              </SnackbarProvider>
            </AppContainer>
          </MatchesProvider>
        </TeamsProvider>
      </DatePickerProvider>
    </ThemeProvider>
  );
};

export default App;
