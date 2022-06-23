import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Link,
  Avatar,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  MailOutlined,
  CasesOutlined,
} from "@mui/icons-material";
import { grey } from "@material-ui/core/colors";
import { Link as Redirect } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <Card
        className="Profile"
        sx={{
          borderRadius: 12,
          minWidth: 256,
          textAlign: "center",
          borderColor: grey[300],
        }}
      >
        <CardContent>
          <Avatar
            sx={{ width: 130, height: 130, margin: "auto" }}
            className="avatar"
            alt={this.props.name}
            src={this.props.avatar}
          />
          <Typography variant="h4" component="h4" sx={{ color: grey[700] }}>
            {this.props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="subtitle1"
            sx={{ color: grey[500] }}
          >
            {this.props.occupation}
          </Typography>
        </CardContent>
        <Divider light />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            color: grey[700],
          }}
        >
          <Box
            p={2}
            className="linkedinho"
            sx={{ marginTop: 2, marginBottom: 2, letterSpacing: "1px" }}
          >
            <Link href={this.props.linkedinho} color="inherit">
              <LinkedIn fontSize="large" sx={{ color: grey[800] }} />
            </Link>
          </Box>
          <Box
            p={2}
            className="git"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              letterSpacing: "1px",
              borderLeft: "1px solid #dfdfdf;",
            }}
          >
            <Link href={this.props.github} color="inherit">
              <GitHub fontSize="large" sx={{ color: grey[800] }} />
            </Link>
          </Box>
          <Box
            p={2}
            className="mail"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              letterSpacing: "1px",
              borderLeft: "1px solid #dfdfdf;",
            }}
          >
            <Link href={"mailto:" + this.props.mail} color="inherit">
              <MailOutlined fontSize="large" sx={{ color: grey[800] }} />
            </Link>
          </Box>
          <Box
            p={2}
            className="resume"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              letterSpacing: "1px",
              borderLeft: "1px solid #dfdfdf;",
            }}
          >
            <Redirect to={this.props.resume} color="inherit">
              <CasesOutlined fontSize="large" sx={{ color: grey[800] }} />
            </Redirect>
          </Box>
        </Box>
      </Card>
    );
  }
}
