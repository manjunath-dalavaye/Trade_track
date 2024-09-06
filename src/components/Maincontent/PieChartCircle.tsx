// import { Card } from "antd";
// import { PureComponent } from "react";
// import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

// interface RenderActiveShapeProps {
//   cx: number;
//   cy: number;
//   midAngle: number;
//   innerRadius: number;
//   outerRadius: number;
//   startAngle: number;
//   endAngle: number;
//   fill: string;
//   payload: { name: string };
//   percent: number;
//   value: number;
// }

// const data = [
//   { name: "IBM", value: 400 },
//   { name: "TSCO.LON", value: 300 },
//   { name: "RELIANCE.BSE", value: 300 },
//   { name: "600104.SHH", value: 200 },
//   { name: "000002.SHZ", value: 150 },
//   { name: "GPV.TRV", value: 250 },
//   { name: "MBG.DEX", value: 350 },
// ];

// const COLORS = [
//   "#A4A0D3", // Darker pastel purple
//   "#8E77D1", // Darker and richer pastel purple
//   "#6E49C8", // Darker medium blue
//   "#4A2DB8", // Darker and richer dark blue
//   "#2E2C43", // Darker gray-blue
//   "#9B9F9F", // Darker gray
//   "#B0B3B8", // Slightly darker light gray
// ];

// const renderActiveShape = (props: unknown): JSX.Element => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props as RenderActiveShapeProps;

//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 5) * cos; 
//   const sy = cy + (outerRadius + 5) * sin; 
//   const mx = cx + (outerRadius + 20) * cos; 
//   const my = cy + (outerRadius + 20) * sin; 
//   const ex = mx + (cos >= 0 ? 1 : -1) * 15; 
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text
//         x={cx} 
//         y={cy - 10} 
//         dy={8}
//         textAnchor="middle"
//         fill={fill}
//         fontSize={16} 
//       >
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 10}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//         fontSize="0.625rem" //font size for value
//       >{`Value ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 10}
//         y={ey}
//         dy={14}
//         textAnchor={textAnchor}
//         fill="#999"
//         fontSize="0.625rem" //font size for percentage
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// export default class PieChartCircle extends PureComponent {
//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (_: unknown, index: number) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     return (
//       <Card style={{ width: "100%", height: "100%" }}>
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart width={400} height={400}>
//             <Pie
//               activeIndex={this.state.activeIndex}
//               activeShape={renderActiveShape}
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={70} 
//               outerRadius={90}

//               fill="#8884d8"
//               dataKey="value"
//               onMouseEnter={this.onPieEnter}
//               paddingAngle={5} // Add space between slices
//               label={({ index }) => <text>{data[index].name}</text>}
//               labelLine={false}
//               cornerRadius={10}
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </Card>
//     );
//   }
// }

//with rem values for card


import { Card } from "antd";
import { PureComponent } from "react";
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
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 15;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontSize={16}
      >
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
        x={ex + (cos >= 0 ? 1 : -1) * 10}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        fontSize="1rem" //font size for value
      >{`Value ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 10}
        y={ey}
        dy={14}
        textAnchor={textAnchor}
        fill="#999"
        fontSize="0.8rem" //font size for percentage
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class PieChartCircle extends PureComponent {
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
      <Card
        style={{
          width: "29.375rem",
          height: "18.3rem", //card height
          flexShrink: 0,
          borderRadius: "0.75rem",
          background: "#FFF",
          marginTop: "1.56rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ResponsiveContainer width="100%" height={200}>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={68}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={this.onPieEnter}
              paddingAngle={5} // Add space between slices
              labelLine={false}
              cornerRadius={8}
            >
              {data.map((_entry, index) => (
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
