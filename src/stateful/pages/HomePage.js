import { Component } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

import TrainList from "../../core/TrainList.js";
import TrainInfoView from "../molecules/TrainInfoView.js";

const DEFAULT_ACTIVE_STATION_NAME = "Maradana";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStationName: DEFAULT_ACTIVE_STATION_NAME,
      trainInfoList: [],
    };
  }

  async componentDidMount() {
    const trainList = await TrainList.get();
    console.debug(trainList);
    this.setState({ trainList });
  }

  render() {
    const { trainList } = this.state;
    if (!trainList) {
      return "Loading...";
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6">🇱🇰 Railways</Typography>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {trainList.map((train) => (
                <TrainInfoView
                  key={`train-info-${train.trainNo}`}
                  train={train}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}
