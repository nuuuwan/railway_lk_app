import { Component } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import StopList from "../../core/StopList.js";
import StopListView from "./StopListView.js";

export default class TrainInfoView extends Component {
  constructor(props) {
    super(props);
    this.state = { stopList: null };
  }
  async componentDidMount() {
    const { train } = this.props;
    const { trainNo } = train;
    const stopList = await StopList.get(trainNo);
    this.setState({ stopList });
  }

  render() {
    const { stopList } = this.state;
    if (!stopList) {
      return "Loading...";
    }
    const { train } = this.props;
    const { trainNo, name } = train;
    return (
      <TableRow>
        <TableCell>{trainNo}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>
          <StopListView trainNo={trainNo} stopList={stopList} />
        </TableCell>
      </TableRow>
    );
  }
}
