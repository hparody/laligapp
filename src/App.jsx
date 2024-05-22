import { SnackbarProvider } from "notistack";

import {
  ThemeProvider,
  TeamsProvider,
  MatchesProvider,
  StandingsProvider,
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
            <StandingsProvider>
              <AppContainer>
                <SnackbarProvider autoHideDuration={4000}>
                  <Router />
                </SnackbarProvider>
              </AppContainer>
            </StandingsProvider>
          </MatchesProvider>
        </TeamsProvider>
      </DatePickerProvider>
    </ThemeProvider>
  );
};

export default App;
