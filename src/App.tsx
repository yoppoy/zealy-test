import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import PageHome from './pages/Home';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App: React.FunctionComponent = () => {
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <PageHome />
      </ThemeProvider>
    </>
  );
};

export default App;
