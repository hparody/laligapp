import ThemeProvider from "./providers/ThemeProvider";
import AppContainer from "./layout/AppContainer";
import Router from "./Router/Router";

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <Router />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
