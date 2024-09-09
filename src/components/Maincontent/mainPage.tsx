import React, { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Card, Tabs } from "antd";
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
    <div className="container">
      <Card className="main-card">
        <div className="text">Your Balance</div>
        <div className="balance"> ${totalBalance.toLocaleString()}</div>
        <ResponsiveContainer width="100%" height={70}>
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
        <Tabs 
          defaultActiveKey="today" 
          onChange={(key) => setActiveKey(key)}
          tabBarStyle={{
            borderBottom: "none", // Remove bottom border
            textAlign: "center"    // Center align the tabs
          }}
        >
          <TabPane tab="Today" key="today" />
          <TabPane tab="This Week" key="week" />
          <TabPane tab="This Month" key="month" />
          <TabPane tab="This Year" key="year" />
        </Tabs>
      </Card>
    </div>
  );
};

export default MainPage;
