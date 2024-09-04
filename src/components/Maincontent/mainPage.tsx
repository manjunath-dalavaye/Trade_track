import PieChartCircle from "./PieChartCircle";
import ProgressBar from "./ProgressBar";
import React, { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Row, Col, Card, Tabs } from "antd";
import { useGetChartDataQuery } from "../../Services/ChartApi";
import './mainPage.scss';

const { TabPane } = Tabs;

interface DataPoint {
  name: string;
  pv: number;
}

const MainPage: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("today");
  const { data, isError, isLoading, isSuccess } = useGetChartDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  if (!isSuccess || !data) {
    return <div>No data available.</div>;
  }

  const totalBalance = data.year.reduce(
    (acc: number, point: DataPoint) => acc + point.pv,
    0
  );

  return (
    <Card
      title="Your balance"
      style={{
        width: "36.375rem",
        height: "18.625rem",
        marginTop: "1.56rem",
        marginLeft: "3.54rem",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      headStyle={{
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#4A4A4A",
      }}
      bodyStyle={{
        padding: "1.5rem",
      }}
    >
      <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
        ${totalBalance.toLocaleString()}
      </div>
      <div className="responsive-chart-container" style={{ marginTop: "1rem" }}>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data[activeKey]}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#4A4A4A"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Tabs
        defaultActiveKey="today"
        onChange={(key) => setActiveKey(key)}
        tabBarStyle={{
          marginBottom: 0,
          fontSize: "1rem",
          fontWeight: "500",
          color: "#8E8E8E",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="tabs-container"
      >
        <TabPane tab={<span className="tab-span">Today</span>} key="today" />
        <TabPane tab={<span className="tab-span">This Week</span>} key="week" />
        <TabPane tab={<span className="tab-span">This Month</span>} key="month" />
        <TabPane tab={<span className="tab-span">This Year</span>} key="year" />
      </Tabs>
    </Card>
  );
};

export default MainPage;
