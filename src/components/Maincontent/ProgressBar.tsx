import { Card } from "antd";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: { name: string };
  percent: number;
  value: number;
}

const data = [
  { name: "IBM", value: 400 },
  { name: "TSCO.LON", value: 300 },
  { name: "RELIANCE.BSE", value: 300 },
  { name: "600104.SHH", value: 200 },
  { name: "000002.SHZ", value: 150 },
  { name: "GPV.TRV", value: 250 },
  { name: "MBG.DEX", value: 350 },
];

const COLORS = [
  "#A4A0D3", // Darker pastel purple
  "#8E77D1", // Darker and richer pastel purple
  "#6E49C8", // Darker medium blue
  "#4A2DB8", // Darker and richer dark blue
  "#2E2C43", // Darker gray-blue
  "#9B9F9F", // Darker gray
  "#B0B3B8", // Slightly darker light gray
];

const renderActiveShape = (props: unknown): JSX.Element => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props as RenderActiveShapeProps;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        fontSize={12} // Reduce font size for value
      >{`Value ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        fontSize={12} // Reduce font size for percentage
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class ProgressBar extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: unknown, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <Card  style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70} // Adjust to create space
              outerRadius={90} // Adjust to create space
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={this.onPieEnter}
              paddingAngle={5} // Add space between slices
              label={({ index }) => <text>{data[index].name}</text>}
              labelLine={false}
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}


