import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AppBar, Grid } from "@material-ui/core";
import "./style.css";

export default function CustomHeader({
  token,
  handleClose,
  anchorEl,
  handleMenu,
}) {
  token = localStorage.getItem("SessionToken");
  return (
    <Grid item>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar id="header">
          <Toolbar>
            <Grid xs={1}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Grid id="headercolor"> Quiz Portal</Grid>
              </Typography>
            </Grid>
            <Grid xs={12}></Grid>
            <Grid container xs={1}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Grid style={{ color: "white" }}>
                  {" "}
                  <AccountCircle />
                </Grid>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                id="menu"
              >
                <Grid>
                  {" "}
                  <MenuItem onClick={() => handleClose(1)}>Home</MenuItem>
                </Grid>

                <Grid>
                  {" "}
                  {token && (
                    <Grid>
                      <Grid>
                        <MenuItem onClick={() => handleClose(2)}>
                          Profile
                        </MenuItem>
                      </Grid>
                      <Grid>
                        <MenuItem onClick={() => handleClose(3)}>
                          Logout
                        </MenuItem>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                <Grid>
                  {" "}
                  {token == null && (
                    <Grid>
                      <Grid>
                        <MenuItem onClick={() => handleClose(4)}>
                          Login
                        </MenuItem>
                      </Grid>
                      <Grid>
                        <MenuItem onClick={() => handleClose(5)}>
                          Sign Up
                        </MenuItem>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Menu>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}
