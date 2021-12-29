import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import About from './components/About';
import NextEvent from './components/NextEvent';
import SignUp from './components/SignUp';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/Theme';
import { Helmet } from 'react-helmet';
import { useViewport } from './state/useViewport';
import { BREAK_POINT } from './state/breakPoint';


function App() {

  
  const { width } = useViewport();


  return (
    <>
    <Helmet>
      <body style="background-image: url('white_sand_bg.png')">
      </body>

    </Helmet>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
        <div
        style={{
          width: width < BREAK_POINT ? '90%' : '50vw',
          margin: 'auto',
          marginTop: '5vh',
          color: 'gray',
          marginBottom: '40vh',
          }}>
          <About/>
          <NextEvent/>
          <SignUp/>
        </div>
      </ThemeProvider>
    </>

  );
}

export default App;
