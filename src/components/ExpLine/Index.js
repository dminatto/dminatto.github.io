import React, { Component } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Link,
  Avatar,
} from "@mui/material";
import { blue } from "@mui/material/colors";
class ExpLine extends Component {
  render() {
    return (
      <>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary" sx={{ marginLeft: '-367px'}}>
          <Typography gutterBottom variant="button" component="div" sx={{ fontWeight: 'bold' }}>
              {this.props.company}
            </Typography>
            <span style={{color: blue}}>{this.props.years}</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography gutterBottom variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
              {this.props.jobtitle}
            </Typography>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  {this.props.description}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </>
    );
  }
}

export default ExpLine;
