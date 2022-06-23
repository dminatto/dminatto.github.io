import React, { Component } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Link,
  Avatar,
} from "@mui/material";

export default class Footer extends Component {
  render() {
    return (
      <Box
        sx={{
          backgroundColor: "#4B416F",
          width: "100%",
          height: 30,
          position: "fixed",
          bottom: 0,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="overline" component="overline" color={"#E6E4D8"}>
          made with blood, sweat tears by me
        </Typography>
      </Box>
    );
  }
}
