// src/components/GeometryFigure.jsx
// Renders SVG diagrams for geometry/analytics questions. RTL-safe.

import React from 'react';

const STROKE = '#2563eb';
const STROKE_WIDTH = 2;
const FILL = 'none';
const TEXT_COLOR = '#1f2937';
const AXIS_COLOR = '#d1d5db';
const TANGENT_COLOR = '#dc2626';

/** Right triangle: right angle at bottom-right. params: bottom, side, hypotenuse, angle (label at top vertex). */
function TriangleRight({ params = {} }) {
  const bottom = params.bottom ?? 'a';
  const side = params.side ?? 'b';
  const hypotenuse = params.hypotenuse ?? 'c';
  const angle = params.angle ?? 'α';
  return (
    <svg
      viewBox="0 0 200 140"
      className="w-full max-w-sm h-44 mx-auto my-4 rounded-xl border border-gray-100 bg-white shadow-sm"
      aria-hidden
    >
      <polygon
        points="50,110 150,110 150,30"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <path
        d="M140,110 L140,100 L150,100"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <text x="100" y="128" fill={TEXT_COLOR} fontSize="14" textAnchor="middle" fontFamily="sans-serif">
        {bottom}
      </text>
      <text x="158" y="72" fill={TEXT_COLOR} fontSize="14" textAnchor="start" fontFamily="sans-serif">
        {side}
      </text>
      <text x="92" y="62" fill={TEXT_COLOR} fontSize="14" textAnchor="end" fontFamily="sans-serif">
        {hypotenuse}
      </text>
      <text x="118" y="38" fill={TEXT_COLOR} fontSize="12" textAnchor="middle" fontFamily="sans-serif">
        {angle}
      </text>
    </svg>
  );
}

/** Circle with tangent. params: cx, cy, r, externalPoint [x,y] or tangentThroughOrigin. */
function CircleTangent({ params = {} }) {
  const cx = Number(params.cx) ?? 100;
  const cy = Number(params.cy) ?? 100;
  const r = Number(params.r) ?? 50;
  const scale = 180 / (r * 2 + 20);
  const ox = 100;
  const oy = 100;
  const sx = ox + (cx - 0) * 8;
  const sy = oy - (cy - 0) * 8;
  const sr = r * 8;

  let lineProps = { x1: sx + sr, y1: sy - sr, x2: sx + sr, y2: sy + sr };
  if (params.tangentThroughOrigin) {
    const mx = sx;
    const my = sy;
    const dx = 60;
    lineProps = {
      x1: mx - dx,
      y1: my - (dx * 0.5),
      x2: mx + dx,
      y2: my + (dx * 0.5)
    };
  } else if (Array.isArray(params.externalPoint) && params.externalPoint.length >= 2) {
    const [px, py] = params.externalPoint;
    const qx = ox + px * 8;
    const qy = oy - py * 8;
    lineProps = { x1: qx, y1: qy, x2: qx + 40, y2: qy };
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full max-w-sm h-52 mx-auto my-4 rounded-xl border border-gray-100 bg-white shadow-sm"
      aria-hidden
    >
      <circle
        cx={sx}
        cy={sy}
        r={sr}
        fill={FILL}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <line
        x1={sx}
        y1={sy}
        x2={sx + sr}
        y2={sy}
        stroke={AXIS_COLOR}
        strokeDasharray="4"
        strokeWidth="1"
      />
      <line
        x1={lineProps.x1}
        y1={lineProps.y1}
        x2={lineProps.x2}
        y2={lineProps.y2}
        stroke={TANGENT_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <text x={sx + sr / 2 - 8} y={sy + 4} fill={TEXT_COLOR} fontSize="11" fontFamily="sans-serif">
        R
      </text>
      <circle cx={sx} cy={sy} r="3" fill={TEXT_COLOR} />
    </svg>
  );
}

/** Parabola with horizontal line (e.g. y=k). params: a (coefficient), vertexAtOrigin, lineThroughOrigin. */
function ParabolaLine({ params = {} }) {
  const a = Number(params.a) ?? 0.25;
  const lineThroughOrigin = params.lineThroughOrigin === true;
  const w = 200;
  const h = 150;
  const ox = 100;
  const oy = 120;
  const scale = 25;
  const points = [];
  for (let px = -4; px <= 4; px += 0.2) {
    const py = a * px * px;
    points.push(`${ox + px * scale},${oy - py * scale}`);
  }
  const pathD = `M ${points.join(' L ')}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full max-w-sm h-48 mx-auto my-4 rounded-xl border border-gray-100 bg-white shadow-sm"
      aria-hidden
    >
      <line x1="10" y1={oy} x2="190" y2={oy} stroke={AXIS_COLOR} strokeWidth="1" />
      <line x1={ox} y1="10" x2={ox} y2="140" stroke={AXIS_COLOR} strokeWidth="1" />
      <path
        d={pathD}
        fill={FILL}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <line
        x1="20"
        y1="75"
        x2="180"
        y2="75"
        stroke={TANGENT_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <text x="168" y="70" fill={TANGENT_COLOR} fontSize="11" fontFamily="sans-serif">
        y=k
      </text>
    </svg>
  );
}

/** General triangle for Law of Sines/Cosines. params: a, b, c (sides), A, B, C (angle labels). */
function GeneralTriangle({ params = {} }) {
  const a = params.a ?? 'a';
  const b = params.b ?? 'b';
  const c = params.c ?? 'c';
  const A = params.A ?? 'A';
  const B = params.B ?? 'B';
  const C = params.C ?? 'C';
  return (
    <svg
      viewBox="0 0 200 140"
      className="w-full max-w-sm h-44 mx-auto my-4 rounded-xl border border-gray-100 bg-white shadow-sm"
      aria-hidden
    >
      <polygon
        points="40,110 160,110 100,25"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <text x="100" y="128" textAnchor="middle" fill={TEXT_COLOR} fontSize="14" fontFamily="sans-serif">
        {c}
      </text>
      <text x="58" y="72" textAnchor="end" fill={TEXT_COLOR} fontSize="14" fontFamily="sans-serif">
        {b}
      </text>
      <text x="142" y="72" textAnchor="start" fill={TEXT_COLOR} fontSize="14" fontFamily="sans-serif">
        {a}
      </text>
      <text x="100" y="48" textAnchor="middle" fontSize="11" fill={TEXT_COLOR} fontFamily="sans-serif">
        {A}
      </text>
      <text x="52" y="95" textAnchor="middle" fontSize="11" fill={TEXT_COLOR} fontFamily="sans-serif">
        {B}
      </text>
      <text x="148" y="95" textAnchor="middle" fontSize="11" fill={TEXT_COLOR} fontFamily="sans-serif">
        {C}
      </text>
    </svg>
  );
}

export default function GeometryFigure({ type, params }) {
  if (!type) return null;
  const p = params ?? {};
  switch (type) {
    case 'triangle_right':
      return <TriangleRight params={p} />;
    case 'circle_tangent':
      return <CircleTangent params={p} />;
    case 'parabola_line':
    case 'parabola_cut':
      return <ParabolaLine params={p} />;
    case 'general_triangle':
    case 'triangle_general':
      return <GeneralTriangle params={p} />;
    default:
      return null;
  }
}
