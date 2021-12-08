import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TrainNameView({ trainNo, name }) {
  return (
    <Box>
      <Typography variant="caption"></Typography>
      {trainNo}
      <Typography variant="subtitle1">{name}</Typography>
    </Box>
  );
}
