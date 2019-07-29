import React, { Component } from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { Container } from "@material-ui/core";
import CardGrid from "@/components/profile/CardGrid";
import { withStyles } from "@material-ui/styles";
import Profile from "./profile/Profile";

const styles = (theme) => ({
  root: {
    marginTop: "70px",
    minHeight: "80vh",
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <Container component="main" className={classes.root} direction="column">
          <Profile />
          <CardGrid />
        </Container>
        <Container component="footer">
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
