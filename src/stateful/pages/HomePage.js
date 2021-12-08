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

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "M",
      trainInfoList: [],
    };
  }

  async componentDidMount() {
    const { filterText } = this.state;
    this.interval = setInterval(
      async function () {
        const trainList = await SearchEngine.getTrainListExtended(filterText);
        this.setState({ time: Date.now(), trainList });
      }.bind(this),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { trainList, time } = this.state;
    if (!trainList) {
      return "Loading...";
    }

    const tableKey = `table-${time}`;

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6">🇱🇰 Railways</Typography>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody key={tableKey}>
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
