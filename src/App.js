import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Jogos from './pages/Jogos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Jogos />
    </ThemeProvider>
  );
}

export default App;
