import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0b6bf2',
      contrastText: '#fff',
    },
    done: {
      main: '#dbe9fd',
      contrastText: '#fff',
    },
    add: {
      main: '#11a783',
      hover: '#2cc2a5',
      contrastText: '#fff',
    },
    delete: {
      main: '#dc262b',
      contrastText: '#fff',
    },
    edit: {
      main: '#00c1d4',
      light: '#d9f6f9',
      dark: '#00a6c0',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '7rem',
        },
      },
    },
  },
});

export default customTheme;
