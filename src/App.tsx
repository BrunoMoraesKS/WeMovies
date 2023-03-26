import { GlobalStyles } from './styles/global';
import { Container } from './styles';
import Router from './routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
