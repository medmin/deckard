import React from "react";
import profileimg from "@/assets/profile.jpg";
import { Grid, Card, CardMedia, CardActions, Icon } from "@material-ui/core";

export default function CardGrid() {
  return (
    <Grid container alignItems="center" justify="flex-start" spacing={1}>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardMedia component="img" src={profileimg} title="Profile Image" />
          <CardActions disableSpacing>
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">favorite</Icon> 193
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardMedia component="img" src={profileimg} title="Profile Image" />
          <CardActions disableSpacing>
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">favorite</Icon> 193
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardMedia component="img" src={profileimg} title="Profile Image" />
          <CardActions disableSpacing>
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">favorite</Icon> 193
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardMedia component="img" src={profileimg} title="Profile Image" />
          <CardActions disableSpacing>
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">mic</Icon> 193
            <Icon fontSize="small">favorite</Icon> 193
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
