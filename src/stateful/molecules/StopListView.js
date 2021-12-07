import SearchEngine, { getTimeCurrent } from "../../core/SearchEngine.js";

const [SVG_WIDTH, SVG_HEIGHT] = [1000, 100];
const CIRCLE_STATION_RADIUS = 6;
const CIRCLE_STATION_FILL = "white";
const CIRCLE_STATION_STROKE_WIDTH = 3;
const PADDING_WIDTH = 30;
const TEXT_STATION_STROKE = "black";
const TEXT_STATION_TEXT_ANCHOR = "middle";
const STATION_WIDTH_GAP = 300;
const LINE_STROKE_WIDTH = 4;
const DOT_GAP = 5;
const TEXT_STATION_FONT_WEIGHT = "bold";
const CIRCLE_TRAIN_STROKE = "black";
const CIRCLE_TRAIN_STROKE_OPACITY = 0.5;

function TimeView({ t }) {
  if (!t) {
    return "";
  }
  const h = parseInt(t / 3600);
  const m = parseInt(t / 60) % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function Line({ x, y, width, color }) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + width}
      y2={y}
      fill={null}
      stroke={color}
      strokeWidth={LINE_STROKE_WIDTH}
    />
  );
}

function Dotted({ x, y, width, color }) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + width}
      y2={y}
      fill={null}
      stroke={color}
      strokeWidth={LINE_STROKE_WIDTH}
      strokeDasharray={`${DOT_GAP},${DOT_GAP}`}
    />
  );
}

function TrainView({ x, y }) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={CIRCLE_STATION_RADIUS}
        fill={CIRCLE_STATION_FILL}
        stroke={CIRCLE_TRAIN_STROKE}
        strokeWidth={CIRCLE_STATION_STROKE_WIDTH}
        strokeOpacity={CIRCLE_TRAIN_STROKE_OPACITY}
      />
    </g>
  );
}

function StationView({ x, y, stop, color }) {
  const { stationName, timeArrive, timeDepart } = stop;
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={CIRCLE_STATION_RADIUS}
        fill={CIRCLE_STATION_FILL}
        stroke={color}
        strokeWidth={CIRCLE_STATION_STROKE_WIDTH}
      />
      <text
        x={x}
        y={y + CIRCLE_STATION_RADIUS * 4}
        fill={TEXT_STATION_STROKE}
        stroke={null}
        textAnchor={TEXT_STATION_TEXT_ANCHOR}
        fontWeight={TEXT_STATION_FONT_WEIGHT}
      >
        {stationName}
      </text>
      <text
        x={x}
        y={y + CIRCLE_STATION_RADIUS * 7}
        fill={TEXT_STATION_STROKE}
        stroke={null}
        textAnchor={TEXT_STATION_TEXT_ANCHOR}
      >
        <TimeView t={timeArrive} />
      </text>
      <text
        x={x}
        y={y + CIRCLE_STATION_RADIUS * 10}
        fill={TEXT_STATION_STROKE}
        stroke={null}
        textAnchor={TEXT_STATION_TEXT_ANCHOR}
      >
        <TimeView t={timeDepart} />
      </text>
    </g>
  );
}

export default function StopListView({ trainNo, stopList }) {
  const nStops = stopList.length;
  if (nStops < 4) {
    return "-";
  }

  const [x, y] = [SVG_HEIGHT / 2, PADDING_WIDTH];
  const keyPrefix = trainNo;

  const [stationLastDepart, stationNextArrive] =
    SearchEngine.getCurrentStops(stopList);
  if (!stationLastDepart || !stationLastDepart) {
    return "-";
  }

  const timeCurrent = getTimeCurrent();
  const dTime = stationNextArrive.timeDepart - timeCurrent;
  let color;
  if (dTime < 0) {
    color = "gray";
  } else if (dTime < 120) {
    color = "red";
  } else if (dTime < 600) {
    color = "orange";
  } else {
    color = "green";
  }

  let dTrain = 0;
  if (timeCurrent < stationNextArrive.timeArrive) {
    dTrain =
      (stationNextArrive.timeArrive - timeCurrent) /
      (stationNextArrive.timeArrive - stationLastDepart.timeDepart);
  } else if (timeCurrent > stationNextArrive.timeDepart) {
    dTrain =
      -(timeCurrent - stationNextArrive.timeDepart) /
      (stationNextArrive.timeArrive - stationLastDepart.timeDepart);
  }

  const xTrain = x + STATION_WIDTH_GAP * (2 - dTrain);

  return (
    <svg height={SVG_HEIGHT} width={SVG_WIDTH} color={color}>
      <Dotted x={x} y={y} width={STATION_WIDTH_GAP} color={color} />
      <Line
        x={x + STATION_WIDTH_GAP}
        y={y}
        width={STATION_WIDTH_GAP}
        color={color}
      />
      <Dotted
        x={x + STATION_WIDTH_GAP * 2}
        y={y}
        width={STATION_WIDTH_GAP}
        color={color}
      />

      <StationView
        key={`station-${keyPrefix}-0`}
        x={x}
        y={y}
        stop={stopList[0]}
        color={color}
      />

      <StationView
        key={`station-${keyPrefix}-lastDepart`}
        x={x + STATION_WIDTH_GAP * 1}
        y={y}
        stop={stationLastDepart}
        color={color}
      />
      <StationView
        key={`station-${keyPrefix}-nextArrive`}
        x={x + STATION_WIDTH_GAP * 2}
        y={y}
        stop={stationNextArrive}
        color={color}
      />

      <StationView
        key={`station-${keyPrefix}-l0`}
        x={x + STATION_WIDTH_GAP * 3}
        y={y}
        stop={stopList.slice(-1)[0]}
        color={color}
      />

      <TrainView x={xTrain} y={y} />
    </svg>
  );
}
