import { Component } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SearchEngine from "../../core/SearchEngine.js";


const DEFAULT_ACTIVE_STATION_NAME = "Colombo Fort";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStationName: DEFAULT_ACTIVE_STATION_NAME,
      trainNos: [],
    };
  }

  async componentDidMount() {
    const trainNos = await SearchEngine.getTrainsForStation(
      this.state.activeStationName
    );
    this.setState({ trainNos });
  }

  render() {
    const { trainNos } = this.state;
    if (!trainNos) {
      return "Loading...";
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              🇱🇰 Railways
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
