import React from "react";
import { Icon, ListItem, List, Divider, Grid, Button } from "@material-ui/core";

export default function Footer() {
  return (
    <Grid container direction="row" justify="space-evenly">
      <Grid item>
        <Button variant="outlined" size="small">
          <Grid container direction="column" alignItems="center">
            <Icon>camera_alt</Icon>
            <span>Shots</span>
          </Grid>
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">
          <Grid container direction="column" alignItems="center">
            <Icon>camera_alt</Icon>
            <span>Shots</span>
          </Grid>
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">
          <Grid container direction="column" alignItems="center">
            <Icon>thumb_up</Icon>
            <span>Likes</span>
          </Grid>
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">
          <Grid container direction="column" alignItems="center">
            <Icon>camera_alt</Icon>
            <span>Shots</span>
          </Grid>
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">
          <Grid container direction="column" alignItems="center">
            <Icon>people</Icon>
            <span>User</span>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
}
