import { Component } from "react";
import TrainList from "../../core/TrainList.js";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const trainList = {};
    this.state = { trainList };
  }

  async componentDidMount() {
    const trainList = await TrainList.get();
    this.setState({ trainList });
  }

  render() {
    const { trainList } = this.state;
    if (!trainList) {
      return "Loading...";
    }

    return (
      <div>
        <div>{JSON.stringify(trainList)}</div>
      </div>
    );
  }
}
