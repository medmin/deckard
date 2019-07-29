import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { AppBar, Toolbar, Grid, Avatar, Typography, TextField, Hidden, Icon, Button } from "@material-ui/core";

class NavBar extends Component {
  render() {
    return (
      <AppBar color="inherit">
        <Toolbar variant="regular">
          <Grid container alignItems="center" justify="flex-start" spacing={1}>
            <Grid item>
              <Hidden smUp>
                <Icon>reorder</Icon>
              </Hidden>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center" justify="flex-start" spacing={1}>
            <Grid item>
              <Grid container alignItems="center">
                <Icon>face</Icon>
              </Grid>
            </Grid>
            <Grid item>
              <span>PROFILE</span>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center" justify="flex-end" spacing={1}>
            <Button variant="contained" color="primary">
              <span style={{ cursor: "pointer" }}>Follow</span>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
