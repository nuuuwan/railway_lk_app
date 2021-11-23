import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

function TimeView({ t }) {
  if (!t) {
    return "-";
  }
  let h = parseInt(t / 3600);
  const m = parseInt((t % 3600) / 60);
  let p = "AM";
  if (h === 12) {
    p = "PM";
  } else if (h === 24) {
    h = 0;
    p = "AM";
  } else if (h > 12) {
    h -= 12;
    p = "PM";
  }
  const text = `${String(h).padStart(2, "0")}:${String(m).padStart(
    2,
    "0"
  )}${p}`;
  return <Typography>{text}</Typography>;
}

export default function TrainInfoView({ trainInfo }) {
  const { trainNo, name, timeArrive, timeDepart } = trainInfo;
  return (
    <TableRow>
      <TableCell>
        <TimeView t={timeArrive} />
      </TableCell>
      <TableCell>
        <TimeView t={timeDepart} />
      </TableCell>
      <TableCell>{trainNo}</TableCell>
      <TableCell>{name}</TableCell>
    </TableRow>
  );
}
