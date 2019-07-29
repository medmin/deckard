import React from "react";
import profileimg from "@/assets/profile.jpg";
import { Grid, Icon, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
  },
  h3text: {
    marginBottom: 0,
  },
  h4text: {
    marginTop: 0,
  },
});

export default function Profile() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid item>
            <Icon>email</Icon>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <Avatar alt="Main Profile" src={profileimg} className={classes.bigAvatar} />
            </Grid>
          </Grid>
          <Grid item>
            <Icon>share</Icon>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container justify="center" alignItems="center" direction="column">
          <h3 className={classes.h3text}>Fahad</h3>
          <h4 className={classes.h4text}>https://www.google.com</h4>
        </Grid>
      </Grid>
    </Grid>
  );
}
