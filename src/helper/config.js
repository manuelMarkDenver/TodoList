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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '10rem',
        },
      },
    },
  },
});

export default customTheme;
