"use client";

import { useEffect, useRef } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { useLanguage } from "@/contexts/LanguageContext";

const Card = styled.div`
  background: #1a0a0a;
  border: 1px solid #2a1212;
  border-radius: 6px;
  padding: 20px;
`;

/* ── Radar ── */
const RadarLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff44;
  margin-bottom: 14px;
`;

const RadarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const axes = [
  { label: "Frontend", value: 0.92 },
  { label: "Backend", value: 0.88 },
  { label: "Infra", value: 0.75 },
  { label: "Design", value: 0.65 },
  { label: "Leadership", value: 0.8 },
];

function polarToXY(angle, r, cx, cy) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function radarPoints(values, r, cx, cy) {
  const n = values.length;
  return values
    .map((v, i) => {
      const angle = (360 / n) * i;
      const pt = polarToXY(angle, r * v, cx, cy);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");
}

function RadarChart() {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 78;
  const levels = [0.25, 0.5, 0.75, 1.0];
  const n = axes.length;

  const shapeRef = useRef(null);

  useEffect(() => {
    const el = shapeRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    requestAnimationFrame(() => {
      el.style.transition = "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)";
      el.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* grid rings */}
      {levels.map((lvl) => (
        <polygon
          key={lvl}
          points={radarPoints(Array(n).fill(lvl), maxR, cx, cy)}
          fill="none"
          stroke="#3a1212"
          strokeWidth="1"
        />
      ))}

      {/* axes lines */}
      {axes.map((_, i) => {
        const angle = (360 / n) * i;
        const pt = polarToXY(angle, maxR, cx, cy);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={pt.x}
            y2={pt.y}
            stroke="#3a1212"
            strokeWidth="1"
          />
        );
      })}

      {/* filled shape */}
      <polygon
        points={radarPoints(
          axes.map((a) => a.value),
          maxR,
          cx,
          cy,
        )}
        fill="#e0241a22"
        stroke="none"
      />

      {/* animated border */}
      <polygon
        ref={shapeRef}
        points={radarPoints(
          axes.map((a) => a.value),
          maxR,
          cx,
          cy,
        )}
        fill="none"
        stroke="#e0241a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* dots + labels */}
      {axes.map((axis, i) => {
        const angle = (360 / n) * i;
        const pt = polarToXY(angle, maxR * axis.value, cx, cy);
        const labelPt = polarToXY(angle, maxR + 16, cx, cy);

        const anchor =
          labelPt.x < cx - 4 ? "end" : labelPt.x > cx + 4 ? "start" : "middle";

        return (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r={3} fill="#e0241a" />
            <text
              x={labelPt.x}
              y={labelPt.y + 4}
              textAnchor={anchor}
              fill="#ffffff88"
              fontSize="9"
              fontFamily="'Barlow Condensed', sans-serif"
              fontWeight="700"
              letterSpacing="0.1em"
              textDecoration="none"
            >
              {axis.label.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* center dot */}
      <circle cx={cx} cy={cy} r={2} fill="#e0241a66" />
    </svg>
  );
}

export default function SkillsGrid() {
  const { t } = useLanguage();

  return (
    <>
      <Card>
        <RadarLabel>Playstyle</RadarLabel>
        <RadarWrap>
          <RadarChart />
        </RadarWrap>
      </Card>
    </>
  );
}
