import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0b6bf2',
      contrastText: '#fff',
    },
    hover: {
      main: '#0243eb',
      contrastText: '#fff',
    },
    done: {
      main: '#dbe9fd',
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
