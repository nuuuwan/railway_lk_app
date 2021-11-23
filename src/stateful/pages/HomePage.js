import { Component } from "react";
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
      <div>
        <div>{JSON.stringify(trainNos)}</div>
      </div>
    );
  }
}
