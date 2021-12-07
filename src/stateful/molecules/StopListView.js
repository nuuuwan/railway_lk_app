const [SVG_WIDTH, SVG_HEIGHT] = [800, 100];
const CIRCLE_STATION_RADIUS = 6;
const CIRCLE_STATION_FILL = "white";
const CIRCLE_STATION_STROKE = "red";
const CIRCLE_STATION_STROKE_WIDTH = 3;
const PADDING_WIDTH = 30;
const TEXT_STATION_STROKE = "black";
const TEXT_STATION_TEXT_ANCHOR = "middle";
const STATION_WIDTH_GAP = 200;
const LINE_STROKE = "red";
const LINE_STROKE_WIDTH = 4;
const DOT_GAP = 5;
const TEXT_STATION_FONT_WEIGHT = "bold";

function TimeView({ t }) {
  if (!t) {
    return "";
  }
  const h = parseInt(t / 3600);
  const m = parseInt(t / 60) % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function Line({ x, y, width }) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + width}
      y2={y}
      fill={null}
      stroke={LINE_STROKE}
      strokeWidth={LINE_STROKE_WIDTH}
    />
  );
}

function Dotted({ x, y, width }) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + width}
      y2={y}
      fill={null}
      stroke={LINE_STROKE}
      strokeWidth={LINE_STROKE_WIDTH}
      strokeDasharray={`${DOT_GAP},${DOT_GAP}`}
    />
  );
}

function StationView({ x, y, stop }) {
  console.debug(stop);
  const { stationName, timeArrive, timeDepart } = stop;
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={CIRCLE_STATION_RADIUS}
        fill={CIRCLE_STATION_FILL}
        stroke={CIRCLE_STATION_STROKE}
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
  return (
    <svg height={SVG_HEIGHT} width={SVG_WIDTH}>
      <Line x={x} y={y} width={STATION_WIDTH_GAP} />
      <Dotted x={x + STATION_WIDTH_GAP} y={y} width={STATION_WIDTH_GAP} />
      <Line x={x + STATION_WIDTH_GAP * 2} y={y} width={STATION_WIDTH_GAP} />

      <StationView
        key={`station-${keyPrefix}-0`}
        x={x}
        y={y}
        stop={stopList[0]}
      />
      <StationView
        key={`station-${keyPrefix}-1`}
        x={x + STATION_WIDTH_GAP * 1}
        y={y}
        stop={stopList[1]}
      />
      <StationView
        key={`station-${keyPrefix}-l1`}
        x={x + STATION_WIDTH_GAP * 2}
        y={y}
        stop={stopList.slice(-2)[0]}
      />
      <StationView
        key={`station-${keyPrefix}-l0`}
        x={x + STATION_WIDTH_GAP * 3}
        y={y}
        stop={stopList.slice(-1)[0]}
      />
    </svg>
  );
}
