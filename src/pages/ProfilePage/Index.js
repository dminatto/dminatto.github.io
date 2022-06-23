import React, { Component } from "react";
import { Container, Box } from "@mui/material";
import Profile from "./../../components/Profile/Index";
import Footer from "./../../components/Footer/Index";

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <Box sx={{ paddingTop: "55%" }}>
            <Profile
              name="Daniele Minatto"
              occupation="Software Developer"
              avatar="https://i.pravatar.cc/300"
              github="https://github.com/dminatto"
              linkedinho="https://www.linkedin.com/in/daniele-minatto/"
              mail="hi@minatto.dev"
              resume="/resume"
            ></Profile>
          </Box>
        </Container>
        <Footer />
      </>
    );
  }
}
