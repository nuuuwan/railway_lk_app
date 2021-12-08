import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import StopListView from "./StopListView.js";

import { getTimeCurrent } from "../../core/SearchEngine.js";
import TrainNameView from "../../nonstate/atoms/TrainNameView.js";

export default function TrainInfoView({ train }) {
  const { trainNo, name, stopList, stopNextArrive } = train;
  const timeCurrent = getTimeCurrent();

  let details;
  if (stopNextArrive.timeArrive > timeCurrent) {
    const dTime = stopNextArrive.timeArrive - timeCurrent;
    details = (
      <div>
        {"Arriving at "}
        <div>
          <strong>{stopNextArrive.stationName}</strong>
        </div>
        {" in "}
        {dTime}s
      </div>
    );
  } else if (stopNextArrive.timeDepart > timeCurrent) {
    const dTime = stopNextArrive.timeDepart - timeCurrent;
    details = (
      <div>
        {"Departing "}
        <div>
          <strong>{stopNextArrive.stationName}</strong>
        </div>
        {" in "}
        {dTime}s
      </div>
    );
  }

  return (
    <TableRow>
      <TableCell>
        <TrainNameView trainNo={trainNo} name={name} />
      </TableCell>
      <TableCell>{details}</TableCell>
      <TableCell>
        <StopListView trainNo={trainNo} stopList={stopList} />
      </TableCell>
    </TableRow>
  );
}
