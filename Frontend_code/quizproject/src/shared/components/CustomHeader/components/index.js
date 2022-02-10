// import React, {Component} from "react";
// import Signup from '../../../../screens/signup'
// // import Login from '../screens/Login';
// // import AddPost from '../components/Posts/AddPost';
// // import Home from '../screens/Home';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Container } from "@material-ui/core";

// class NavBar extends Component{
//     render(){
//         return(
//           <Router>
//             <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//             <div class="container">
//             <a className="navbar-brand" href="#">Weather</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="##navbarResponsive" aria-controls="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="#navbarResponsive">
//               <div className="navbar-nav ml-auto">

//               {/* <Link className="nav-item nav-link " to="/Home">Home</Link>
      
//               <Link className="nav-item nav-link" to="/Login">Login</Link>
//               <Link className="nav-item nav-link " to="/AddPost">AddPost</Link> */}
              
//               <Link className="nav-item nav-link" to="/Signup">SignUp</Link>
           
              
                
                
//               </div>
//               </div>
//             </div>
//           </nav>
//           <Switch>
//           <Route path="/Signup">
//             <Signup />
//           </Route>
//           {/* <Route path="/Login">
//             <Login />
//           </Route>
//           <Route path="/AddPost">
//             <AddPost />
//           <Route path="/Home">
//             <Home />
//           </Route> */}
         
//           {/* </Route> */}
//         </Switch>
//       </div>
//           </Router>
//         );
//     }

// }



// export default NavBar;

// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

// const NavigationBar = () => {
//   const classes = useStyles();

//   return (
//     <AppBar >
//       <CssBaseline />
//       <Toolbar>
//         <Typography variant="h4" className={classes.logo}>
//           Navbar
//         </Typography>
//         <div >
//         {/* <Link className='list-group-item list-group-item-action' to="/home" action>List Of Quiz</Link> */}
//         <Link to="/about">
//             About
//           </Link>
//           {/*   <Link to="/contact" className={classes.link}>
//             Contact
//           </Link>
//           <Link to="/faq" className={classes.link}>
//             FAQ
//           </Link> */}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default NavigationBar;

//++++++++++++++++

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home"];
const settings = ["Profile", "login"];

const NavigationBar = () => {
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
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
