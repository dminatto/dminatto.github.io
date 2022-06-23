import { Typography, Box, Card, CardContent, Stack } from "@mui/material";
import React, { Component } from "react";

export default class Me extends Component {
  render() {
    return (
      <Box>
        <Box sx={{ border: "1px  grey", bgcolor: "white" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4">Daniele Minatto</Typography>
            <Typography variant="h6">Software Developer</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
