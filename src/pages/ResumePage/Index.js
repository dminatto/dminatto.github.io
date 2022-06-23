import React, { Component } from "react";
import ExpLine from "../../components/ExpLine/Index";
import { Container } from "@mui/material";
import { Typography, Box, Card, CardContent, Stack } from "@mui/material";
import { Timeline } from "@mui/lab";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Footer from "./../../components/Footer/Index";
import Me from "./../../components/Me/Index";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <Me />
        </Container>
        <Footer />
      </>
    );
  }
}
