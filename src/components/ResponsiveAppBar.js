import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../App.css';


const ResponsiveAppBar = (props) => {

  return (
    <AppBar props={props} position="sticky" elevation={0} style={{backgroundImage: "url('black_stone.png')", height: '15vh', fontFamily: "Times New Roman"}}>
      <Container maxWidth="xl">
          <Typography
            variant="h6"
            component="div"
            style={{textAlign: 'center', marginTop: '2vh'}}
          >
          </Typography>
        <Toolbar disableGutters>
        {/* <img src="http://localhost:3000/experiments.png" alt="Minecraft Social Experiments" style={{width: 450, marginTop: '2vh', marginBottom: 0}}/> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

              
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src="experiments.png" alt="Minecraft Social Experiments" style={{width: 300, marginTop: '1vh'}}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <img src="experiments.png" alt="Minecraft Social Experiments" style={{width: 550, marginTop: '0', marginBottom: 0}}/>
          </Box>

        </Toolbar>

      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
