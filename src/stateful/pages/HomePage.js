import { Component } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

import SearchEngine from "../../core/SearchEngine.js";
import TrainInfoView from "../molecules/TrainInfoView.js";

const DEFAULT_ACTIVE_STATION_NAME = "Nugegoda";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStationName: DEFAULT_ACTIVE_STATION_NAME,
      trainInfoList: [],
    };
  }

  async componentDidMount() {
    const trainInfoList = await SearchEngine.getTrainsForStation(
      this.state.activeStationName
    );
    this.setState({ trainInfoList });
  }

  render() {
    const { activeStationName, trainInfoList } = this.state;
    if (!trainInfoList) {
      return "Loading...";
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6">🇱🇰 Railways</Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ margin: 3 }}>
          <Typography variant="h4">
            <strong>{activeStationName}</strong> Railway Station
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {trainInfoList.map((trainInfo) => (
                <TrainInfoView
                  key={`train-info-${trainInfo.trainNo}`}
                  trainInfo={trainInfo}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}
