import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../App.css';

const pages = ['About', 'Next Event', 'Sign Up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar props={props} position="sticky" elevation={0} style={{backgroundImage: "url('http://localhost:3000/black_stone.png')", height: '15vh', fontFamily: "Times New Roman"}}>
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
            <img src="http://localhost:3000/experiments.png" alt="Minecraft Social Experiments" style={{width: 300, marginTop: '1vh'}}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <img src="http://localhost:3000/experiments.png" alt="Minecraft Social Experiments" style={{width: 550, marginTop: '0', marginBottom: 0}}/>
          </Box>

        </Toolbar>

      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
