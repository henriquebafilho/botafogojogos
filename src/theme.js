import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    primary: {
      main: '#58a6ff',
    },
    text: {
      primary: '#e6edf3',
      secondary: '#8b949e',
    },
    divider: '#30363d',
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: { fontFamily: "'Bebas Neue', sans-serif" },
    h2: { fontFamily: "'Bebas Neue', sans-serif" },
    h3: { fontFamily: "'Bebas Neue', sans-serif" },
    h4: { fontFamily: "'Bebas Neue', sans-serif" },
    h5: { fontFamily: "'Bebas Neue', sans-serif" },
    h6: { fontFamily: "'Bebas Neue', sans-serif" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #30363d',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
          '&:hover': {
            backgroundColor: 'rgba(88, 166, 255, 0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(88, 166, 255, 0.12)',
          },
        },
      },
    },
  },
});

export default theme;
